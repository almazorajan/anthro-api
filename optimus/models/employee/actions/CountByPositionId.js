"use strict";

const Promise = require("bluebird");
const EmployeeModel = require("../employee.model");

module.exports = CountByPositionId;

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