"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const EmploymentStatusModel = require("../employment-status.model");

module.exports = FindOneByIdAndEmploymentStatus;

function FindOneByIdAndEmploymentStatus(_employmentStatus) {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = EmploymentStatusModel.findOne({
            _id: _employmentStatus._id,
            employmentStatus: _employmentStatus.employmentStatus
        }).exec();

        promise.then((employmentStatus) => {
            if (employmentStatus) {
                result.success = true;
                result.message = "Found a matching record";
            } else {
                result.success = false;
                result.message = "No matching record found";
            }
            result.data = employmentStatus;

            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
}