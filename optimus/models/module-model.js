
"use strict";

const optimusCon = require("../optimus.con.js");

const Schema = new optimusCon.Schema({
    moduleName: { type: String, trim: true, required: true },
    moduleDescription: { type: String, trim: true },
    link: { type: String, trim: true, required: true },
    group: { type: String, trim: true }
});

const ModuleModel = optimusCon.model("Module", Schema);

module.exports = ModuleModel;