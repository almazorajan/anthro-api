"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = (CompanyModel) => {

    function Add(_company) {
        return new Promise((resolve, reject) => {
            let result = new Result();
            let promise = new CompanyModel(_company).save();

            promise.then((company) => {
                if (company) {
                    result.success = true;
                    result.message = "Company was succesfully saved.";
                } else {
                    result.success = false;
                    result.message = "Unable to add company.";
                }
                result.data = company;

                resolve(result);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    return Add;
}