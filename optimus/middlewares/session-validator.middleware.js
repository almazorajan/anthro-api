"use strict";

const AuthenticationModel = require("../models/authentication/authentication.model");
const Result = require("../classes/result");

module.exports = {
    ValidateSession: ValidateSession
};

function ValidateSession(req, res, next) {
    try {
        var token = req.headers["x-access-token"];
        var fingerprint = req.fingerprint.hash;
        
        AuthenticationModel.ValidateToken(token, fingerprint).then((result) => {
            if(result.success) {
                next();
            } else {
                res.send(new Result({
                    success: false,
                    message: "Invalid token"
                }));    
            }
        })
        .catch((e) => {
            res.send(new Result({
                success: false,
                message: (e || e.message).toString(),
                data: error
            }));
        });
    } catch(e) {
        res.send(new Result({
            success: false,
            message: (e || e.message).toString(),
            data: e
        }));
    }
}