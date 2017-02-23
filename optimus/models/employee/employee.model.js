"use strict";

const Promise = require("bluebird");
const OptimusCon = require("../../optimus.con");
const Result = require("../../classes/result");
const EmployeeModel = OptimusCon.model("Employee", require("./employee.schema"));

module.exports = {
    EmployeeModel: EmployeeModel,
    GetAll: GetAll,
    Add: Add,
    FindOneByEmployeeNumber: FindOneByEmployeeNumber,
    UpdateById: UpdateById,
    DeleteById: DeleteById
};

function GetAll() {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = EmployeeModel.find({})
            .populate("company")
            .populate("position")
            .populate("employmentStatus")
            .populate("workHistory.employmentStatus")
            .exec();

        promise.then((employees) => {
            result.success = true;

            if (employees.length)
                result.message = "Successfully loaded all employees.";
            else
                result.message = "No records to load.";

            result.data = employees;
            resolve(result);
        })
        .catch((error) => {
            reject(error);
        });
    });
}

function SanitizeWorkHistory(_employee) {
    var workHistory = [];

    for (let i = 0; i < _employee.workHistory.length; i++) {
        var history = _employee.workHistory[i];

        workHistory.push({
            position: history.position,
            companyName: history.companyName,
            dateFrom: history.dateFrom,
            dateTo: history.dateTo,
            isPresent: history.isPresent,
            employmentStatus: history.employmentStatus._id,
            salary: history.salary,
            reasonForLeaving: history.reasonForLeaving
        });
    }

    return workHistory;
}

function Add(_employee) {
    return new Promise((resolve, reject) => {
        let result = new Result();

        let promise = new EmployeeModel({
            employeeNumber: _employee.employeeNumber,
            startingDate: _employee.startingDate,
            salary: _employee.salary,
            position: _employee.position._id,
            company: _employee.company._id,
            employmentStatus: _employee.employmentStatus._id,
            firstName: _employee.firstName,
            middleName: _employee.middleName,
            lastName: _employee.lastName,
            birthDate: _employee.birthDate,
            age: _employee.age,
            birthPlace: _employee.birthPlace,
            phoneNumbers: _employee.phoneNumbers,
            landlines: _employee.landlines,
            maritalStatus: _employee.maritalStatus,
            gender: _employee.gender,
            citizenship: _employee.citizenship,
            cityAddress: _employee.cityAddress,
            provincialAddress: _employee.provincialAddress,
            permanentAddress: _employee.permanentAddress,
            ssNumber: _employee.ssNumber,
            tinNumber: _employee.tinNumber,
            philHealthNumber: _employee.philHealthNumber,
            pagibigNumber: _employee.pagibigNumber,
            educationHistory: _employee.educationHistory,
            certifications: _employee.certifications,
            licensures: _employee.licensures,
            family: _employee.family,
            workHistory: SanitizeWorkHistory(_employee)
        }).save();

        promise.then((employee) => {
            if (employee) {
                result.success = true;
                result.message = "Successfully added new employee.";
            } else {
                result.success = false;
                result.message = "Could not add employee."
            }

            result.data = employee;
            resolve(result);
        })
        .catch((error) => {
            reject(error);
        });
    });
}

function FindOneByEmployeeNumber(_employee) {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = EmployeeModel.findOne({ employeeNumber: _employee.employeeNumber }).exec();

        promise.then((employee) => {
            if (employee) {
                result.success = true;
                result.message = "Found matching record.";
            } else {
                result.success = false;
                result.message = "Could not find any matching record.";
            }

            result.data = employee;
            resolve(result);
        })
        .catch((error) => {
            reject(error);
        });
    });
}

function UpdateById(_employee) {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = EmployeeModel.update({ 
            _id: _employee._id
        }, {
            employeeNumber: _employee.employeeNumber,
            startingDate: _employee.startingDate,
            salary: _employee.salary,
            position: _employee.position._id,
            company: _employee.company._id,
            employmentStatus: _employee.employmentStatus._id,
            firstName: _employee.firstName,
            middleName: _employee.middleName,
            lastName: _employee.lastName,
            birthDate: _employee.birthDate,
            age: _employee.age,
            birthPlace: _employee.birthPlace,
            phoneNumbers: _employee.phoneNumbers,
            landlines: _employee.landlines,
            maritalStatus: _employee.maritalStatus,
            gender: _employee.gender,
            citizenship: _employee.citizenship,
            cityAddress: _employee.cityAddress,
            provincialAddress: _employee.provincialAddress,
            permanentAddress: _employee.permanentAddress,
            ssNumber: _employee.ssNumber,
            tinNumber: _employee.tinNumber,
            philHealthNumber: _employee.philHealthNumber,
            pagibigNumber: _employee.pagibigNumber,
            educationHistory: _employee.educationHistory,
            certifications: _employee.certifications,
            licensures: _employee.licensures,
            family: _employee.family,
            workHistory: SanitizeWorkHistory(_employee)
        }).exec();

        promise.then((dbRes) => {
            if (dbRes.n === 1) {
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

function DeleteById(_employee) {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = EmployeeModel.findById({ _id: _employee._id }).remove().exec();

        promise.then((dbRes) => {
            if (dbRes.result.n === 1) {
                result.success = true;
                result.message = "The record was successfully deleted.";
            } else {
                result.success = false;
                result.message = "Could not delete record.";
            }

            result.data = dbRes;
            resolve(result);
        })
        .catch((error) => {
            reject(error);
        });
    });
}
