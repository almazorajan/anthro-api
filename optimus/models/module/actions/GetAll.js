"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const ModuleModel = require("../module.model");

module.exports = () => {

    return new Promise((resolve, reject) => {
        ModuleModel
            .find({})
            .exec()
            .then((modules) => resolve(new Result({
                success: true,
                message: modules.length ? "fetched all records" : "no records to fetch yet",
                data: modules
            })))
            .catch((error) => reject(error));
    });
}