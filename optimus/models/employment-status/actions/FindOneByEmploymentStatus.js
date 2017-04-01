"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const EmploymentStatusModel = require("../employment-status.model");

module.exports = FindOneByEmploymentStatus;

function FindOneByEmploymentStatus(_employmentStatus) {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = EmploymentStatusModel.findOne({ employmentStatus: _employmentStatus.employmentStatus }).exec();

        promise.then((employmentStatus) => {
            if (employmentStatus) {
                result.success = true;
                result.message = "Found a matching record";
            } else {
                result.success = false;
                result.messsage = "No matching record";
            }

            result.data = employmentStatus;
            resolve(result);
        })
        .catch((error) => {
            reject(error);
        });
    });
}