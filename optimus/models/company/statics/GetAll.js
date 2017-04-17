"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = Promise.method(() => {
    return new Promise((resolve, reject) => {
        this
            .find({})
            .exec()
            .then((companies) => resolve(new Result({
                success: true,
                message: companies.length ? "successfully loaded all records" : "no records to load",
                data: companies
            })))
            .catch((error) => reject(error));
    });
});