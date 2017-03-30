"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const PositionModel = require("../position.model");

module.exports = CountByModuleId;

function CountByModuleId(moduleId) {
    return new Promise((resolve, reject) => {
        let promise = PositionModel.count({ modules: moduleId }).exec();

        promise.then((count) => {
            resolve(count);
        }).catch((error) => {
            reject(error);
        });
    });
}