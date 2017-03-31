"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const ModuleModel = require("../module.model");

module.exports = FindOneByModuleName;

function FindOneByModuleName(_moduleName) {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = ModuleModel.findOne({ moduleName: _moduleName }).exec();

        promise.then((module) => {
            if (module) {
                result.success = true;
                result.message = "module name is already existing";
            } else {
                result.success = false;
                result.message = "module name does not exist";
            }
            result.data;

            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
}