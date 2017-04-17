"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = Promise.method(() => {
    return new Promise((resolve, reject) => {
        this
            .model("Employee")
            .findById({ _id: this._id })
            .remove()
            .exec()
            .then((dbRes) => resolve(new Result({
                success: dbRes.n === 1 ? true : false,
                message: dbRes.n === 1 ? "the record was successfully deleted" : "could not delete record",
                data: dbRes
            })))
            .catch((error) => reject(error));
    });
});