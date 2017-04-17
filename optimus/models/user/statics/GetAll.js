"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = Promise.method(() => {
    return new Promise((resolve, reject) => {
        this
            .find({})
            .populate({
                "path": "position",
                "populate": { "path": "modules" }
            })
            .exec()
            .then((users) => resolve(new Result({
                success: true,
                message: users.length ? "successfully loaded all records" : "no records to be loaded",
                data: users
            })))
            .catch((error) => reject(error));
    });
});