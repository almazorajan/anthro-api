"use strict";

const uuid = require("uuid");
const express = require("express");
const router = express.Router();
const UserModel = require("../models/user.model.js");
const AuthModel = require("../models/auth.model.js");
const Result = require("../classes/result.js");

router.post("/attemptlogin", (req, res) => {
    try {
        let user = req.body.data;

        UserModel.FindOneByUserNameAndPassword(user).then((result1) => {
            let _result = new Result();

            if(result1.success) {
                let auth = {
                    token: uuid.v1(),
                    user: result1.data
                };

                AuthModel.Add(auth).then((result2) => {
                    if(result2.success) {
                        _result.success = true;
                        _result.message = "Valid login attempt.";
                        _result.data = auth;
                    } else {
                        _result.success = false;
                        _result.message = "Unable to verify authentication.";
                    }

                    res.send(_result);
                })
                .catch((error) => {
                    _result.success = false;
                    _result.message = error.toString();
                    _result.data = {};
                    res.send(_result);
                });
            } else {
                _result.success = false;
                _result.message = "Invalid login attempt.";
                _result.data = {};
                res.send(_result);
            }        
        })
        .catch((error) => {
            res.send(new Result({
                success: false,
                message: error.toString()
            }));
        });
    } catch(e) {
        res.send(new Result({
            success: false,
            message: (e || e.message).toString()
        }));
    }
});

module.exports = router;