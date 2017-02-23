"use strict";

const EducationHistory = {
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
};

module.exports = EducationHistory;