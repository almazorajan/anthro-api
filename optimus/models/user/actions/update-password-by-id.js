"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const Crypt = require("../../../classes/crypt.js");
const UserModel = require("../user.model");

module.exports = UpdatePasswordById;

function UpdatePasswordById(_user) {
    return new Promise((resolve, reject) => {
        var hash = Crypt.HashPassword(_user.password);

        _user.salt = hash.salt;
        _user.password = hash.hashedPassword;

        let result = new Result();
        let promise = UserModel.update({
            _id: _user._id
        }, {
            salt: _user.salt,
            password: _user.password,
            dateUpdated: new Date()
        }).exec();

        promise.then((dbRes) => {
            if (dbRes.n === 1) {
                result.success = true;
                result.message = "the record was successfully updated";
            } else {
                result.success = false;
                result.message = "unable to update the record";
            }
            result.data = dbRes;

            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
};