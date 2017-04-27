"use strict";

const Db = require("../../../optimus.con");

module.exports = new Db.Schema({
    firstName: {
        type: String,
        trim: true
    },
    middleName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    occupation: {
        type: String,
        trim: true
    },
    contactNumbers: [
        {
            number: {
                type: String,
                trim: true
            }
        }
    ],
    emailAddresses: [
        {
            emailAddress: {
                type: String,
                trim: true
            }
        }
    ],
    relationship: {
        type: String,
        trim: true
    }
});