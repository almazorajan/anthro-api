"use strict";

const Promise = require("bluebird");

module.exports = Promise.method(CountByWorkHistoryEmploymentStatusId);

function CountByWorkHistoryEmploymentStatusId(employmentStatusId) {
    return new Promise((resolve, reject) => {
        this
            .count({
                workHistory: {
                    employmentStatus: employmentStatusId
                }
            })
            .exec()
            .then((count) => resolve(count))
            .catch((error) => reject(error));
    });
}