"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const SanitizeWorkHistory = require("../helpers/sanitize-work-history");

module.exports = (EmployeeModel) => {

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
            }).catch((error) => {
                reject(error);
            });
        });
    }
    return Add;
};