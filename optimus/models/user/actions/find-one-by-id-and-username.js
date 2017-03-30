"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = (UserModel) => {
    
    function FindOneByIdAndUserName(_user) {
        return new Promise((resolve, reject) => {
            let result = new Result();
            let promise = UserModel.findOne({
                _id: _user._id,
                userName: _user.userName
            }).exec();

            promise.then((user) => {
                if (user) {
                    result.success = true;
                    result.message = "found a record";
                } else {
                    result.success = false;
                    result.message = "unable to find a matching record";
                }
                result.data = user;

                resolve(result);
            }).catch((error) => {
                resolve(error);
            });
        });
    }
    return FindOneByIdAndUserName;
};