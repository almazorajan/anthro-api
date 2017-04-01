"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const UserModel = require("../user.model");

module.exports = UpdateById;

function UpdateById(_user) {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = UserModel.update({
            _id: _user._id
        }, {
            userName: _user.userName.trim(),
            firstName: _user.firstName.trim(),
            middleName: _user.middleName.trim(),
            lastName: _user.lastName.trim(),
            dateUpdated: new Date(),
            position: _user.position
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
}

