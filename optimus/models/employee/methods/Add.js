"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = Promise.method(() => {
    return new Promise((resolve, reject) => {
        this
            .save()
            .then((employee) => resolve(new Result({
                success: employee ? true : false,
                message: employee ? "successfully added a new employee" : "could not add an employee",
                data: employee
            })))
            .catch((error) => reject(error));
    });
});