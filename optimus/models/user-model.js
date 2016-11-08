
"use strict";

const optimusCon = require("../optimus.con.js");

const Schema = new optimusCon.Schema({
    userName: { type: String, trim: true },
    firstName: { type: String, trim: true, default: "" },
    middleName: { type: String, trim: true, default: "" },
    lastName: { type: String, trim: true, default: "" },
    password: { type: String, trim: true, default: "" },
    dateCreated: { type: Date, default: Date.now },
    dateUpdated: { type: Date, default: Date.now },
    position: {
        type: optimusCon.Schema.ObjectId,
        ref: "Position"
    },
    dateDeactivated: { type: Date }
});

const UserModel = optimusCon.model("User", Schema);

const Result = require("../classes/result.js");

const User = class {

    static get UserModel() {

        return UserModel;

    }

    static GetAll(_callBack) {

        try {

            let result = new Result();
            let promise = UserModel.find({}).exec();

            promise.then((users) => {

                result.success = true;

                if(users.length)
                    result.message = "Successfully loaded all records.";
                else
                    result.message = "No records to be loaded.";
                
                _callBack(result);

            })
            .catch((error) => {
                
                result.success = false;
                result.message = error.toString();
                _callBack(result);

            });

        } catch(e) {

            _callBack(new Result({
                success: false,
                message: (e || e.message).toString()
            }));

        }

    }
    
    static FindOneByUserName(_username, _callBack) {

        try {

            let result = new Result();
            let promise = UserModel.findOne({
                userName: _username.replace(/\s+/g, " ").trim()
            }).exec();

            promise.then((user) => {

                if(user) {

                    result.success = true;
                    result.message = "Found user record.";
                    result.data = user;

                } else {

                    result.success = false;
                    result.message = "Unable to find matching record.";

                }

                _callBack(result);

            })
            .catch((error) => {

                result.success = false;
                result.message = error.toString();
                _callBack(result);

            });

        } catch(e) {

            _callBack(new Result({
                success: false,
                message: (e || e.messsage).toString()
            }));

        }

    }

    static FindOneByIdAndUserName(_id, _username, _callBack) {

        try {

            let result = new Result();
            let promise = UserModel.findOne({
                _id: user._id,
                userName: user.userName
            }).exec();

            promise.then((user) => {

                if(user) {

                    result.success = true;
                    result.message = "Found a record.";
                    result.data = user;

                } else {

                    result.success = false;
                    result.message = "Unable to find a matching record.";

                }

                _callBack(result);

            })
            .catch((error) => {

                result.success = false;
                result.message = error.toString();
                _callBack(result);

            });

        } catch(e) {

            _callBack(new Result({
                success: false,
                message: (e || e.message).toString()
            }));

        }

    }

    static Add(_user, _callBack) {

        try {

            let result = new Result();
            let promise = new UserModel(_user).save();

            promise.then((user) => {

                if(user) {

                    result.success = true;
                    result.message = "User was successfully added";
                    
                } else {

                    result.success = false;
                    result.message = "Unable to add user.";
                    result.data = user;

                }

                _callBack(result);

            })
            .catch((error) => {

                result.success = false;
                result.message = error.toString();
                _callBack(result);

            });

        } catch(e) {

            _callBack(new Result({
                success: false,
                message: (e || e.message).toString()
            }));

        }

    }

    static Update(_user, _callBack) {

        try {

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

                _callBack(result);

            })
            .catch((error) => {

                result.success = false;
                result.message = error.toString();
                _callBack(result);

            });

        } catch (e) {

            _callBack(new Result({
                success: false,
                message: (e || e.message).toString()
            }))

        }

    }

    static DeleteById(_id, _callBack) {

        try {

            let result = new Result();
            let promise = UserModel.findById({ _id: _id }).remove.exec();

            promise.then((dbRes) => {

                if(dbRes.result.n === 1) {

                    result.success = true;
                    result.message = "Successfully removed user.";
                    
                } else {

                    result.success = false;
                    result.message = "Unable to delete user.";

                } 

                result.data = dbRes;
                _callBack(result);

            })
            .catch((error) => {

                result.success = false;
                result.message = error.toString();
                _callBack(result);

            });


        } catch(e) {

            _callBack(new Result({
                success: false,
                message: (e || e.message).toString()
            }));

        }

    }

}

module.exports = User;
