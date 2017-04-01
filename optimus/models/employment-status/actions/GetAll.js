"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const EmploymentStatusModel = require("../employment-status.model");

module.exports = GetAll;

function GetAll() {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = EmploymentStatusModel.find({}).exec();

        promise.then((employmentStatuses) => {
            result.success = true;

            if (employmentStatuses.length)
                result.message = "Employment Statuses were successfully loaded";
            else
                result.message = "No Employment Status were loaded";

            result.data = employmentStatuses;
            resolve(result);
        })
        .catch((error) => {
            reject(error);
        });
    });
}
