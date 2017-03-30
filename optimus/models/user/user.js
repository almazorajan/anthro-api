
const UserModel = require("./user.model");

module.exports = {
    UserModel: UserModel,
    GetAll: require("./actions/get-all"),
    FindOneById: require("./actions/find-one-by-id"),
    FindOneByUserNameAndPassword: require("./actions/find-one-by-username-and-password"),
    FindOneByUserName: require("./actions/find-one-by-username"),
    FindOneByIdAndUserName: require("./actions/find-one-by-id-and-username"),
    Add: require("./actions/add"),
    UpdateById: require("./actions/update-by-id"),
    UpdatePasswordById: require("./actions/update-password-by-id"),
    DeleteById: require("./actions/delete-by-id")
};