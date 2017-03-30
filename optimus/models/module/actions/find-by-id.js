"use strict";

const Promise = require("bluebird");
const ModuleModel = require("../module.model");

module.exports = FindById;

function FindById(_id) {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = ModuleModel.findById(_id).exec();

        promise.then((mod) => {
            if (mod) {
                result.success = true;
                result.message = "Object with id '" + _id + "' is existing.";
            } else {
                result.success = false;
                result.message = "No record found with an id of '" + _id + "'";
            }
            result.data = mod;

            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
}