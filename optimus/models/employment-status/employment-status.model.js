"use strict";

const Promise = require("bluebird");
const OptimusCon = require("../optimus.con");
const Result = require("../classes/result");
const EmploymentStatusModel = OptimusCon.model("EmploymentStatus", require("./employee-status.schema"));

module.exports = {
    EmployeeStatusModel: EmploymentStatusModel,
    GetAll: GetAll,
    FindOneByIdAndEmploymentStatus: FindOneByIdAndEmploymentStatus,
    FindOneByEmploymentStatus: FindOneByEmploymentStatus,
    Add: Add,
    UpdateById: UpdateById,
    DeleteById: DeleteById
};

function GetAll() {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = EmploymentStatusModel.find({}).exec();

        promise.then((employmentStatuses) => {
            result.success = true;

            if (employmentStatuses.length)
                result.message = "Employment Statuses were successfully loaded";
            else
                result.message = "No Employment Status were loaded";

            result.data = employmentStatuses;
            resolve(result);
        })
        .catch((error) => {
            reject(error);
        });
    });
}

function FindOneByIdAndEmploymentStatus(_employmentStatus) {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = EmploymentStatusModel.findOne({ 
            _id: _employmentStatus._id, 
            employmentStatus: _employmentStatus.employmentStatus 
        }).exec();

        promise.then((employmentStatus) => {
            if (employmentStatus) {
                result.success = true;
                result.message = "Found a matching record";
            } else {
                result.success = false;
                result.message = "No matching record found";
            }

            result.data = employmentStatus;
            resolve(result);
        })
        .catch((error) => {
            reject(error);
        });
    });
}

function FindOneByEmploymentStatus(_employmentStatus) {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = EmploymentStatusModel.findOne({ employmentStatus: _employmentStatus.employmentStatus }).exec();

        promise.then((employmentStatus) => {
            if (employmentStatus) {
                result.success = true;
                result.message = "Found a matching record";
            } else {
                result.success = false;
                result.messsage = "No matching record";
            }

            result.data = employmentStatus;
            resolve(result);
        })
        .catch((error) => {
            reject(error);
        });
    });
}

function Add(_employmentStatus) {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = new EmploymentStatusModel(_employmentStatus).save();

        promise.then((employmentStatus) => {
            if (employmentStatus) {
                result.success = true;
                result.message = "Successfully added a new Employment Status";
            } else {
                result.success = false;
                result.message = "Unable to add new Employment Status";
            }

            result.data = employmentStatus;
            resolve(result);
        })
        .catch((error) => {
            reject(error);
        });
    });
}

function UpdateById(_employmentStatus) {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = EmploymentStatusModel.update({
            _id: _employmentStatus._id
        }, {
            employmentStatus: _employmentStatus.employmentStatus
        }).exec();

        promise.then((dbRes) => {
            if (dbRes.n === 1) {
                result.success = true;
                result.message = "The Employment Status was successfully updated";
            } else {
                result.success = false;
                result.message = "Unable to update the Employment Status";
            }

            result.data = dbRes;
            resolve(result);
        })
        .catch((error) => {
            reject(error);
        });
    });
}

function DeleteById(_employmentStatus) {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = EmploymentStatusModel.findById({ _id: _employmentStatus._id }).remove();

        promise.then((dbRes) => {
            if (dbRes.result.n === 1) {
                result.success = true;
                result.message = "Employment Status was successfully deleted";
            } else {
                result.success = false;
                result.message = "Unable to delete the Employment Status";
            }

            result.data = dbRes;
            resolve(result);
        })
        .catch((error) => {
            reject(error);
        });
    });
}
