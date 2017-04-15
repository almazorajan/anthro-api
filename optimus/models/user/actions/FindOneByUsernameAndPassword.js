"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const UserModel = require("../user.model");

module.exports = (user) => {

    return new Promise((resolve, reject) => {
        UserModel
            .findOne({
                userName: user.userName,
                password: user.password
            })
            .populate({
                path: "position",
                populate: {
                    path: "modules"
                }
            })
            .exec()
            .then((user) => resolve(new Result({
                success: user ? true : false,
                message: user ? "the record exists" : "no record found",
                data: user
            })))
            .catch((error) => reject(error));
    });
};