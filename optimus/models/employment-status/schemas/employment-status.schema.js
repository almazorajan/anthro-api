"use strict";

const Db = require("../../../optimus.con");

module.exports = new Db.Schema({
    employmentStatus: {
        type: String,
        trim: true
    }
});