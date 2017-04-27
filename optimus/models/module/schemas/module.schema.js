"use strict";

const Db = require("../../../optimus.con");

module.exports = new Db.Schema({
    moduleName: {
        type: String,
        trim: true,
        required: true
    },
    moduleDescription: {
        type: String,
        trim: true
    },
    link: {
        type: String,
        trim: true,
        required: true
    },
    group: {
        type: String,
        trim: true
    }
});