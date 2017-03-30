"use strict";

const OptimusCon = require("../../optimus.con");
const EmployeeModel = OptimusCon.model("Employee", require("./employee.schema"));

module.exports = {
    EmployeeModel: EmployeeModel,
    GetAll: require("./actions/get-all")(EmployeeModel),
    CountByCompanyId: require("./actions/count-by-company-id")(EmployeeModel),
    CountByPositionId: require("./actions/count-by-position-id")(EmployeeModel),
    CountByEmploymentStatusId: require("./actions/count-by-employment-status-id")(EmployeeModel),
    CountByWorkHistoryEmploymentStatusId: require("./actions/count-by-workhistory-employment-status-id")(EmployeeModel),
    Add: require("./actions/add")(EmployeeModel),
    FindOneByEmployeeNumber: require("./actions/find-one-by-employee-number")(EmployeeModel),
    FindOneByIdAndEmployeeNumber: require("./actions/find-one-by-id-and-employee-number")(EmployeeModel),
    UpdateById: require("./actions/update-by-id")(EmployeeModel),
    DeleteById: require("./actions/delete-by-id")(EmployeeModel)
};
