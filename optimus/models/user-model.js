
"use strict";

const optimusCon = require("../optimus.con.js");

const Schema = new optimusCon.Schema({
    userName: { type: String, trim: true },
    firstName: { type: String, trim: true },
    middleName: { type: String, trim: true },
    lastName: { type: String, trim: true },
    password: { type: String, trim: true },
    dateCreated: { type: Date, default: Date.now },
    dateUpdated: { type: Date, default: Date.now },
    position: {
            type: optimusCon.Schema.ObjectId,
            ref: "Position"
        },
    dateDeactivated: { type: Date }
});

const UserModel = optimusCon.model("User", Schema);

module.exports = UserModel;
