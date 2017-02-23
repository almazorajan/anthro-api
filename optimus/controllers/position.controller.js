"use strict";

const express = require("express");
const router = express.Router();
const Result = require("../classes/result");
const EmployeeModel = require("../models/employee/employee.model");
const PositionModel = require("../models/position/position.model");

router.use(require("../middlewares/session-validator.middleware").ValidateSession);

router.post("/getall", (req, res) => {
    let result = new Result();

    try {
        PositionModel.GetAll().then((result) => {
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
        let position = req.body.data;

        PositionModel.FindOneByPositionName(position).then((_result) => {
            if(_result.success) {
                result.success = false;
                result.message = "Position name is already existing.";
                res.send(result);
            } else {
                return PositionModel.Add(position);
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
    } catch (e) {
        res.send(new Result({
            success: false,
            message: (e || e.message).toString()
        }));
    }
});

router.post("/update", (req, res) => {
    try {
        let result = new Result();
        let position = req.body.data;

        PositionModel.FindOneByIdAndPositionName(position).then((_result) => {
            if(_result.success) {
                PositionModel.UpdateById(position).then((_result) => {
                    res.send(_result);
                })
                .catch((error) => {
                    res.send(new Result({
                        success: false,
                        message: error.toString()
                    }));
                });
            } else {
                PositionModel.FindOneByPositionName(position).then((_result) => {
                    if(_result.success) {
                        result.success = false;
                        result.message = "Position name already exists.";
                        res.send(result);
                    } else {
                        PositionModel.UpdateById(position).then((_result) => {
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
            message: (e || e.message).toString()
        }));
    }
});

router.post("/delete", (req, res) => {
    try {
        let position = req.body.data;

        EmployeeModel.CountByPositionId(position._id).then((count) => {
            if(count <= 0) {
                PositionModel.DeleteById(position).then((result) => {
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
                    message: "Unable to delete position. It is still being used by an employee"
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
            message: (e || e.message).toString()
        }));
    }
});

module.exports = router;