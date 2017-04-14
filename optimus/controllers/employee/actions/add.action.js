"use strict";

const Result = require("../../../classes/result");
const Employee = require("../../../models/employee/employee");
const ErrorResult = require("../../../helpers/error.result");
const SanitizeWorkHistory = require("../../../models/employee/helpers/sanitize-work-history");

module.exports = (req, res) => {
    try {
        let employee = req.body.data;

        Employee
            .FindOneByEmployeeNumber(employee.employeeNumber)
            .then((result) => {
                if (result.success) {
                    res.send(ErrorResult("The employee number already exists"));
                } else {
                    return new Employee({
                        employeeNumber: employee.employeeNumber,
                        startingDate: employee.startingDate,
                        salary: employee.salary,
                        position: employee.position._id,
                        company: employee.company._id,
                        employmentStatus: employee.employmentStatus._id,
                        firstName: employee.firstName,
                        middleName: employee.middleName,
                        lastName: employee.lastName,
                        birthDate: employee.birthDate,
                        age: employee.age,
                        birthPlace: employee.birthPlace,
                        phoneNumbers: employee.phoneNumbers,
                        landlines: employee.landlines,
                        maritalStatus: employee.maritalStatus,
                        gender: employee.gender,
                        citizenship: employee.citizenship,
                        cityAddress: employee.cityAddress,
                        provincialAddress: employee.provincialAddress,
                        permanentAddress: employee.permanentAddress,
                        ssNumber: employee.ssNumber,
                        tinNumber: employee.tinNumber,
                        philHealthNumber: employee.philHealthNumber,
                        pagibigNumber: employee.pagibigNumber,
                        educationHistory: employee.educationHistory,
                        certifications: employee.certifications,
                        licensures: employee.licensures,
                        family: employee.family,
                        workHistory: SanitizeWorkHistory(employee)
                    }).Add();
                }
            })
            .then((result) => res.send(result))
            .catch((e) => res.send(ErrorResult(e)));
    } catch (e) {
        res.send(ErrorResult(e));
    }
};
