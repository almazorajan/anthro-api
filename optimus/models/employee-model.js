
"use strict";

const Promise = require("bluebird");

const OptimusCon = require("../optimus.con.js");

const Schema = new OptimusCon.Schema({
    
    employeeNumber: { 
        type: String, 
        trim: true, 
        required: true 
    },

    startingDate: { 
        type: Date, 
        default: Date.now 
    },

    salary: { 
        type: Number, 
        default: 0, 
        required: true 
    },

    position: {
        type: OptimusCon.Schema.ObjectId,
        ref: "Position"
    },

    company: {
        type: OptimusCon.Schema.ObjectId,
        ref: "Company"
    },

    employmentStatus: {
        type: OptimusCon.Schema.ObjectId,
        ref: "EmploymentStatus"
    },

    firstName: { 
        type: String, 
        trim: true, 
        required: true 
    },
    
    middleName: { 
        type: String, 
        trim: true 
    },
    
    lastName: { 
        type: String, 
        trim: true, 
        required: true 
    },

    birthDate: { 
        type: Date 
    },
    
    age: { 
        type: Number, 
        default: 0 
    },
    
    birthPlace: { 
        type: String, 
        trim: true, 
        required: true 
    },

    phoneNumbers: [
        { 
            type: String, 
            trim: true 
        }
    ],

    landlines: [
        { 
            type: String, 
            trim: true 
        }
    ],

    maritalStatus: { 
        type: String, 
        trim: true 
    },
    
    gender: { 
        type: String, 
        trim: true 
    },

    citizenship: { 
        type: String, 
        trim: true 
    },

    cityAddress: {
        unitFloor: { 
            type: String, 
            trim: true 
        },
        
        building: { 
            type: String, 
            trim: true 
        },

        streetName: { 
            type: String, 
            trim: true 
        },

        barangay: { 
            type: String, 
            trim: true 
        },

        city: { 
            type: String, 
            trim: true 
        },

        zipCode: { 
            type: String, 
            trim: true 
        },
        
        isPermanent: { 
            type: Boolean 
        }
    },

    provincialAddress: {
        unitFloor: { 
            type: String, 
            trim: true 
        },
        
        building: { 
            type: String, 
            trim: true 
        },

        streetName: { 
            type: String, 
            trim: true 
        },

        barangay: { 
            type: String, 
            trim: true 
        },

        city: { 
            type: String, 
            trim: true 
        },

        zipCode: { 
            type: String, 
            trim: true 
        },
        
        isPermanent: { 
            type: Boolean 
        }
    },

    permanentAddress: {
        unitFloor: { 
            type: String, 
            trim: true 
        },
        
        building: { 
            type: String, 
            trim: true 
        },

        streetName: { 
            type: String, 
            trim: true 
        },

        barangay: { 
            type: String, 
            trim: true 
        },

        city: { 
            type: String, 
            trim: true 
        },

        zipCode: { 
            type: String, 
            trim: true 
        },
        
        isPermanent: { 
            type: Boolean 
        }
    },

    ssNumber: { 
        type: String, 
        trim: true 
    },

    tinNumber: { 
        type: String, 
        trim: true 
    },

    philHealthNumber: { 
        type: String, 
        trim: true 
    },

    pagibigNumber: { 
        type: String, 
        trim: true 
    },

    educationHistory: [
        {
            educationLevel: { 
                type: String, 
                trim: true 
            },
            
            degree: { 
                type: String, 
                trim: true 
            },

            dateGraduated: { 
                type: Date 
            }
        }
    ],

    certifications: [
        {
            title: { 
                type: String, 
                trim: true 
            },

            dateAccredited: { 
                type: Date 
            }
        }
    ],

    licensures:  [
        {
            title: { 
                type: String, 
                trim: true 
            },

            dateAccredited: { 
                type: Date 
            }
        }
    ],

    workHistory: [
        {
            position: { 
                type: String, 
                trim: true 
            },

            company: {
                type: String,
                trim: true
            },
        
            dateFrom: { 
                type: Date 
            },
        
            dateTo: { 
                type: Date 
            },
        
            isPresent: { 
                type: Boolean 
            },
        
            employmentStatus: {
                type: OptimusCon.Schema.ObjectId,
                ref: "EmploymentStatus"
            },
        
            salary: { 
                type: Number, 
                default: 0 
            },
            
            reasonForLeaving: { 
                type: String, 
                trim: true 
            }
        }
    ]

});

const EmployeeModel = OptimusCon.model("Employee", Schema);

const Result = require("../classes/result.js");

const Employee = class {

    static get EmployeeModel() {

        return EmployeeModel;

    }

    static GetAll() {

        return new Promise((resolve, reject) => {
            
            let result = new Result();
            let promise = EmployeeModel.find({}).exec();

            promise.then((employees) => {

                result.success = true;

                if(employees.length)
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

    static Add(_employee) {

        return new Promise((resolve, reject) => {

            let result = new Result();
            let promise = new EmployeeModel(_employee).save();

            promise.then((employee) => {

                if(employee) {
                    
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

    static FindOneByEmployeeNumber(_employee) {

        return new Promise((resolve, reject) => {

            let result = new Result();
            let promise = EmployeeModel.findOne({ employeeNumber: _employee.employeeNumber }).exec();

            promise.then((employee) => {

                if(employee) {

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

    static UpdateById(_employee) {

        return new Promise((resolve, reject) => {

            let result = new Result();
            let promise = EmployeeModel.update({
                _id: _employee.id
            }, {
                employeeNumber: _employee.employeeNumber,
                startingDate: _employee.startingDate,
                salary: _employee.salay,
                position: _employee.position._id,
                company: _employee.company._id,
                employmentStatus: _employee.employmentStatus._id,
                firstName: _employee.firstName,
                middleName: _employee.middleName,
                lastName: _employee.lastName,
                birthDate: employee.birthDate,
                age: _employee.age,
                birthPlace: _employee.birthPlace,
                phoneNumbers: _employee.phoneNumbers,
                landlines: _employee.landlines,
                maritalStatus: _employee.maritalStatus,
                gender: _employee.gender,
                citizenship: _employee.citizenship,
                cityAddress: _employee.cityAddress,
                provincialAddress: employee.provincialAddress,
                permanentAddress: _employee.permanentAddress,
                tinNUmber: _employee.tinNumber,
                philHealthNumber: _employee.philHealthNumber,
                pagibigNumber: _employee.pagibigNumber,
                educationHistory: _employee.educationHistory,
                certifications: _employee.certifications,
                licensures: _employee.licensures,
                workHistory: _employee.workHistory,
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

    static DeleteById(_employee) {

        return new Promise((resolve, reject) => {

            let result = new Result();
            let promise = EmployeeModel.findById({ _id: _employee._id }).remove().exec();

            promise.then((dbRes) => {

                if(dbRes.result.n === 1) {

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

};

module.exports = Employee;
