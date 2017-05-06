"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = Promise.method(() => {
    return new Promise((resolve, reject) => {
        this
            .save()
            .then((auth) => {
                resolve(new Result({
                    success: auth._doc ? true : false,
                    message: auth._doc ? "successfully saved authentication" : "unable to save authentication",
                    data: auth._doc
                }));
            })
            .catch((error) => {
                reject(error);
            });
    });
});