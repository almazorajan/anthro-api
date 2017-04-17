"use strict";

const Result = require("../../../classes/result");
const User = require("../../../models/user/user");
const ErrorResult = require("../../../helpers/error.result");

module.exports = (req, res) => {
    try {
        User
            .GetAll()
            .then((result) => res.send(result))
            .catch((error) => res.send(ErrorResult(error)));
    } catch (e) {
        res.send(ErrorResult(e));
    }
};