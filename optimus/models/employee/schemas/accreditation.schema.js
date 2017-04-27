"use strict";

const Db = require("../../../optimus.con");

module.exports = new Db.Schema({
    title: {
        type: String,
        trim: true
    },
    dateAccredited: {
        type: Date
    }
});