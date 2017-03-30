"use strict";

const Result = require("../../../classes/result");
const User = require("../../../models/user/user");

module.exports = (router) => {
    router.post("/updatepassword", (req, res) => {
        try {
            let result = new Result();
            let user = req.body.data;

            if (!user.password) {
                result.success = false;
                result.message = "No password was identified.";
                res.send(result);
            }

            if (!user.password.trim()) {
                result.success = false;
                result.message = "No password was identified.";
                res.send(result);
            }

            User.FindOneById(user).then((_result) => {
                if (_result.success) {
                    User.UpdatePasswordById(user).then((result) => {
                        res.send(result);
                    }).catch((error) => {
                        res.send(new Result({
                            success: false,
                            message: error.toString()
                        }));
                    });
                } else {
                    res.send(new Result({
                        success: false,
                        message: "Record cannot be updated"
                    }));
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