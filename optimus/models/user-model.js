
"use strict";

const optimusCon = require("../optimus.con.js");

const Schema = new optimusCon.Schema({
    userName: "string",
    firstName: "string",
    middleName: "string",
    lastName: "string",
    password: "string",
    dateCreated: { type: Date, default: Date.now },
    dateUpdated: { type: Date, default: Date.now },
    position: {
            type: optimusCon.Schema.ObjectId,
            ref: "Position"
        },
    dateDeactivated: "Date"
});

const UserModel = optimusCon.model("User", Schema);

module.exports = UserModel;
