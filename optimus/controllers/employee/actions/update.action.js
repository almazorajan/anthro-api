"use strict";

const Result = require("../../../classes/result");
const Employee = require("../../../models/employee/employee");
const ErrorResult = require("../../../helpers/error.result");

module.exports = (req, res) => {
    try {
        let employee = req.body.data;

        Employee
            .FindOneByIdAndEmployeeNumber(employee._id, employee.employeeNumber)
            .then((result) => {           
                if (result.success)
                    return new Employee(employee).UpdateById(employee);    

                return Employee
                    .FindOneByEmployeeNumber(employee.employeeNumber)
                    .then((result) => {
                        if (result.success) {
                            res.send(ErrorResult("The employee number already exists"));
                        } else {
                            return new Employee(employee).UpdateById();
                        }
                    });
            })
            .then((result) => res.send(result))
            .catch((e) => res.send(ErrorResult(e)));
    } catch (e) {
        res.send(ErrorResult(e));
    }
};