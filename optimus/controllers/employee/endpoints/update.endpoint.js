"use strict";

const Result = require("../../../classes/result");
const Employee = require("../../../models/employee/employee");

module.exports = (router) => {
    router.post("/update", (req, res) => {
        try {
            let result = new Result();
            let employee = req.body.data;

            Employee.FindOneByIdAndEmployeeNumber(employee).then((_result) => {
                if (_result.success) {
                    Employee.UpdateById(employee).then((_result) => {
                        res.send(_result);
                    }).catch((e) => {
                        res.send(new Result({
                            success: false,
                            message: (e || e.message).toString()
                        }));
                    });
                } else {
                    Employee.FindOneByEmployeeNumber(employee).then((_result) => {
                        if (_result.success) {
                            res.send(new Result({
                                success: false,
                                message: "The employee number already exists"
                            }));
                        } else {
                            Employee.UpdateById(employee).then((_result) => {
                                res.send(_result);
                            }).catch((e) => {
                                res.send(new Result({
                                    success: false,
                                    message: (e || e.message).toString()
                                }));
                            });
                        }
                    });
                }
            }).catch((e) => {
                res.send(new Result({
                    success: false,
                    message: (e || e.message).toString()
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
