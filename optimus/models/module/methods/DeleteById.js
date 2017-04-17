"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = Promise.method(() => {
    return new Promise((resolve, reject) => {
        this
            .model("Module")    
            .findById({ "_id": this._id })
            .remove()
            .exec()
            .then((dbRes) => resolve(new Result({
                success: dbRes.result.n === 1 ? true : false,
                message: dbRes.result.n === 1 ? "the record was successfully removed" : "unable to remove the record",
                data: dbRes
            })))
            .catch((error) => resolve(error));
    });
});