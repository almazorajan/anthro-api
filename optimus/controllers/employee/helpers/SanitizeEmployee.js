"use strict";

const IsPropertyWithId = require("./IsPropertyWithId");

module.exports = (employee) => {
    let emp = {};
    for (let key in employee) {
        if (IsPropertyWithId(key)) {
            emp[key] = employee[key]._id;
            continue;
        }
        if (key === "workHistory") {
            emp[key] = SanitizeWorkHistory(employee);
            continue;
        }
        emp[key] = employee[key];
    }
    return emp;
};