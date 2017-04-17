"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = Promise.method(() => {
    return new Promise((resolve, reject) => {
        this
            .find({})
            .exec()
            .then((modules) => resolve(new Result({
                success: true,
                message: modules.length ? "fetched all records" : "no records to fetch yet",
                data: modules
            })))
            .catch((error) => reject(error));
    });
});