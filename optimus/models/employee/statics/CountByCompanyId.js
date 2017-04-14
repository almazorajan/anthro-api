"use strict";

const Promise = require("bluebird");

module.exports = Promise.method(CountByCompanyId);

function CountByCompanyId(companyId) {
    return new Promise((resolve, reject) => {
        this
            .count({ company: companyId })
            .exec()
            .then((count) => resolve(count))
            .catch((error) => reject(error));
    });
}