"use strict";

module.exports = {
    EmployeeModel: require("./employee.model"),
    GetAll: require("./actions/GetAll"),
    CountByCompanyId: require("./actions/CountByCompanyId"),
    CountByPositionId: require("./actions/CountByPositionId"),
    CountByEmploymentStatusId: require("./actions/CountByEmploymentStatusId"),
    CountByWorkHistoryEmploymentStatusId: require("./actions/CountByWorkHistoryEmploymentStatusId"),
    Add: require("./actions/Add"),
    FindOneByEmployeeNumber: require("./actions/FindOneByEmployeeNumber"),
    FindOneByIdAndEmployeeNumber: require("./actions/FindOneByIdAndEmployeeNumber"),
    UpdateById: require("./actions/UpdateById"),
    DeleteById: require("./actions/DeleteById")
};