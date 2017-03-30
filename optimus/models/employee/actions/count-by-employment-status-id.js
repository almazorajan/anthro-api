"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = (EmployeeModel) => {

    function CountByEmploymentStatusId(employmentStatusId) {
        return new Promise((resolve, reject) => {
            let promise = EmployeeModel.count({ employmentStatus: employmentStatusId }).exec();

            promise.then((count) => {
                resolve(count);
            })
                .catch((error) => {
                    reject(error);
                });
        });
    }
    return CountByEmploymentStatusId;
};

