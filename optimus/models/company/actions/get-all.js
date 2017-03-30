"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const CompanyModel = require("../company.model");

module.exports = GetAll;

function GetAll() {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = CompanyModel.find({}).exec();

        promise.then((companies) => {
            result.success = true;

            if (companies.length)
                result.message = "Successfully loaded all companies.";
            else
                result.message = "No company records loaded.";

            result.data = companies;
            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
}
