"use strict";

const Employee = require("../../../models/employee/employee");
const ErrorResult = require("../../../helpers/error.result");
const SanitizeWorkHistory = require("../../../models/employee/helpers/SanitizeWorkHistory");

module.exports = (req, res) => {
    try {
        let employee = req.body.data;

        Employee
            .FindOneByEmployeeNumber(employee.employeeNumber)
            .then((result) => {
                if (!result.success) {
                    return new Employee(SanitizeEmployee(employee)).Add();
                }
                res.send(ErrorResult("The employee number already exists"));
            })
            .then((result) => { 
                res.send(result);
            })
            .catch((e) => { 
                res.send(ErrorResult(e));
            });
    } catch (e) {
        res.send(ErrorResult(e));
    }
};

const propertiesWithIds = ["position", "company", "employmentStatus"];

function isPropertyWithId(propertyName) {
    for (let key in propertiesWithIds) {
        if (propertiesWithIds[key] === propertyName)
            return true;    
    }
    return false;
}

function SanitizeEmployee(employee) {
    let emp = {};
    for (let key in employee) {
        if (isPropertyWithId(key)) {
            emp[key] = employee[key]._id;
            continue;
        }
        if (key === "workHistory") {
            emp[key] = SanitizeWorkHistory(employee);
            continue;
        }
        emp[key] = employee[key];
    }
    return emp;
}