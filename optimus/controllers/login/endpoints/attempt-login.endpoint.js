"use strict";

const uuid = require("uuid");
const Result = require("../../../classes/result");
const Crypt = require("../../../classes/crypt");
const User = require("../../../models/user/user");
const Authentication = require("../../../models/authentication/authentication");

module.exports = (router) => {
    router.post("/attemptlogin", (req, res) => {
        try {
            let user = req.body.data;

            User.FindOneByUserName(user).then((result1) => {
                let _result = new Result();
                if (result1.success) {
                    if (result1.data.password === Crypt.Sha512(result1.data.salt, user.password)) {
                        result1.data.salt = "*****************";
                        result1.data.password = "*****************";

                        let auth = {
                            token: uuid.v1(),
                            fingerprint: req.fingerprint.hash,
                            user: result1.data
                        };

                        Authentication.Add(auth).then((result2) => {
                            if (result2.success) {
                                auth.fingerprint = "*****************";

                                _result.success = true;
                                _result.message = "Valid login attempt.";
                                _result.data = auth;
                            } else {
                                _result.success = false;
                                _result.message = "Unable to verify authentication.";
                            }
                            res.send(_result);
                        }).catch((error) => {
                            _result.success = false;
                            _result.message = error.toString();
                            _result.data = {};
                            res.send(_result);
                        });
                    } else {
                        res.send(new Result({
                            success: false,
                            message: "Invalid login attempt"
                        }));
                    }
                } else {
                    res.send(new Result({
                        success: false,
                        message: "Invalid login attempt"
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
                message: (e || e.message).toString()
            }));
        }
    });
};
