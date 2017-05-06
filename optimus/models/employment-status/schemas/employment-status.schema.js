"use strict";

const Db = require("../../../database");

module.exports = new Db.Schema({
    employmentStatus: {
        type: String,
        trim: true
    }
});