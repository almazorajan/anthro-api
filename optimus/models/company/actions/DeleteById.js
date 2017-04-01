"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const CompanyModel = require("../company.model");

module.exports = DeleteById;

function DeleteById(_company) {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = CompanyModel.findOne({ _id: _company._id }).remove().exec();

        promise.then((dbRes) => {
            if (dbRes.result.n === 1) {
                result.success = true;
                result.message = "Company was successfully deleted.";
            } else {
                result.success = false;
                result.message = "Unable to delete the Company.";
            }

            resolve(result);
        })
            .catch((error) => {
                reject(error);
            });
    });
}