"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = Promise.method((employmentStatus) => {
    return new Promise((resolve, reject) => {
        this
            .findOne({ "employmentStatus": employmentStatus })
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
});