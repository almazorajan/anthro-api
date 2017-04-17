"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = Promise.method(() => {
    return new Promise((resolve, reject) => {
        this
            .save()
            .then((company) => resolve(new Result({
                success: company ? true : false,
                message: company ? "the record was successfully added" : "unable to add the record",
                data: company
            })))
            .catch((error) => reject(error));
    });
});