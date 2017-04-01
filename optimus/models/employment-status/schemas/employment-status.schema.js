"use strict";

const OptimusCon = require("../../../optimus.con");

const EmployeeStatusSchema = new OptimusCon.Schema({
    employmentStatus: {
        type: String,
        trim: true
    }
});

module.exports = EmployeeStatusSchema;