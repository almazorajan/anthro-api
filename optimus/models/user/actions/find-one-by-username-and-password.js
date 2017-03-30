"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = (UserModel) => {
    
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
                    result.message = "valid login attempt";
                } else {
                    result.success = false;
                    result.message = "invalid login attempt";
                }
                result.data = user;

                resolve(result);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    return FindOneByUserNameAndPassword;
};



