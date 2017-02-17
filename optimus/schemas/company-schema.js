"use strict";

const OptimusCon = require("../optimus.con.js");
const CompanySchema = new OptimusCon.Schema({
    companyName: {
        type: String,
        trim: true,
        required: true
    },
    companyAddress: {
        type: String,
        trim: true
    },
    contactNumber: {
        type: String,
        trim: true
    },
    emailAddress: {
        type: String,
        trim: true
    }
});

module.exports = CompanySchema;