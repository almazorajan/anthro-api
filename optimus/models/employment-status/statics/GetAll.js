"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = Promise.method(() => {
    return new Promise((resolve, reject) => {
        this
            .find({})
            .exec()
            .then((employmentStatuses) => resolve(new Result({
                success: true,
                message: employmentStatuses.length ? "employment statuses were successfully loaded" : "no employment status were loaded",
                data: employmentStatuses
            })))
            .catch((error) => reject(error));
    });
});