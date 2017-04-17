"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = Promise.method(() => {
    return new Promise((resolve, reject) => {
        this
            .model("EmploymentStatus")    
            .findById({ "_id": this._id })
            .remove()
            .then((dbRes) => resolve(new Result({
                success: dbRes.result.n === 1 ? true : false,
                message: dbRes.result.n === 1 ? "employment status was successfully deleted" : "unable to delete the employment status",
                data: dbRes
            })))
            .catch((error) => reject(error));
    });
});