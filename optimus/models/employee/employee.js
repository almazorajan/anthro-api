"use strict";

const Db = require("../../optimus.con");
const EmployeeSchema = require("./schemas/employee.schema");

EmployeeSchema.methods.Add = require("./methods/Add");
EmployeeSchema.methods.DeleteById = require("./methods/DeleteById");
EmployeeSchema.methods.UpdateById = require("./methods/UpdateById");

EmployeeSchema.statics.CountByCompanyId = require("./statics/CountByCompanyId");
EmployeeSchema.statics.CountByEmploymentStatusId = require("./statics/CountByEmploymentStatusId");
EmployeeSchema.statics.CountByPositionId = require("./statics/CountByPositionId");
EmployeeSchema.statics.CountByWorkHistoryEmploymentStatusId = require("./statics/CountByWorkHistoryEmploymentStatusId");
EmployeeSchema.statics.FindOneByEmployeeNumber = require("./statics/FindOneByEmployeeNumber");
EmployeeSchema.statics.FindOneByIdAndEmployeeNumber = require("./statics/FindOneByIdAndEmployeeNumber");
EmployeeSchema.statics.GetAll = require("./statics/GetAll");

module.exports = Db.model("Employee", EmployeeSchema);