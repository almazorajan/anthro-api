"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const EmployeeModel = require("../employee.model");

module.exports = FindOneByIdAndEmployeeNumber;

function FindOneByIdAndEmployeeNumber(_employee) {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = EmployeeModel.findOne({ _id: _employee._id, employeeNumber: _employee.employeeNumber }).exec();

        promise.then((employee) => {
            if (employee) {
                result.success = true;
                result.message = "Found matching record.";
            } else {
                result.success = false;
                result.message = "Could not find any matching record.";
            }

            result.data = employee;
            resolve(result);
        })
            .catch((error) => {
                reject(error);
            });
    });
}

