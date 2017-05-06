"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = Promise.method(() => {
    return new Promise((resolve, reject) => {
        this
            .model("Company")
            .update({
                "_id": this._id
            }, {
                "companyName": this.companyName,
                "companyAddress": this.companyAddress,
                "contactNumber": this.contactNumber,
                "emailAddress": this.emailAddress
            })
            .exec()
            .then((dbRes) => {
                resolve(new Result({
                    success: dbRes.n === 1 ? true : false,
                    message: dbRes.n === 1 ? "the record was successfully updated" : "unable to update the record"
                }));
            })
            .catch((error) => {
                reject(error);
            });
    });
});