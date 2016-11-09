
"use strict";

const Promise = require("bluebird");

const OptimusCon = require("../optimus.con.js");

const Schema = new OptimusCon.Schema({

    userName: { 
        type: String, 
        trim: true 
    },

    firstName: { 
        type: String, 
        trim: true,
    },

    middleName: { 
        type: String, 
        trim: true
    },

    lastName: { 
        type: String, 
        trim: true 
    },

    password: { 
        type: String, 
        trim: true 
    },

    dateCreated: { 
        type: Date, 
        default: Date.now 
    },

    dateUpdated: { 
        type: Date, 
        default: Date.now 
    },

    position: {
        type: OptimusCon.Schema.ObjectId,
        ref: "Position"
    },

    dateDeactivated: { 
        type: Date 
    }

});

const UserModel = OptimusCon.model("User", Schema);

const Result = require("../classes/result.js");

const User = class {

    static get UserModel() {

        return UserModel;

    }

    static GetAll(_callBack) {

        return new Promise((resolve, reject) => {

            let result = new Result();
            let promise = UserModel.find({}).exec();

            promise.then((users) => {

                result.success = true;

                if(users.length)
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
    
    static FindOneByUserName(_username) {

        return new Promise((resolve, reject) => {

            let result = new Result();
            let promise = UserModel.findOne({
                userName: _username.replace(/\s+/g, " ").trim()
            }).exec();

            promise.then((user) => {

                if(user) {

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

    static FindOneByIdAndUserName(_user) {

        return new Promise((resolve, reject) => {

            let result = new Result();
            let promise = UserModel.findOne({
                _id: _user._id,
                userName: _user.userName
            }).exec();

            promise.then((user) => {

                if(user) {

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

    static Add(_user) {

        return new Promise((resolve, reject) => {

            let result = new Result();
            let promise = new UserModel(_user).save();

            promise.then((user) => {

                if(user) {

                    result.success = true;
                    result.message = "User was successfully added";
                    
                } else {

                    result.success = false;
                    result.message = "Unable to add user.";
                    
                }

                result.data = user;
                resolve(result);

            })
            .catch((error) => {

                reject(error);

            });

        });

    }

    static UpdateById(_user) {

        return new Promise((resolve, reject) => {

            let result = new Result();
            let promise = UserModel.update({
                _id: _user._id
            }, {
                userName: _user.userName.replace(/\s+/g, " ").trim(),
                firstName: _user.firstName.replace(/\s+/g, " ").trim(),
                middleName: _user.middleName.replace(/\s+/g, " ").trim(),
                lastName: _user.lastName.replace(/\s+/g, " ").trim(),
                password: _user.password.replace(/\s+/g, " ").trim(),
                dateCreated: _user.dateCreated,
                dateUpdated: new Date(),
                position: _user.position
            }).exec();

            promise.then((dbRes) => {

                if (dbRes.n === 1) {

                    result.success = true;
                    result.message = "User was successfully updated.";

                } else {

                    result.success = false;
                    result.message = "Unable to update user.";

                }

                result.data = dbRes;
                resolve(result);

            })
            .catch((error) => {

                reject(error);

            });

        });

    }

    static DeleteById(_user) {

        return new Promise((resolve, reject) => {

            let result = new Result();
            let promise = UserModel.findById({ _id: _user._id }).remove.exec();

            promise.then((dbRes) => {

                if(dbRes.result.n === 1) {

                    result.success = true;
                    result.message = "Successfully removed user.";
                    
                } else {

                    result.success = false;
                    result.message = "Unable to delete user.";

                } 

                result.data = dbRes;
                resolve(result);

            })
            .catch((error) => {

                reject(error);

            });

        });

    }

}

module.exports = User;
