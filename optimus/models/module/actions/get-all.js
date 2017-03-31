"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const ModuleModel = require("../module.model");

module.exports = GetAll;

function GetAll() {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = ModuleModel.find({}).exec();

        promise.then((modules) => {
            result.success = true;
                
            if (modules.length) {
                result.message = "fetched all records";
            } else {
                result.message = "no records to fetch yet";
            }
            result.data = modules;

            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
}