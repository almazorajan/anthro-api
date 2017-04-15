"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const PositionModel = require("../position.model");

module.exports = () => {

    return new Promise((resolve, reject) => {
        PositionModel
            .find({})
            .populate("modules")
            .exec()
            .then((positions) => resolve(new Result({
                success: true,
                message: positions.length ? "successfully fetched all records" : "no records to be loaded yet",
                data: positions
            })))
            .catch((error) => reject(error));
    });
}