"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const ModuleModel = require("../module.model");

module.exports = FindById;

function FindById(_id) {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = ModuleModel.findById(_id).exec();

        promise.then((mod) => {
            if (mod) {
                result.success = true;
                result.message = "record is existing";
            } else {
                result.success = false;
                result.message = "record is not existing";
            }
            result.data = mod;

            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
}