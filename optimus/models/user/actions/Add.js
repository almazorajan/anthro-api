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
        user.position = user.position._id;

        new UserModel(user)
            .save()
            .then((user) => resolve(new Result({
                success: user ? true : false,
                message: user ? "the record was successfully added" : "unable to add the record",
                data: user
            })))
            .catch((error) => reject(error));
    });
};