"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const AuthenticationModel = require("../authentication.model");

module.exports = ValidateToken;

function ValidateToken(token, fingerprint) {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = AuthenticationModel.findOne({
            token: token,
            fingerprint: fingerprint
        }).exec();

        promise.then((auth) => {
            if (auth) {
                result.success = true;
                result.message = "Valid token";
            } else {
                result.success = false;
                result.message = "Invalid token";
            }

            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
}