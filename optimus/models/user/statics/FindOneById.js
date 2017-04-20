"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = Promise.method((_id) => {
    return new Promise((resolve, reject) => {
        this
            .findById(_id)
            .populate({
                "path": "position",
                "populate": { "path": "modules" }
            })
            .exec()
            .then((user) => resolve(new Result({
                success: user ? true : false,
                message: user ? "found a record" : "no record found"
            })))
            .catch((error) => reject(error));
    });
});