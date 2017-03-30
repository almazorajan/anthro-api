"use strict";

const Result = require("../../../classes/result");
const EmploymentStatus = require("../../../models/employment-status/employment-status");

module.exports = (router) => {
    router.post("/update", (req, res) => {
        try {
            let result = new Result();
            let employmentStatus = req.body.data;

            EmploymentStatus.FindOneByIdAndEmploymentStatus(employmentStatus).then((_result) => {
                if (_result.success) {
                    EmploymentStatus.UpdateById(employmentStatus).then((_result) => {
                        res.send(_result);
                    }).catch((error) => {
                        res.send(new Result({
                            success: false,
                            message: error.toString()
                        }));
                    });
                } else {
                    EmploymentStatus.FindOneByEmploymentStatus(employmentStatus).then((_result) => {
                        if (_result.success) {
                            result.success = false;
                            result.message = "Employment status already exists.";
                            res.send(result);
                        } else {
                            EmploymentStatus.UpdateById(employmentStatus).then((_result) => {
                                res.send(_result);
                            }).catch((error) => {
                                res.send(new Result({
                                    success: false,
                                    message: error.toString()
                                }));
                            });
                        }
                    }).catch((error) => {
                        res.send(new Result({
                            success: false,
                            message: error.toString()
                        }));
                    });
                }
            }).catch((error) => {
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
};