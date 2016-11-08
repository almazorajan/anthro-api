
"use strict";

const express = require("express");
const router = express.Router();

const UserModel = require("../models/user-model.js");

const Result = require("../classes/result.js");

router.post("/getall", (req, res) => {

    try {

        UserModel.GetAll((result) => {

            res.send(result);

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

        UserModel.FindOneByUserName(user.userName, (_result) => {

            if(_result.success) {

                result.success = false;
                result.message = "Username '" + user.userName + "' already exists.";
                res.send(result);

            } else {

                UserModel.Add(user, (result) => {

                    res.send(result);

                });

            }

        });

    } catch(e) {

        res.send(new Resuslt({
            success: false,
            message: (e || e.message).toString()
        }));

    }

});

router.post("/update", (req, res) => {

    try {

        let result = new Result();
        let user = req.body.data;

        UserModel.FindOneByIdAndUserName(user._id, user.userName, (_result) => {

            if(_result.success) {

                UserModel.Update(user, (_result) => {

                    res.send(result);

                });

            } else {

                UserModel.FindOneByUserName(user.userName, (_result) => {

                    if(_result.success) {

                        result.success = false;
                        result.message = "Username '" + user.userName + "' is already taken.";
                        res.send(result);

                    } else {

                        UserModel.Update(user, (_result) => {

                            res.send(result);

                        });

                    }

                });

            }

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

        let user = user.body.data;

        UserModel.DeleteById(user._id, (result) => {

            res.send(result);

        });

    } catch(e) {

        res.send(new Result({
            success: false,
            message: (e || e.message).toString()
        }));

    }

});

module.exports = router;