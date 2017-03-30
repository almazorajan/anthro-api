"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = (CompanyModel) => {
    
    function FindOneByIdAndCompanyName(_company) {
        return new Promise((resolve, reject) => {
            let result = new Result();
            let promise = CompanyModel.findOne({ _id: _company._id, companyName: _company.companyName }).exec();

            promise.then((company) => {
                if (company) {
                    result.success = true;
                    result.message = "Found a matching record.";
                } else {
                    result.success = false;
                    result.message = "Cannot find a matching record.";
                }
                result.data = company;

                resolve(result);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    return FindOneByIdAndCompanyName;
}