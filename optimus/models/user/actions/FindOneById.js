"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const UserModel = require("../user.model");

module.exports = (user) => {

    return new Promise((resolve, reject) => {
        let promise = UserModel
            .findOne({ _id: user._id })
            .populate({
                path: "position",
                populate: { path: "modules" }
            })
            .exec()
            .then((user) => resolve(new Result({
                success: user ? true : false,
                message: user ? "found a record" : "no record found"
            })))
            .catch((error) => reject(error));
    });
};