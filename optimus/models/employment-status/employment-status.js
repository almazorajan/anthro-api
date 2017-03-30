
const EmploymentStatusModel = require("./employment-status.model");

module.exports = {
    EmployeeStatusModel: EmploymentStatusModel,
    GetAll: require("./actions/get-all"),
    FindOneByIdAndEmploymentStatus: require("./actions/find-one-by-id-and-employment-status"),
    FindOneByEmploymentStatus: require("./actions/find-one-by-employment-status"),
    Add: require("./actions/add"),
    UpdateById: require("./actions/update-by-id"),
    DeleteById: require("./actions/delete-by-id")
};