"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = Promise.method(() => {
    return new Promise((resolve, reject) => {
        this
            .find({})
            .populate("company")
            .populate("position")
            .populate("employmentStatus")
            .populate("workHistory.employmentStatus")
            .exec()
            .then((employees) => {
                resolve(new Result({
                    success: true,
                    message: employees.length ? "successfully loaded all employees" : "no records loaded",
                    data: employees
                }));
            }).catch((error) => {
                reject(error);
            });
    });
});