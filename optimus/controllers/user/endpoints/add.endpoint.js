"use strict";

const Result = require("../../../classes/result");
const User = require("../../../models/user/user");

module.exports = (router) => {
    router.post("/add", (req, res) => {
        try {
            let result = new Result();
            let user = req.body.data;

            User.FindOneByUserName(user).then((_result) => {
                if (_result.success) {
                    result.success = false;
                    result.message = "Username '" + user.userName + "' already exists.";
                    res.send(result);
                } else {
                    return User.Add(user);
                }
            }).then((result) => {
                res.send(result);
            }).catch((error) => {
                res.send(new Result({
                    success: false,
                    message: error.toString()
                }));
            });
        } catch (e) {
            res.send(new Result({
                success: false,
                message: (e || e.message).toString()
            }));
        }
    });
}