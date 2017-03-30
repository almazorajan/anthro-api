"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = (CompanyModel) => {
    
    function FindOneByCompanyName(_company) {
        return new Promise((resolve, reject) => {
            let result = new Result();
            let promise = CompanyModel.findOne({ companyName: _company.companyName }).exec();

            promise.then((company) => {
                if (company) {
                    result.success = true;
                    result.message = "Found a record match.";
                } else {
                    result.success = false;
                    result.message = "No matching record found.";
                }

                result.data = company;
                resolve(result);
            })
                .catch((error) => {
                    reject(error);
                });
        });
    };
    return FindOneByCompanyName;
}