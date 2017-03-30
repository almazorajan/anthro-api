"use strict";

module.exports = {
    EmployeeModel: require("./employee.model"),
    GetAll: require("./actions/get-all"),
    CountByCompanyId: require("./actions/count-by-company-id"),
    CountByPositionId: require("./actions/count-by-position-id"),
    CountByEmploymentStatusId: require("./actions/count-by-employment-status-id"),
    CountByWorkHistoryEmploymentStatusId: require("./actions/count-by-workhistory-employment-status-id"),
    Add: require("./actions/add"),
    FindOneByEmployeeNumber: require("./actions/find-one-by-employee-number"),
    FindOneByIdAndEmployeeNumber: require("./actions/find-one-by-id-and-employee-number"),
    UpdateById: require("./actions/update-by-id"),
    DeleteById: require("./actions/delete-by-id")
};