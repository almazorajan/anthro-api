"use strict";

const User = require("../../../models/user/user");
const ErrorResult = require("../../../helpers/error.result");

module.exports = (req, res) => {
    try {
        let user = req.body.data;

        User
            .FindOneByIdAndUserName(user._id, user.userName)
            .then((result) => {
                if (result.success) {
                    new User(user)
                        .UpdateById()
                        .then((result) => res.send(result))
                        .catch((error) => res.send(ErrorResult(error)));
                } else {
                    User
                        .FindOneByUserName(user.userName)
                        .then((result) => {
                            if (!result.success)
                                return new User(user).UpdateById();

                            res.send(ErrorResult("the username already exists"));
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