"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const GetModuleIds = require("../helpers/get-module-ids");

module.exports = Promise.method((position) => {
    return new Promise((resolve, reject) => {
        this
            .model("Position")    
            .update({
                "_id": this._id
            }, {
                "positionName": this.positionName,
                "modules": GetModuleIds(this)
            })
            .exec()
            .then((dbRes) => resolve(new Result({
                success: dbRes.n === 1 ? true : false,
                message: dbRes.n === 1 ? "the record was successfully updated" : "unable to update the record"
            })))
            .catch((error) => reject(error));
    });
});