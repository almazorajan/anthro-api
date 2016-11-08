
"use strict";

const optimusCon = require("../optimus.con.js");

const Schema = new optimusCon.Schema({
    userName: { type: String, trim: true },
    firstName: { type: String, trim: true },
    middleName: { type: String, trim: true },
    lastName: { type: String, trim: true },
    password: { type: String, trim: true },
    dateCreated: { type: Date, default: Date.now },
    dateUpdated: { type: Date, default: Date.now },
    position: {
        type: optimusCon.Schema.ObjectId,
        ref: "Position"
    },
    dateDeactivated: { type: Date }
});

const UserModel = optimusCon.model("User", Schema);

const User = class {

    static get mongooseModel() {

        return UserModel;

    }

    static findOneByUserName(_username) {

        return UserModel.findOne({
            userName: _username.replace(/\s+/g, " ").trim()
        }).exec();

    }

    static findOneByIdAndUserName(_id, _username) {

        return UserModel.findOne({
            _id: user._id,
            userName: user.userName
        }).exec();

    }

    static add(_user) {

        return new UserModel(_user).save();

    }

    static update(_user) {

        return UserModel.update({
            _id: _user._id
        }, {
                userName: _user.userName.replace(/\s+/g, " ").trim(),
                firstName: _user.firstName.replace(/\s+/g, " ").trim(),
                middleName: _user.middleName.replace(/\s+/g, " ").trim(),
                lastName: _user.lastName.replace(/\s+/g, " ").trim(),
                password: _user.password.replace(/\s+/g, " ").trim(),
                dateCreated: _user.dateCreated,
                dateUpdated: new Date(),
                position: _user.position
            }).exec();

    }

}

module.exports = User;
