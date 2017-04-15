"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const EmploymentStatusModel = require("../employment-status.model");

module.exports = (employmentStatus) => {

    return new Promise((resolve, reject) => {
        EmploymentStatusModel
            .findOne({ employmentStatus: employmentStatus.employmentStatus })
            .exec()
            .then((employmentStatus) => {
                resolve(new Result({
                    success: employmentStatus ? true : false,
                    message: employmentStatus ? "found a matching record" : "no matching record found",
                    data: employmentStatus
                }));
            })
            .catch((error) => reject(error));
    });
};