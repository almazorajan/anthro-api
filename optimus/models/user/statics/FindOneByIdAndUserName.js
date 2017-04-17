"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = Promise.method((_id, userName) => {
    return new Promise((resolve, reject) => {
        this
            .findOne({
                "_id": String(_id),
                "userName": String(userName)
            })
            .exec()
            .then((user) => resolve(new Result({
                success: user ? true : false,
                message: user ? "found a record" : "unable to find a matching record"
            })))
            .catch((error) => resolve(error));
    });
});