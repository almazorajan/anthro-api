"use strict";

const Promise = require("bluebird");
const OptimusCon = require("../optimus.con.js");
const UserModel = OptimusCon.model("User", require("../schemas/user.schema.js"));
const Result = require("../classes/result.js");
const crypt = require("../classes/crypt.js");

module.exports = {
    UserModel: UserModel,
    GetAll: GetAll,
    FindOneByUserNameAndPassword: FindOneByUserNameAndPassword,
    FindOneByUserName: FindOneByUserName,
    FindOneByIdAndUserName: FindOneByIdAndUserName,
    Add: Add,
    UpdateById: UpdateById,
    DeleteById: DeleteById
};

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
                result.message = "Successfully loaded all records.";
            else
                result.message = "No records to be loaded.";

            result.data = users;
            resolve(result);
        })
        .catch((error) => {
            reject(error);
        });
    });
}

function FindOneByUserNameAndPassword(_user) {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = UserModel
            .findOne({ 
                userName: _user.userName, 
                password: _user.password 
            })
            .populate({
                path: "position",
                populate: {
                    path: "modules"
                }
            }).exec();

        promise.then((user) => {
            if (user) {
                result.success = true;
                result.message = "Valid login attempt";
                result.data = user;
            } else {
                result.success = false;
                result.message = "Invalid login attempt.";
                result.data = user;
            }

            resolve(result);
        })
        .catch((error) => {
            reject(error);
        });
    });
}

function FindOneByUserName(_user) {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = UserModel
            .findOne({
                userName: _user.userName.replace(/\s+/g, " ").trim()
            })
            .populate({
                path: "position",
                populate: {
                    path: "modules"
                }
            }).exec();

        promise.then((user) => {
            if (user) {
                result.success = true;
                result.message = "Found user record.";
            } else {
                result.success = false;
                result.message = "Unable to find matching record.";
            }

            result.data = user;
            resolve(result);
        })
        .catch((error) => {
            reject(error);
        });
    });
}

function FindOneByIdAndUserName(_user) {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = UserModel.findOne({
            _id: _user._id,
            userName: _user.userName
        }).exec();

        promise.then((user) => {
            if (user) {
                result.success = true;
                result.message = "Found a record.";
            } else {
                result.success = false;
                result.message = "Unable to find a matching record.";
            }

            result.data = user;
            resolve(result);
        })
        .catch((error) => {
            resolve(error);
        });
    });
}

function Add(_user) {
    return new Promise((resolve, reject) => {
        var hash = crypt.HashPassword(_user.password);

        _user.salt = hash.salt;
        _user.password = hash.hashedPassword;
        _user.position = _user.position._id;
        
        let result = new Result();
        let promise = new UserModel(_user).save();

        promise.then((user) => {
            if (user) {
                result.success = true;
                result.message = "User was successfully added";
            } else {
                result.success = false;
                result.message = "Unable to add User";
            }

            result.data = user;
            resolve(result);
        })
        .catch((error) => {
            reject(error);
        });
    });
}

function UpdateById(_user) {
    return new Promise((resolve, reject) => {
        _user.position = _user.position._id;
        let result = new Result();
        let promise = UserModel.update({
            _id: _user._id
        }, {
            userName: _user.userName.trim(),
            firstName: _user.firstName.trim(),
            middleName: _user.middleName.trim(),
            lastName: _user.lastName.trim(),
            password: _user.password.trim(),
            dateCreated: _user.dateCreated,
            dateUpdated: new Date(),
            position: _user.position
        }).exec();

        promise.then((dbRes) => {
            if (dbRes.n === 1) {
                result.success = true;
                result.message = "User was successfully updated";
            } else {
                result.success = false;
                result.message = "Unable to update User";
            }

            result.data = dbRes;
            resolve(result);
        })
        .catch((error) => {
            reject(error);
        });
    });
}

function DeleteById(_user) {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = UserModel.findById({ _id: _user._id }).remove().exec();

        promise.then((dbRes) => {
            if (dbRes.result.n === 1) {
                result.success = true;
                result.message = "Successfully removed User";
            } else {
                result.success = false;
                result.message = "Unable to delete User";
            }

            result.data = dbRes;
            resolve(result);
        })
        .catch((error) => {
            reject(error);
        });
    });
}
