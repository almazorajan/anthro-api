"use strict";

const Db = require("../../../database");

module.exports = new Db.Schema({
    title: {
        type: String,
        trim: true
    },
    dateAccredited: {
        type: Date
    }
});