"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const EmploymentStatusModel = require("../employment-status.model");

module.exports = Add;

function Add(_employmentStatus) {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = new EmploymentStatusModel(_employmentStatus).save();

        promise.then((employmentStatus) => {
            if (employmentStatus) {
                result.success = true;
                result.message = "Successfully added a new Employment Status";
            } else {
                result.success = false;
                result.message = "Unable to add new Employment Status";
            }
            result.data = employmentStatus;

            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
}