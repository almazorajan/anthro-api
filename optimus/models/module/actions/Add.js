"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const ModuleModel = require("../module.model");

module.exports = (mod) => {
    
    return new Promise((resolve, reject) => {
        new ModuleModel(mod)
            .save()
            .then((mod) => resolve(new Result({
                success: mod ? true : false,
                message: mod ? "the record was successfully added" : "unable to add the record",
                data: mod
            })))
            .catch((error) => reject(error));
    });
};