"use strict";

const Authentication = require("../../../models/authentication/authentication");
const User = require("../../../models/user/user");
const ErrorResult = require("../../../helpers/error.result");
const Result = require("../../../classes/result");
const Crypt = require("../../../classes/crypt");
const uuid = require("uuid");

module.exports = (req, res) => {
    try {
        let user = req.body.data;

        User
            .FindOneByUserName(user.userName)
            .then((result) => {
                if (result.success) {
                    if (result.data.password === Crypt.Sha512(result.data.salt, user.password)) {
                        result.data.salt = "*****************";
                        result.data.password = "*****************";
                        return new Authentication({ token: uuid.v1(), fingerprint: req.fingerprint.hash, user: result.data }).Add();
                    } else {
                        res.send(ErrorResult("invalid login attempt"));
                    }
                }
                res.send(ErrorResult("invalid login attempt"));
            })
            .then((result) => {
                res.send(new Result({
                    success: result.success ? true : false,
                    message: result.success ? "valid login attempt" : "unable to verify authentication",
                    data: result.data
                }))
            })
            .catch((error) => {
                res.send(ErrorResult(error));
            });
    } catch (e) {
        res.send(ErrorResult(e));
    }
};