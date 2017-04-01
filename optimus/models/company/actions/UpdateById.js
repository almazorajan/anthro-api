"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const CompanyModel = require("../company.model");

module.exports = UpdateById;

function UpdateById(_company) {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = CompanyModel.update({
            _id: _company._id
        }, {
            companyName: _company.companyName,
            companyAddress: _company.companyAddress,
            contactNumber: _company.contactNumber,
            emailAddress: _company.emailAddress
        }).exec();

        promise.then((dbRes) => {
            if (dbRes.n === 1) {
                result.success = true;
                result.message = "The company was successfully updated.";
            } else {
                result.success = false;
                result.message = "The company was not successfully updated.";
            }
            result.data = dbRes;

            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
}
