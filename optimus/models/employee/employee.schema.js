"use strict";

const AccreditationSchema = require("./accreditation.schema");
const AddressSchema = require("./address.schema");
const ContactInfoSchema = require("./contact-info.schema");
const EducationHistorySchema = require("./education-history.schema");
const FamilySchema = require("./family.schema");
const WorkHistorySchema = require("./work-history.schema");
const OptimusCon = require("../../optimus.con");

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
    provincialAddress: AddressSchema,
    permanentAddress: AddressSchema,
    phoneNumbers: [ContactInfoSchema],
    landlines: [ContactInfoSchema],
    cityAddress: AddressSchema,
    educationHistory: [EducationHistorySchema],
    certifications: [AccreditationSchema],
    licensures:  [AccreditationSchema],
    workHistory: [WorkHistorySchema],
    family: [FamilySchema]
});

module.exports = EmployeeSchema;