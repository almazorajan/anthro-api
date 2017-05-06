"use strict";

const User = require("../../../models/user/user");
const ErrorResult = require("../../../helpers/error.result");
const Trimmer = require("../../../helpers/trimmer.helper");

module.exports = (req, res) => {
    try {
        let user = req.body.data;

        if (!Trimmer(user.password)) {
            res.send("no password was identified");
            return;
        }

        User
            .FindOneById(user._id)
            .then((result) => {
                if (result.success) {
                    return new User(user).UpdatePasswordById();
                }
                res.send(ErrorResult("the record cannot be updated"));
            })
            .then((result) => res.send(result))
            .catch((error) => res.send(ErrorResult(error)));
    } catch (e) {
        res.send(ErrorResult(e));
    }
};