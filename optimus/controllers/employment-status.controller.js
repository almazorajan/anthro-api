"use strict";

const Promise = require("bluebird");
const express = require("express");
const router = express.Router();
const Result = require("../classes/result");
const EmployeeModel = require("../models/employee/employee.model");
const EmploymentStatusModel = require("../models/employment-status/employment-status.model");

router.use(require("../middlewares/session-validator.middleware").ValidateSession);

router.post("/getall", (req, res) => {
    try {
        EmploymentStatusModel.GetAll().then((result) => {
            res.send(result);
        })
        .catch((error) => {
            res.send(error);
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
        let employmentStatus = req.body.data;

        EmploymentStatusModel.FindOneByEmploymentStatus(employmentStatus).then((_result) => {
            if(_result.success) {
                result.success = false;
                result.message = "Record is already existing.";
                res.send(result);
            } else {
                return EmploymentStatusModel.Add(employmentStatus);
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
        let employmentStatus = req.body.data;

        EmploymentStatusModel.FindOneByIdAndEmploymentStatus(employmentStatus).then((_result) => {
            if(_result.success) {
                EmploymentStatusModel.UpdateById(employmentStatus).then((_result) => {
                    res.send(_result);
                })
                .catch((error) => { 
                    res.send(new Result({
                        success: false,
                        message: error.toString()
                    }));
                });
            } else {
                EmploymentStatusModel.FindOneByEmploymentStatus(employmentStatus).then((_result) => {
                    if(_result.success) {
                        result.success = false;
                        result.message = "Employment status already exists.";
                        res.send(result);
                    } else {
                        EmploymentStatusModel.UpdateById(employmentStatus).then((_result) => {
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
        let employmentStatus = req.body.data;
        
        let check1 = EmployeeModel.CountByEmploymentStatusId(employmentStatus._id);
        let check2 = EmployeeModel.CountByWorkHistoryEmploymentStatusId(employmentStatus._id);

        Promise.all([check1, check2]).then((res) => {
            let countEmploymentStatus = res[0];
            let countWorkHistoryEmploymentStatus = res[1];

            if(countEmploymentStatus <= 0 && countWorkHistoryEmploymentStatus <= 0) {
                EmploymentStatusModel.DeleteById(employmentStatus).then((result) => {
                    res.send(result);
                })
                .catch((error) => {
                    res.send(new Result({
                        success: false,
                        message: (e || e.message).toString()
                    }));
                });
            } else {
                res.send(new Result({
                    success: false,
                    message: "Could not delete employment status. It is still being used"
                }));
            }
        })
        .catch((error) => {
            res.send(new Result({
                success: false,
                message: (e || e.message).toString()
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
