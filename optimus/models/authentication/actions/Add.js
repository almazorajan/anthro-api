"use strict";

/**
 * version 1
 */

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const AuthenticationModel = require("../authentication.model");

module.exports = Add;

function Add(_auth) {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = new AuthenticationModel(_auth).save();

        promise.then((auth) => {
            if (auth) {
                result.success = true;
                result.message = "Successfully saved authentication.";
            } else {
                result.success = false;
                result.message = "Unable to save authentication.";
            }
            result.data = auth;

            resolve(result);
        }).catch((error) => {
            result.success = false;
            result.message = error.toString();
            reject(result);
        });
    });
}
