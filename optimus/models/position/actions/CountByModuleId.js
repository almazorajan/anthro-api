"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const PositionModel = require("../position.model");

module.exports = (moduleId) => {
    
    return new Promise((resolve, reject) => {
        PositionModel
            .count({ modules: moduleId })
            .exec()
            .then((count) => resolve(count)).catch((error) => reject(error));
    });
}