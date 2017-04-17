"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = Promise.method((user) => {
    return new Promise((resolve, reject) => {
        this
            .findOne({
                "userName": user.userName.replace(/\s+/g, " ").trim()
            })
            .populate({
                "path": "position",
                "populate": { "path": "modules" }
            })
            .exec()
            .then((user) => resolve(new Result({
                success: user._doc ? true : false,
                message: user._doc ? "found a matching record" : "unable to find matching record",
                data: user._doc
            })))
            .catch((error) => reject(error));
    });
});