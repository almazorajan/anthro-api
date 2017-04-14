"use strict";

const uuid = require("uuid");
const Result = require("../../../classes/result");
const Crypt = require("../../../classes/crypt");
const User = require("../../../models/user/user");
const Authentication = require("../../../models/authentication/authentication");
const ErrorResult = require("../../../helpers/error.result");

module.exports = (req, res) => {
    try {
        let user = req.body.data;

        User.FindOneByUserName(user).then((result) => {
            if (result.success) {
                if (result.data.password === Crypt.Sha512(result.data.salt, user.password)) {
                    result.data.salt = "*****************";
                    result.data.password = "*****************";

                    new Authentication({ token: uuid.v1(), fingerprint: req.fingerprint.hash, user: result.data })
                        .Add()
                        .then((result) => res.send(new Result({
                            success: result.success ? true : false,
                            message: result.success ? "valid login attempt" : "unable to verify authentication",
                            data: result.data
                        })))
                        .catch((error) => {
                            res.send(ErrorResult(error));
                        });
                } else {
                    res.send(ErrorResult("invalid login attempt"));
                }
            } else {
                res.send(ErrorResult("invalid login attempt"));
            }
        }).catch((error) => {
            res.send(ErrorResult(error));
        });
    } catch (e) {
        res.send(ErrorResult(e));
    }
};
