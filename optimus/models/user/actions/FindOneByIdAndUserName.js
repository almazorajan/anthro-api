"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const UserModel = require("../user.model");

module.exports = (user) => {

    return new Promise((resolve, reject) => {
        UserModel
            .findOne({
                _id: user._id,
                userName: user.userName
            })
            .exec()
            .then((user) => resolve(new Result({
                success: user ? true : false,
                message: user ? "found a record" : "unable to find a matching record"
            })))
            .catch((error) => resolve(error));
    });
}