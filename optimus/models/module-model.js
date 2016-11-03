
"use strict";

const optimusCon = require("../optimus.con.js");

const Schema = new optimusCon.Schema({
    moduleName: "string",
    moduleDescription: "string",
    link: "string",
    group: "string"
});

const ModuleModel = optimusCon.model("Module", Schema);

module.exports = ModuleModel;