"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const EmploymentStatusModel = require("../employment-status.model");

module.exports = DeleteById;

function DeleteById(_employmentStatus) {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = EmploymentStatusModel.findById({ _id: _employmentStatus._id }).remove();

        promise.then((dbRes) => {
            if (dbRes.result.n === 1) {
                result.success = true;
                result.message = "Employment Status was successfully deleted";
            } else {
                result.success = false;
                result.message = "Unable to delete the Employment Status";
            }
            result.data = dbRes;

            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
}