"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = Promise.method(() => {
    return new Promise((resolve, reject) => {
        this
            .find({})
            .populate("modules")
            .exec()
            .then((positions) => resolve(new Result({
                success: true,
                message: positions.length ? "successfully fetched all records" : "no records to be loaded yet",
                data: positions
            })))
            .catch((error) => reject(error));
    });
});