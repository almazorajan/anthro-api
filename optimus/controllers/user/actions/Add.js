"use strict";

const Result = require("../../../classes/result");
const User = require("../../../models/user/user");
const ErrorResult = require("../../../helpers/error.result");

module.exports = (req, res) => {
    try {
        let user = req.body.data;

        User
            .FindOneByUserName(user)
            .then((result) => {
                if (!result.success)
                    return User.Add(user);

                res.send(new Result({
                    success: false,
                    message: `username ${user.userName} already exists`
                }));
            })
            .then((result) => res.send(result))
            .catch((error) => res.send(ErrorResult(error)));
    } catch (e) {
        res.send(ErrorResult(e));
    }
};