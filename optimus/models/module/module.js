"use strict";

const Db = require("../../optimus.con.js");
const ModuleSchema = require("./schemas/module.schema.js");

ModuleSchema.methods.Add = require("./methods/Add");
ModuleSchema.methods.DeleteById = require("./methods/DeleteById");
ModuleSchema.methods.UpdateById = require("./methods/UpdateById");

ModuleSchema.statics.FindById = require("./statics/FindById");
ModuleSchema.statics.FindOneByModuleName = require("./statics/FindOneByModuleName");
ModuleSchema.statics.GetAll = require("./statics/GetAll");

module.exports = Db.model("Module", ModuleSchema);