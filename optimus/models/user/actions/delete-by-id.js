"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const UserModel = require("../user.model");

module.exports = DeleteById;

function DeleteById(_user) {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = UserModel.findById({ _id: _user._id }).remove().exec();

        promise.then((dbRes) => {
            if (dbRes.result.n === 1) {
                result.success = true;
                result.message = "successfully removed user";
            } else {
                result.success = false;
                result.message = "unable to delete user";
            }
            result.data = dbRes;

            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
}