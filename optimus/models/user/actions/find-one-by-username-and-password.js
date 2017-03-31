"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const UserModel = require("../user.model");

module.exports = FindOneByUserNameAndPassword;

function FindOneByUserNameAndPassword(_user) {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = UserModel
            .findOne({
                userName: _user.userName,
                password: _user.password
            })
            .populate({
                path: "position",
                populate: {
                    path: "modules"
                }
            }).exec();

        promise.then((user) => {
            if (user) {
                result.success = true;
                result.message = "the record exists";
            } else {
                result.success = false;
                result.message = "no records found";
            }
            result.data = user;

            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
}



