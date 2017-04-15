"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const Crypt = require("../../../classes/crypt.js");
const UserModel = require("../user.model");

module.exports = (user) => {

    return new Promise((resolve, reject) => {
        let hash = Crypt.HashPassword(user.password);

        user.salt = hash.salt;
        user.password = hash.hashedPassword;

        UserModel
            .update({
                _id: user._id
            }, {
                salt: user.salt,
                password: user.password,
                dateUpdated: new Date()
            })
            .exec()
            .then((dbRes) => resolve(new Result({
                success: dbRes.n === 1 ? true : false,
                message: dbRes.n === 1 ? "the record was successfully updated" : "unable to update the record",
                data: dbRes
            })))
            .catch((error) => reject(error));
    });
};