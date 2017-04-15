"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const EmploymentStatusModel = require("../employment-status.model");

module.exports = (employmentStatus) => {

    return new Promise((resolve, reject) => {
        EmploymentStatusModel
            .findById({ _id: employmentStatus._id })
            .remove()
            .then((dbRes) => resolve(new Result({
                success: dbRes.result.n === 1 ? true : false,
                message: dbRes.result.n === 1 ? "employment status was successfully deleted" : "unable to delete the employment status",
                data: dbRes
            })))
            .catch((error) => reject(error));
    });
}