"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = (EmployeeModel) => {

    function CountByPositionId(positionId) {
        return new Promise((resolve, reject) => {
            let promise = EmployeeModel.count({ position: positionId }).exec();

            promise.then((count) => {
                resolve(count);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    return CountByPositionId;
}