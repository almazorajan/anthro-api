"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = (EmployeeModel) => {
    
    function CountByCompanyId(companyId) {
        return new Promise((resolve, reject) => {
            let promise = EmployeeModel.count({ company: companyId }).exec();

            promise.then((count) => {
                resolve(count);
            })
                .catch((error) => {
                    reject(error);
                });
        });
    }
    return CountByCompanyId;
}