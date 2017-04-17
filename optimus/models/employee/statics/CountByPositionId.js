"use strict";

const Promise = require("bluebird");

module.exports = Promise.method((positionId) => {
    return new Promise((resolve, reject) => {
        this
            .count({ position: positionId })
            .exec()
            .then((count) => resolve(count))
            .catch((error) => reject(error));
    });
});