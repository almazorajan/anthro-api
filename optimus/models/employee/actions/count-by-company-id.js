"use strict";

const Promise = require("bluebird");
const EmployeeModel = require("../employee.model");

module.exports = CountByCompanyId;

function CountByCompanyId(companyId) {
    return new Promise((resolve, reject) => {
        let promise = EmployeeModel.count({ company: companyId }).exec();

        promise.then((count) => {
            resolve(count);
        }).catch((error) => {
            reject(error);
        });
    });
}