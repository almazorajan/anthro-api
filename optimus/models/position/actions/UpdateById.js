"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const PositionModel = require("../position.model");
const GetModuleIds = require("../helpers/get-module-ids");

module.exports = (position) => {

    return new Promise((resolve, reject) => {
        position.modules = GetModuleIds(position);

        PositionModel
            .update({
                _id: position._id
            }, {
                positionName: position.positionName,
                modules: position.modules
            })
            .exec()
            .then((dbRes) => resolve(new Result({
                success: dbRes.n === 1 ? true : false,
                message: dbRes.n === 1 ? "the record was successfully updated" : "unable to update the record"
            })))
            .catch((error) => reject(error));
    });
};