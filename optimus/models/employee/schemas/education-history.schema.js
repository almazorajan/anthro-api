"use strict";

const Db = require("../../../database");

module.exports = new Db.Schema({
    educationLevel: {
        type: String,
        trim: true
    },
    degree: {
        type: String,
        trim: true
    },
    dateGraduated: {
        type: Date
    }
});