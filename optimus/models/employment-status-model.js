
"use strict";

const Promise = require("bluebird");

const OptimusCon = require("../optimus.con.js");

const Schema = new OptimusCon.Schema({
    employmentStatus: {
        type: String,
        trim: true
    }
});

const EmploymentStatusModel = OptimusCon.model("EmploymentStatus", Schema);

const Result = require("../classes/result.js");

const EmploymentStatus = class {

    static get EmploymentStatusModel() {

        return EmploymentStatus;

    }

    static GetAll() {

        return new Promise((resolve, reject) => {

            let result = new Result();
            let promise = EmploymentStatusModel.find({}).exec();

            promise.then((employmentStatuses) => {

                result.success = true;

                if(employmentStatuses.length)
                    result.message = "All records were successfully loaded.";
                else
                    result.message = "No records were loaded.";

                result.data = employmentStatuses;
                resolve(result);

            })
            .catch((error) => {

                reject(error);

            });

        });

    }

    static FindOneByIdAndEmploymentStatus(_employmentStatus) {

        return new Promise((resolve, reject) => {

            let result = new Result();
            let promise = EmploymentStatusModel.findOne({ _id: _employmentStatus._id, employmentStatus: _employmentStatus.employmentStatus }).exec();

            promise.then((employmentStatus) => {

                if(employmentStatus) {

                    result.success = true;
                    result.message = "Found a matching record.";
 
                } else {

                    result.success = false;
                    result.message = "No matching record found.";

                }

                result.data = employmentStatus;
                resolve(result);

            })
            .catch((error) => {

                reject(error);

            });

        });

    }

    static FindOneByEmploymentStatus(_employmentStatus) {

        return new Promise((resolve, reject) => {

            let result = new Result();
            let promise = EmploymentStatus.findOne({ employmentStatus: _employmentStatus.employmentStatus }).exec();

            promise.then((employmentStatus) => {

                if(employmentStatus) {

                    result.success = true;
                    result.message = "Found a matching record.";

                } else {

                    result.success = false;
                    result.messsage = "No matching record.";

                }

                result.data = employmentStatus;
                resolve(result);

            })
            .catch((error) => {

                reject(error);

            });

        });

    }

    static Add(_employmentStatus) {

        return new Promise((resolve, reject) => {

            let result = new Result();
            let promise = EmploymentStatusModel.save(_employmentStatus);

            promise.then((employmentStatus) => {

                if(employmentStatus) {

                    result.success = true;
                    result.message = "Successfully added a new record.";

                } else {

                    result.success = false;
                    result.message = "Unable to add new record.";

                }

                result.data = employmentStatus;
                resolve(result);

            })
            .catch((error) => {

                reject(error);

            });

        });

    }

    static UpdateById(_employmentStatus) {

        return new Promise((resolve, reject) => {

            let result = new Result();
            let promise = EmploymentStatusModel.update({
                _id: _employmentStatus._id
            }, {
                employmentStatus: _employmentStatus.employmentStatus
            }).exec();

            promise.then((dbRes) => {

                if(dbRes.n === 1) {

                    result.success = true;
                    result.message = "The record was successfully updated.";

                } else {

                    result.success = false;
                    result.message = "Unable to update the record.";

                }

                result.data = dbRes;
                resolve(result);

            })
            .catch((error) => {

                reject(error);

            });

        });

    }

    static DeleteById(_employmentStatus) {

        return new Promise((resolve, reject) => {

            let result = new Result();
            let promise = EmploymentStatusModel.findById({ _id: _employmentStatus._id }).remove();

            promise.then((dbRes) => {

                if(dbRes.result.n === 1) {

                    result.success = true;
                    result.message = "The record was successfully deleted.";

                } else {

                    result.success = false;
                    result.message = "Unable to delete the record.";

                }

                result.data = dbRes;
                resolve(result);

            })
            .catch((error) => {

                reject(error);

            });

        });

    }

}

module.exports = EmploymentStatus;