"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const Crypt = require("../../../classes/crypt.js");

module.exports = Promise.method(() => {
    return new Promise((resolve, reject) => {
        let hash = Crypt.HashPassword(this.password);

        this.salt = hash.salt;
        this.password = hash.hashedPassword;
        this.position = this.position._id;

        this
            .save()
            .then((user) => resolve(new Result({
                success: user ? true : false,
                message: user ? "the record was successfully added" : "unable to add the record",
                data: user
            })))
            .catch((error) => reject(error));
    });
});