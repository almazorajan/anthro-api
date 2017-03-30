"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = (UserModel) => {
    
    function FindOneByUserName(_user) {
        return new Promise((resolve, reject) => {
            let result = new Result();
            let promise = UserModel
                .findOne({
                    userName: _user.userName.replace(/\s+/g, " ").trim()
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
                    result.message = "found user record";
                } else {
                    result.success = false;
                    result.message = "unable to find matching record";
                }
                result.data = user;

                resolve(result);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    return FindOneByUserName;
};