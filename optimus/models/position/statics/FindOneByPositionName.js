"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = Promise.method((positionName) => {
    return new Promise((resolve, reject) => {
        this
            .findOne({ "positionName": positionName })
            .exec()
            .then((position) => resolve(new Result({
                success: position ? true : false,
                message: position ? "found a matching record" : "unable to find a matching record",
                data: position
            })))
            .catch((error) => reject(error));
    });
});