"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = (UserModel) => {
    
    function FindOneById(_user) {
        return new Promise((resolve, reject) => {
            let result = new Result();
            let promise = UserModel
                .findOne({
                    _id: _user._id
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
                    result.message = "Found a record";
                } else {
                    result.success = false;
                    result.message = "No records found";
                }
                result.data = user;

                resolve(result);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    return FindOneById;
};