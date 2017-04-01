"use strict";

module.exports = {
    EmployeeStatusModel: require("./employment-status.model"),
    GetAll: require("./actions/GetAll"),
    FindOneByIdAndEmploymentStatus: require("./actions/FindOneByIdAndEmploymentStatus"),
    FindOneByEmploymentStatus: require("./actions/FindOneByEmploymentStatus"),
    Add: require("./actions/Add"),
    UpdateById: require("./actions/UpdateById"),
    DeleteById: require("./actions/DeleteById")
};