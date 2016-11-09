
"use strict";

const optimusCon = require("../optimus.con.js");

const Schema = new optimusCon.Schema({
    employmentStatus: {
        type: String,
        trim: true
    }
});

const EmploymentStatusModel = optimusCon.model("EmploymentStatus", Schema);

const EmploymentStatus = class {

    static get EmploymentStatusModel() {

        return EmploymentStatus;

    }

}

module.exports = EmploymentStatus;