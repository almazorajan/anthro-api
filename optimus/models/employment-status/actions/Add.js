"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const EmploymentStatusModel = require("../employment-status.model");

module.exports = (employmentStatus) => {

    return new Promise((resolve, reject) => {
        new EmploymentStatusModel(employmentStatus)
            .save()
            .then((employmentStatus) => resolve(new Result({
                success: employmentStatus ? true : false,
                message: employmentStatus ? "successfully added a new employment status" : "unable to add new employment status",
                data: employmentStatus
            })))
            .catch((error) => reject(error));
    });
};