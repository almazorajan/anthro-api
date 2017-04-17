"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = Promise.method((_id, employeeNumber) => {
    return new Promise((resolve, reject) => {
        this
            .findOne({
                _id: _id,
                employeeNumber: employeeNumber
            })
            .exec()
            .then((employee) => {
                resolve(new Result({
                    success: employee ? true : false,
                    message: employee ? "found matching record" : "could not find any matching record",
                    data: employee
                }));
            })
            .catch((error) => {
                reject(error);
            });
    });
});