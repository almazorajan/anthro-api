"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const ModuleModel = require("../module.model");

module.exports = (_id) => {

    return new Promise((resolve, reject) => {
        ModuleModel
            .findById({ _id: _id })
            .remove()
            .exec()
            .then((dbRes) => resolve(new Result({
                success: dbRes.result.n === 1 ? true : false,
                message: dbRes.result.n === 1 ? "the record was successfully removed" : "unable to remove the record",
                data: dbRes
            })))
            .catch((error) => resolve(error));
    });
}