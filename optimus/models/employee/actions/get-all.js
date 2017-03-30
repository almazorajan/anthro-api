"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const EmployeeModel = require("../employee.model");

module.exports = GetAll;

function GetAll() {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = EmployeeModel.find({})
            .populate("company")
            .populate("position")
            .populate("employmentStatus")
            .populate("workHistory.employmentStatus")
            .exec();

        promise.then((employees) => {
            result.success = true;

            if (employees.length)
                result.message = "Successfully loaded all employees.";
            else
                result.message = "No records to load.";

            result.data = employees;

            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
}