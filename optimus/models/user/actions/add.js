"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const Crypt = require("../../../classes/crypt.js");
const UserModel = require("../user.model");

module.exports = Add;

function Add(_user) {
    return new Promise((resolve, reject) => {
        var hash = Crypt.HashPassword(_user.password);

        _user.salt = hash.salt;
        _user.password = hash.hashedPassword;
        _user.position = _user.position._id;

        let result = new Result();
        let promise = new UserModel(_user).save();

        promise.then((user) => {
            if (user) {
                result.success = true;
                result.message = "the record was successfully added";
            } else {
                result.success = false;
                result.message = "unable to add the record";
            }
            result.data = user;

            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
}