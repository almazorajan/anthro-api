"use strict";

const Db = require("../../../optimus.con");

module.exports = new Db.Schema({
    unitFloor: {
        type: String,
        trim: true
    },
    building: {
        type: String,
        trim: true
    },
    streetName: {
        type: String,
        trim: true
    },
    barangay: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        trim: true
    },
    zipCode: {
        type: String,
        trim: true
    },
    isPermanent: {
        type: Boolean
    }
});