"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = Promise.method(() => {
    return new Promise((resolve, reject) => {
        this
            .model("EmploymentStatus")    
            .update(
                { "_id": this._id },
                { "employmentStatus": this.employmentStatus })
            .exec()
            .then((dbRes) => resolve(new Result({
                success: dbRes.n === 1 ? true : false,
                message: dbRes.n === 1 ? "the employment status was successfully updated" : "unable to update the employment status",
                data: dbRes
            })))
            .catch((error) => reject(error));
    });
});