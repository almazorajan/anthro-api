
"use strict";

const express = require("express");
const router = express.Router();
const Result = require("../classes/result");
const UserModel = require("../models/user/user.model");

router.use(require("../middlewares/session-validator.middleware").ValidateSession);

router.post("/getall", (req, res) => {
    try {
        UserModel.GetAll().then((result) => {
            res.send(result);
        })
        .catch((error) => {
            res.send(new Result({
                success: false,
                message: error.toString()
            }));
        });
    } catch(e) {
        res.send(new Result({
            success: false,
            message: (e || e.message).toString()
        }));
    }
});

router.post("/add", (req, res) => {
    try {
        let result = new Result();
        let user = req.body.data;

        UserModel.FindOneByUserName(user).then((_result) => {
            if(_result.success) {
                result.success = false;
                result.message = "Username '" + user.userName + "' already exists.";
                res.send(result);
            } else {
                return UserModel.Add(user);
            }
        })
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            res.send(new Result({
                success: false,
                message: error.toString()
            }));
        });
    } catch(e) {
        res.send(new Result({
            success: false,
            message: (e || e.message).toString()
        }));
    }
});

router.post("/update", (req, res) => {
    try {
        let result = new Result();
        let user = req.body.data;

        UserModel.FindOneByIdAndUserName(user).then((_result) => {
            if(_result.success) {
                UserModel.UpdateById(user).then((result) => {
                    res.send(result);
                })
                .catch((error) => {
                    res.send(new Result({
                        success: false,
                        message: error.toString()
                    }));
                });
            } else {
                UserModel.FindOneByUserName(user).then((_result) => {
                    if(_result.success) {
                        res.send(new Result({
                            success: false,
                            message: "Username already exists."
                        }));
                    } else {
                       return UserModel.UpdateById(user); 
                    }
                })
                .then((_result) => {
                    res.send(_result);
                })
                .catch((error) => {
                    res.send(new Result({
                        success: false,
                        message: error.toString()
                    }));
                });
            }
        })
        .catch((error) => {
            res.send(new Result({
                success: false,
                message: error.toString()
            }));
        });
    } catch(e) {
        res.send(new Result({
            success: false,
            messsage: (e || e.message).toString()
        }));
    }
});

router.post("/updatepassword", (req, res) => {
    try {
        let result = new Result();
        let user = req.body.data;
        
        if(!user.password) {
            result.success = false;
            result.message = "No password was identified.";
            res.send(result);
        }

        if(!user.password.trim()) {
            result.success = false;
            result.message = "No password was identified.";
            res.send(result);
        }

        UserModel.FindOneById(user).then((_result) => {
            if(_result.success) {
                UserModel.UpdatePasswordById(user).then((result) => {
                    res.send(result);
                })
                .catch((error) => {
                    res.send(new Result({
                        success: false,
                        message: error.toString()
                    }));
                });
            } else {
                res.send(new Result({
                    success: false,
                    message: "Record cannot be updated"
                }));
            }
        })
        .catch((error) => {
            res.send(new Result({
                success: false,
                message: error.toString()
            }));
        });
    } catch(e) {
        res.send(new Result({
            success: false,
            messsage: (e || e.message).toString()
        }));
    }
});

router.post("/delete", (req, res) => {
    try {
        let user = req.body.data;

        UserModel.DeleteById(user).then((result) => {
            res.send(result);            
        })
        .catch((error) => {
            res.send(new Result({
                success: false,
                message: error.toString()
            }));
        });
    } catch(e) {
        res.send(new Result({
            success: false,
            message: (e || e.message).toString()
        }));
    }
});

module.exports = router;