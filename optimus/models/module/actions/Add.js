"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const ModuleModel = require("../module.model");

module.exports = Add;

function Add(_module) {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = new ModuleModel(_module).save();

        promise.then((mod) => {
            if (mod) {
                result.success = true;
                result.message = "record was successfully added";
            } else {
                result.success = false;
                result.message = "unable to save the record";
            }
            result.data = mod;

            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
}
