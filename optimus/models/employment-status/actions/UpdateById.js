"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const EmploymentStatusModel = require("../employment-status.model");

module.exports = (employmentStatus) => {

    return new Promise((resolve, reject) => {
        EmploymentStatusModel
            .update(
                { _id: employmentStatus._id },
                { employmentStatus: employmentStatus.employmentStatus })
            .exec()
            .then((dbRes) => resolve(new Result({
                success: dbRes.n === 1 ? true : false,
                message: dbRes.n === 1 ? "the employment status was successfully updated" : "unable to update the employment status",
                data: dbRes
            })))
            .catch((error) => reject(error));
    });
};