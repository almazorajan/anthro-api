"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const UserModel = require("../user.model");

module.exports = FindOneByUserName;

function FindOneByUserName(user) {
    return new Promise((resolve, reject) => {
        UserModel
            .findOne({
                userName: user.userName.replace(/\s+/g, " ").trim()
            })
            .populate({
                path: "position",
                populate: {
                    path: "modules"
                }
            })
            .exec()
            .then((user) => {
                console.log(user);
                resolve(new Result({
                    success: user._doc ? true : false,
                    message: user._doc ? "found a matching record" : "unable to find matching record",
                    data: user._doc
                }));
            }).catch((error) => {
                reject(error);
            });
    });
}