"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = Promise.method(() => {
    return new Promise((resolve, reject) => {
        this
            .model("User")    
            .update({
                "_id": this._id
            }, {
                "userName": this.userName,
                "firstName": this.firstName,
                "middleName": this.middleName,
                "lastName": this.lastName,
                "dateUpdated": new Date(),
                "position": this.position._id
            })
            .exec()
            .then((dbRes) => resolve(new Result({
                success: dbRes.n === 1 ? true : false,
                message: dbRes.n === 1 ? "the record was successfully updated" : "unable to update the record",
                data: dbRes
            })))
            .catch((error) => reject(error));
    });
});