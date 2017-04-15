"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const ModuleModel = require("../module.model");

module.exports = (_id) => {

    return new Promise((resolve, reject) => {
        ModuleModel
            .findById(_id)
            .exec()
            .then((mod) => {
                resolve(new Result({
                    success: mod ? true : false,
                    message: mod ? "found a matching record" : "no matching record found",
                    data: data
                }));
            }).catch((error) => reject(error));
    });
};