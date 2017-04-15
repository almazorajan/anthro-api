"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const PositionModel = require("../position.model");

module.exports = (position) => {

    return new Promise((resolve, reject) => {
        PositionModel
            .findById({ _id: position._id })
            .remove()
            .exec()
            .then((dbRes) => resolve(new Result({
                success: dbRes.result.n === 1 ? true : false,
                message: dbRes.result.n === 1 ? "the record was successfully removed" : "unable to remove the record",
                data: dbRes
            })))
            .catch((error) => reject(error));
    });
}