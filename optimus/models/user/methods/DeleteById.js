"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = Promise.method((user) => {
    return new Promise((resolve, reject) => {
        this
            .model("User")    
            .findById({ _id: user._id })
            .remove()
            .exec()
            .then((dbRes) => resolve(new Result({
                success: dbRes.result.n === 1 ? true : false,
                message: dbRes.result.n === 1 ? "successfully removed the record" : "unable to remove the record",
                data: dbRes
            })))
            .catch((error) => reject(error));
    });
});