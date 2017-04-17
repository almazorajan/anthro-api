"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = Promise.method((moduleId) => { 
    return new Promise((resolve, reject) => {
        this
            .count({ modules: moduleId })
            .exec()
            .then((count) => resolve(count)).catch((error) => reject(error));
    });
});