"use strict";

const OptimusCon = require("../../optimus.con");
const FamilyTemplate = require("./family.template");
const AccreditationTemplate = require("./accreditation.template");
const EducationHistoryTemplate = require("./education-history.template");
const AddressTemplate = require("./address.template");
const WorkHistoryTemplate = require("./work-history.template");
const ContactInfoTemplate = require("./contact-info.template");

const EmployeeTemplate = {  
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
        ContactInfoTemplate
    ],
    landlines: [
        ContactInfoTemplate
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
    cityAddress: AddressTemplate,
    provincialAddress: AddressTemplate,
    permanentAddress: AddressTemplate,
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
        EducationHistoryTemplate
    ],
    certifications: [
        AccreditationTemplate
    ],
    licensures:  [
        AccreditationTemplate
    ],
    workHistory: [
        WorkHistoryTemplate
    ],
    family: [
        FamilyTemplate
    ]
};

module.exports = EmployeeTemplate;