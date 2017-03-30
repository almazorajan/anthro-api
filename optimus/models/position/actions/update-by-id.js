"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const PositionModel = require("../position.model");
const GetModuleIds = require("../helpers/get-module-ids");

module.exports = UpdateById;

function UpdateById(_position) {
    return new Promise((resolve, reject) => {
        _position.modules = GetModuleIds(_position);
        let result = new Result();
        let promise = PositionModel.update({
            _id: _position._id
        }, {
            positionName: _position.positionName,
            modules: _position.modules
        }).exec();

        promise.then((dbRes) => {
            if (dbRes.n === 1) {
                result.success = true;
                result.message = "Position was successfully updated";
            } else {
                result.success = false;
                result.message = "Position was not updated";
            }
            result.data = dbRes;

            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
}