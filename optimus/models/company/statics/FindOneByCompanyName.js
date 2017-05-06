"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = Promise.method((companyName) => {
    return new Promise((resolve, reject) => {
        this
            .findOne({ "companyName": companyName })
            .exec()
            .then((company) => {
                resolve(new Result({
                    success: company ? true : false,
                    message: company ? "found a matching record" : "no record found",
                    data: company
                }));
            }).catch((error) => {
                reject(error);
            });
    });
});