"use strict";

const Result = require("../../../classes/result");
const Employee = require("../../../models/employee/employee");

module.exports = (router) => {
    router.post("/add", (req, res) => {
        try {
            let result = new Result();
            let employee = req.body.data;

            Employee.FindOneByEmployeeNumber(employee).then((_result) => {
                if (_result.success) {
                    result.success = false;
                    result.message = "The employee number already exists.";
                    res.send(result);
                } else {
                    return Employee.Add(employee);
                }
            }).then((_result) => {
                res.send(_result);
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
