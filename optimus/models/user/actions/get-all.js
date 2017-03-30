"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const UserModel = require("../user.model");

module.exports = GetAll;

function GetAll() {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = UserModel
            .find({})
            .populate({
                path: "position",
                populate: {
                    path: "modules"
                }
            }).exec();

        promise.then((users) => {
            result.success = true;

            if (users.length)
                result.message = "successfully loaded all records.";
            else
                result.message = "no records to be loaded.";

            result.data = users;

            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
}