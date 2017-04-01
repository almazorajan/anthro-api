"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const EmploymentStatusModel = require("../employment-status.model");

module.exports = UpdateById;

function UpdateById(_employmentStatus) {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = EmploymentStatusModel.update({
            _id: _employmentStatus._id
        }, {
            employmentStatus: _employmentStatus.employmentStatus
        }).exec();

        promise.then((dbRes) => {
            if (dbRes.n === 1) {
                result.success = true;
                result.message = "The Employment Status was successfully updated";
            } else {
                result.success = false;
                result.message = "Unable to update the Employment Status";
            }
            result.data = dbRes;

            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
}