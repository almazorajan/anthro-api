"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const UserModel = require("../user.model");

module.exports = () => {

    return new Promise((resolve, reject) => {
        UserModel
            .find({})
            .populate({
                path: "position",
                populate: {
                    path: "modules"
                }
            })
            .exec()
            .then((users) => resolve(new Result({
                success: true,
                message: users.length ? "successfully loaded all records" : "no records to be loaded",
                data: users
            })))
            .catch((error) => reject(error));
    });
};