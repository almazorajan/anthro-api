
"use strict";

const express = require("express");
const router = express.Router();

const UserModel = require("../models/user-model.js");

const Result = require("../classes/result.js");

router.post("/getall", (req, res) => {

    let result = new Result();

    try {

        let promise = UserModel.find({}).exec();

        promise.then((positions) => {

            result.success = true;
            result.message = "Successfully loaded all users.";
            result.data = positions;

            return res.send(result);

        })
        .catch((error) => {

            result.success = false;
            result.message = error.toString();

            return res.send(result);

        });

    } catch(e) {

        result.success = false;
        result.message = (e || e.message).toString();
        
        return res.send(result);

    }

});

router.post("/add", (req, res) => {

    let result = new Result();

    try {

        let user = req.body.data;

        if(!user) {

            result.success = false;
            result.message = "Cannot identify the payload.";

            return res.send(result);

        }

        if(!user.userName.trim() && !user.password.trim()) {

            result.success = false;
            result.message = "Cannot identify Username and Password in payload.";

            return res.send(result);

        }

        let promise = UserModel.findOne({
            userName: user.userName
        }).exec();

        promise.then((_user) => {

            if(_user) {

                result.success = false;
                result.message = "Username '" + _user.userName + "' already exists.";

                return res.send(result);

            }

            return new UserModel(_user).save();

        })
        .then((_user) => {

            result.success = true;
            result.message = "Successfully added user: " + user.userName + ".";
            result.data = _module;

            return res.send(result);

        })
        .catch((error) => {

            result.success = false;
            result.message = error.toString();

            return res.send(result);

        });

    } catch(e) {

        result.success = false;
        result.message = (e || e.message).toString();
        
        return res.send(result);

    }

});

router.post("/update", (req, res) => {

    let result = new Result();

    try {

        let user = req.body.data;

        let updateUser = function(user) {

            UserModel.update({
                _id: user.id
            }, {
                userName: user.userName,
                firstName: user.firstName,
                middleName: user.middleName,
                lastName: user.lastName,
                password: user.password,
                dateCreated: user.dateCreated,
                dateUpdated: new Date(),
                position: user.position
            }).exec();

        }

        if(!user) {

            result.success = false;
            result.message = "Cannot identify the payload.";

            return res.send(result);

        }

        if(!user._id.trim() && !user.userName.trim() && !user.password.trim()) {

            result.success = false;
            result.message = "Cannot identify Id, Username and Password in payload.";

            return res.send(result);

        }

        let promise = UserModel.findOne({
            _id: user._id,
            userName: user.userName
        }).exec();

        promise.then((_user) => {

            if(_user) {

                return updateUser(_user);

            }

            return UserModel.findOne({
                userName: user.userName
            }).exec();

        })
        .then((response) => {

            if(response.n) {

                if(response.n === 1) {

                    result.success = true;
                    result.message = "User was successfully updated.";

                    return res.send(result);

                }

                result.success =false;
                result.message = "Unable to update user.";

                return res.send(result);

            }

            if(response) {

                result.success = false;
                result.message = "Username '" + user.userName + "' is already existing.";

                return res.send(result); 

            }

            return updateUser(response);

        })
        .then((_user) => {

            if(response.n === 1) {

                result.success = true;
                result.message = "User was successfully updated.";

                return res.send(result);

            }

            result.success =false;
            result.message = "Unable to update user.";

            return res.send(result);

        })
        .catch((error) => {

            result.success = false;
            result.message = error.toString();

            return res.send(result);

        });

    } catch(e) {

        result.success = false;
        result.message = (e || e.message).toString();
        
        return res.send(result);

    }

});

module.exports = router;