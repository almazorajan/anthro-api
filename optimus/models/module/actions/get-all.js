"use strict";

const Promise = require("bluebird");
const ModuleModel = require("../module.model");

module.exports = GetAll;

function GetAll() {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = ModuleModel.find({}).exec();

        promise.then((modules) => {
            result.success = true;
                
            if (modules.length) {
                result.message = "Succesfully loaded all modules";
            } else {
                result.message = "No module loaded";
            }
            result.data = modules;

            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
}