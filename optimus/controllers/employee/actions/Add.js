"use strict";

const Employee = require("../../../models/employee/employee");
const ErrorResult = require("../../../helpers/error.result");
const SanitizeWorkHistory = require("../../../models/employee/helpers/SanitizeWorkHistory");
const SanitizeEmployee = require("../helpers/SanitizeEmployee");

module.exports = (req, res) => {
    try {
        let employee = req.body.data;

        Employee
            .FindOneByEmployeeNumber(employee.employeeNumber)
            .then((result) => {
                if (!result.success) {
                    return new Employee(SanitizeEmployee(employee)).Add();
                }
                res.send(ErrorResult("The employee number already exists"));
            })
            .then((result) => { 
                res.send(result);
            })
            .catch((e) => { 
                res.send(ErrorResult(e));
            });
    } catch (e) {
        res.send(ErrorResult(e));
    }
};