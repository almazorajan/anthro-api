"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = Promise.method((userName, password) => {
    return new Promise((resolve, reject) => {
        this
            .findOne({
                "userName": String(userName),
                "password": String(password)
            })
            .populate({
                "path": "position",
                "populate": { "path": "modules" }
            })
            .exec()
            .then((user) => resolve(new Result({
                success: user ? true : false,
                message: user ? "the record exists" : "no record found",
                data: user
            })))
            .catch((error) => reject(error));
    });
});