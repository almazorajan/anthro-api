"use strict";

const Result = require("../../../classes/result");
const User = require("../../../models/user/user");

module.exports = (router) => {
    router.post("/update", (req, res) => {
        try {
            let result = new Result();
            let user = req.body.data;

            User.FindOneByIdAndUserName(user).then((_result) => {
                if (_result.success) {
                    User.UpdateById(user).then((result) => {
                        res.send(result);
                    }).catch((error) => {
                        res.send(new Result({
                            success: false,
                            message: error.toString()
                        }));
                    });
                } else {
                    User.FindOneByUserName(user).then((_result) => {
                        if (_result.success) {
                            res.send(new Result({
                                success: false,
                                message: "Username already exists."
                            }));
                        } else {
                            return User.UpdateById(user);
                        }
                    }).then((_result) => {
                        res.send(_result);
                    }).catch((error) => {
                        res.send(new Result({
                            success: false,
                            message: error.toString()
                        }));
                    });
                }
            }).catch((error) => {
                res.send(new Result({
                    success: false,
                    message: error.toString()
                }));
            });
        } catch (e) {
            res.send(new Result({
                success: false,
                messsage: (e || e.message).toString()
            }));
        }
    });
};