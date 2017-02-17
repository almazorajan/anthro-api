"use strict";

const OptimusCon = require("../optimus.con.js");
const EmployeeSchema = new OptimusCon.Schema({  
    employeeNumber: { 
        type: String, 
        trim: true 
    },
    startingDate: { 
        type: Date, 
        default: Date.now 
    },
    salary: { 
        type: Number, 
        default: 0 
    },
    position: {
        type: OptimusCon.Schema.Types.ObjectId,
        ref: "Position"
    },
    company: {
        type: OptimusCon.Schema.Types.ObjectId,
        ref: "Company"
    },
    employmentStatus: {
        type: OptimusCon.Schema.Types.ObjectId,
        ref: "EmploymentStatus"
    },
    firstName: { 
        type: String, 
        trim: true 
    },
    middleName: { 
        type: String, 
        trim: true 
    },
    lastName: { 
        type: String, 
        trim: true 
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
        trim: true 
    },
    phoneNumbers: [
        { 
            number: { 
                type: String, 
                trim: true 
            } 
        }
    ],
    landlines: [
        { 
            number: { 
                type: String, 
                trim: true 
            } 
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
    ],
    family: [
        {
            firstName: { 
                type: String, 
                trim: true 
            },
            middleName: { 
                type: String, 
                trim: true 
            },
            lastName: { 
                type: String, 
                trim: true 
            },
            occupation: { 
                type: String, 
                trim: true 
            },
            contactNumbers: [
                {
                    number: { 
                        type: String, 
                        trim: true 
                    }
                }
            ],
            emailAddresses: [
                {
                    emailAddress: { 
                        type: String, 
                        trim: true 
                    }
                }
            ],
            relationship: { 
                type: String, 
                trim: true 
            }
        }
    ]
});

module.exports = EmployeeSchema;