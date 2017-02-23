"use strict";

const ModuleTemplate = {
    moduleName: {
        type: String,
        trim: true,
        required: true
    },
    moduleDescription: {
        type: String,
        trim: true
    },
    link: {
        type: String,
        trim: true,
        required: true
    },
    group: {
        type: String,
        trim: true
    }
};

module.exports = ModuleTemplate;