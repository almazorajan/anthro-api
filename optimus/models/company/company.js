"use strict";

module.exports = {
    CompanyModel: require("./company.model"),
    GetAll: require("./actions/GetAll"),
    FindOneByCompanyName: require("./actions/FindOneByCompanyName"),
    FindOneByIdAndCompanyName: require("./actions/FindOneByIdAndCompanyName"),
    Add: require("./actions/Add"),
    UpdateById: require("./actions/UpdateById"),
    DeleteById: require("./actions/DeleteById")
};