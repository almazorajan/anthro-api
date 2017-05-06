"use strict";

const Db = require("../../../database");

module.exports = new Db.Schema({
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