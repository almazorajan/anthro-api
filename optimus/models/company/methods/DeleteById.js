"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = Promise.method(() => {
    return new Promise((resolve, reject) => {
        this
            .model("Company")
            .findOne({ "_id": this._id })
            .remove()
            .exec()
            .then((dbRes) => {
                resolve(new Result({
                    success: dbRes.result.n === 1 ? true : false,
                    messasge: dbRes.result.n === 1 ? "the record was successfully deleted" : "unable to delete the record"
                }))
            })
            .catch((error) => {
                reject(error);
            });
    });
});