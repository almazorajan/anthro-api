"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const EmployeeModel = require("../employee.model");

module.exports = DeleteById;

function DeleteById(_employee) {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = EmployeeModel.findById({ _id: _employee._id }).remove().exec();

        promise.then((dbRes) => {
            if (dbRes.result.n === 1) {
                result.success = true;
                result.message = "The record was successfully deleted.";
            } else {
                result.success = false;
                result.message = "Could not delete record.";
            }
            result.data = dbRes;

            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
}

