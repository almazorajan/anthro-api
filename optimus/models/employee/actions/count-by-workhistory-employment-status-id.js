"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = (EmployeeModel) => {
    
    function CountByWorkHistoryEmploymentStatusId(employmentStatusId) {
        return new Promise((resolve, reject) => {
            let promise = EmployeeModel.count({ workHistory: { employmentStatus: employmentStatusId } }).exec();

            promise.then((count) => {
                resolve(count);
            })
                .catch((error) => {
                    reject(error);
                });
        });
    }
    return CountByWorkHistoryEmploymentStatusId;
};