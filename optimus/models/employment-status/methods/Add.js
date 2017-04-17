"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = Promise.method(() => {
    return new Promise((resolve, reject) => {
        this
            .save()
            .then((employmentStatus) => resolve(new Result({
                success: employmentStatus ? true : false,
                message: employmentStatus ? "successfully added a new employment status" : "unable to add new employment status",
                data: employmentStatus
            })))
            .catch((error) => reject(error));
    });
});