"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const GetModuleIds = require("../helpers/get-module-ids");

module.exports = Promise.method(() => {
    return new Promise((resolve, reject) => {
        if (this.hasOwnProperty("_id"))
            delete this._id;

        this.modules = GetModuleIds(this);

        this
            .save()
            .then((position) => resolve(new Result({
                success: position ? true : false,
                message: position ? "the record was successfully added" : "unable to save the record",
                data: position
            })))
            .catch((error) => reject(error));
    });
});