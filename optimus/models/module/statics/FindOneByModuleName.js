"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = Promise.method((moduleName) => {
    return new Promise((resolve, reject) => {
        this
            .findOne({ moduleName: moduleName })
            .exec()
            .then((mod) => resolve(new Result({
                success: mod ? true : false,
                message: mod ? "module name is already existing" : "module name does not exist",
                data: mod
            })))
            .catch((error) => reject(error));
    });
});