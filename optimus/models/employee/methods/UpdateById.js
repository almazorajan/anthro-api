"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const SanitizeWorkHistory = require("../helpers/SanitizeWorkHistory");

module.exports = Promise.method(() => {
    return new Promise((resolve, reject) => {
        this
            .model("Employee")
            .update({
                _id: this._id
            }, {
                employeeNumber: this.employeeNumber,
                startingDate: this.startingDate,
                salary: this.salary,
                position: this.position._id,
                company: this.company._id,
                employmentStatus: this.employmentStatus._id,
                firstName: this.firstName,
                middleName: this.middleName,
                lastName: this.lastName,
                birthDate: this.birthDate,
                age: this.age,
                birthPlace: this.birthPlace,
                phoneNumbers: this.phoneNumbers,
                landlines: this.landlines,
                maritalStatus: this.maritalStatus,
                gender: this.gender,
                citizenship: this.citizenship,
                cityAddress: this.cityAddress,
                provincialAddress: this.provincialAddress,
                permanentAddress: this.permanentAddress,
                ssNumber: this.ssNumber,
                tinNumber: this.tinNumber,
                philHealthNumber: this.philHealthNumber,
                pagibigNumber: this.pagibigNumber,
                educationHistory: this.educationHistory,
                certifications: this.certifications,
                licensures: this.licensures,
                family: this.family,
                workHistory: SanitizeWorkHistory(this)
            })
            .exec()
            .then((dbRes) => resolve(new Result({
                success: dbRes.n === 1 ? true : false,
                message: dbRes.n === 1 ? "the record was successfully updated" : "unable to update the record",
                data: dbRes
            })))
            .catch((error) => reject(error));
    });
});