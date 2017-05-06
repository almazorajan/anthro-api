"use strict";

const Result = require("../classes/result");

module.exports = (e) => {
    return new Result({
        success: false,
        message: String(e || e.message),
        data: typeof e === "string" ? null : e
    });
};