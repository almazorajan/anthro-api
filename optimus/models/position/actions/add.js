"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const PositionModel = require("../position.model");
const GetModuleIds = require("../helpers/get-module-ids");

module.exports = Add;

function Add(_position) {
    return new Promise((resolve, reject) => {
        if (_position.hasOwnProperty("_id")) {
            delete _position._id;
        }

        _position.modules = GetModuleIds(_position);
        let result = new Result();
        let promise = new PositionModel(_position).save();

        promise.then((position) => {
            if (position) {
                result.success = true;
                result.message = "Successfully added Position";
            } else {
                result.success = false;
                result.message = "Unable to save Position";
            }
            result.data = position;

            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
}