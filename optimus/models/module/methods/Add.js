"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = Promise.method(() => {
    return new Promise((resolve, reject) => {
        this
            .save()
            .then((mod) => resolve(new Result({
                success: mod ? true : false,
                message: mod ? "the record was successfully added" : "unable to add the record",
                data: mod
            })))
            .catch((error) => reject(error));
    });
});