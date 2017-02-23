"use strict";

const OptimusCon = require("../../optimus.con");

const WorkHistoryTemplate = {
    position: {
        type: String,
        trim: true
    },
    companyName: {
        type: String,
        trim: true
    },
    dateFrom: {
        type: Date
    },
    dateTo: {
        type: Date
    },
    employmentStatus: {
        ref: "EmploymentStatus",
        type: OptimusCon.Schema.ObjectId
    },
    salary: {
        type: Number,
        default: 0
    },
    reasonForLeaving: {
        type: String,
        trim: true
    }
};

module.exports = WorkHistoryTemplate;