"use strict";

const Result = require("../../../classes/result");
const User = require("../../../models/user/user");
const ErrorResult = require("../../../helpers/error.result");

module.exports = (req, res) => {
    try {
        let user = req.body.data;

        User
            .FindOneByIdAndUserName(user)
            .then((result) => {
                if (result.success) {
                    User
                        .UpdateById(user)
                        .then((result) => res.send(result))
                        .catch((error) => res.send(ErrorResult(error)));
                } else {
                    User
                        .FindOneByUserName(user)
                        .then((result) => {
                            if (result.success)
                                res.send(ErrorResult("the username already exists"));
                            
                            return User.UpdateById(user);
                        })
                        .then((result) => res.send(result))
                        .catch((error) => res.send(ErrorResult(error)));
                }
            })
            .catch((error) => res.send(ErrorResult(error)));
    } catch (e) {
        res.send(ErrorResult(e));
    }
};