
"use strict";

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
        
            employmentStatus: {}, // todo
        
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

};

module.exports = Employee;
