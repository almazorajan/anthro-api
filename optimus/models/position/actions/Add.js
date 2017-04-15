"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const PositionModel = require("../position.model");
const GetModuleIds = require("../helpers/get-module-ids");

module.exports = (position) => {
    return new Promise((resolve, reject) => {

        if (position.hasOwnProperty("_id"))
            delete position._id;

        position.modules = GetModuleIds(position);

        new PositionModel(position)
            .save()
            .then((position) => resolve(new Result({
                success: position ? true : false,
                message: position ? "the record was successfully added" : "unable to save the record",
                data: position
            })))
            .catch((error) => reject(error));
    });
};