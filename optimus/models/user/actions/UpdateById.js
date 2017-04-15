"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const UserModel = require("../user.model");

module.exports = (user) => {

    return new Promise((resolve, reject) => {
        let promise = UserModel
            .update({
                _id: user._id
            }, {
                userName: user.userName,
                firstName: user.firstName,
                middleName: user.middleName,
                lastName: user.lastName,
                dateUpdated: new Date(),
                position: user.position
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