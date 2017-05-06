"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = Promise.method(() => {
    return new Promise((resolve, reject) => {
        this
            .model("Authorization")
            .findOne({
                token: this.token,
                fingerprint: this.fingerprint
            })
            .exec()
            .then((auth) => {
                resolve(new Result({
                    success: auth ? true : false,
                    message: auth ? "valid token" : "invalid token",
                    data: auth
                }));
            })
            .catch((error) => {
                reject(error);
            });
    });
});
