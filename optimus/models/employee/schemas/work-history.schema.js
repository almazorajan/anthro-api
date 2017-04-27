"use strict";

const Db = require("../../../optimus.con");

module.exports = new Db.Schema({
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
        type: Db.Schema.ObjectId
    },
    salary: {
        type: Number,
        default: 0
    },
    reasonForLeaving: {
        type: String,
        trim: true
    }
});