"use strict";

const Result = require("../../../classes/result");
const User = require("../../../models/user/user");
const ErrorResult = require("../../../helpers/error.result");

module.exports = (req, res) => {
    try {
        let user = req.body.data;

        if (!user.password)
            res.send(ErrorResult("no password was identified"));

        if (!user.password.trim())
            res.send("no password was identified");

        User
            .FindOneById(user)
            .then((result) => {
                if (result.success)
                    return User.UpdatePasswordById(user);
                
                res.send(ErrorResult("the record cannot be updated"));
            })
            .then((result) => res.send(result))
            .catch((error) => res.send(ErrorResult(error)));
    } catch (e) {
        res.send(ErrorResult(e));
    }
};