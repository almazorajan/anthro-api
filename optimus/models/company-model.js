
"use strict";

const Promise = require("bluebird");

const OptimusCon = require("../optimus.con.js");

const Schema = new OptimusCon.Schema({

    companyName: {
        type: String,
        trim: true,
        required: true
    },

    companyAddress: {
        type: String,
        trim: true
    },

    contactNumbers: [
        {
            type: String,
            trim: true
        }
    ],

    EmailAddresses: [
        {
            type: String,
            trim: true
        }
    ]

});

const CompanyModel = OptimusCon.model("Company", Schema);

const Result = require("../classes/result.js");

const Company = class {

    static get CompanyModel() {

        return CompanyModel;

    }

    static GetAll() {

        return new Promise((resolve, reject) => {

            let result = new Result();
            let promise = CompanyModel.find({}).exec();

            promise.then((companies) => {

                result.success = true;

                if(companies.length)
                    result.message = "Successfully loaded all records.";
                else
                    result.message = "No records loaded.";

                result.data = companies;
                resolve(result);

            }).catch((error) => {

                reject(error);

            });

        });

    }

    static FindOneByCompanyName(_company) {

        return new Promise((resolve, reject) => {

           let result = new Result();
           let promise = CompanyModel.findOne({ companyName: _company.companyName }).exec();

           promise.then((company) => {

               if(company) {

                   result.success = true;
                   result.message = "Found a record match.";
                   
               } else {

                   result.success = false;
                   result.message = "No matching record found.";

                }

                result.data = company;
                resolve(result);

           })
           .catch((error) => {

               reject(error);

           });

        });

    }

    static FindOneByIdAndCompanyName(_company) {

        return new Promise((resolve, reject) => {

            let result = new Result();
            let promise = CompanyModel.findOne({ _id: _company._id, companyName: _company.companyName }).exec();

            promise.then((company) => {

                if(company) {

                    result.success = true;
                    result.message = "Found a matching record.";
                    
                } else {

                    result.success = false;
                    result.message = "Cannot find a matching record.";

                }

                result.data = company;
                resolve(result);


            });

        });

    }

    static Add(_company) {

        return new Promise((resolve, reject) => {

            let result = new Result();
            let promise = new CompanyModel(_company).save();

            promise.then((company) => {

                if(company) {

                    result.success = true;
                    result.message = "Company was succesfully saved.";

                } else {

                    result.success = false;
                    result.message = "Unable to add company.";
                    
                }

                result.data = company;
                resolve(result);

            })
            .catch((error) => {

                reject(error);

            });

        });

    }

    static UpdateById(_company) {

        return new Promise((resolve, reject) => {

            let result = new Result();
            let promise = CompanyModel.update({
                _id: _company._id
            }, {
                companyName: _company.companyName,
                companyAddress: _company.companyAddress,
                contactNumbers: _company.contactNumbers,
                emailAddresses: _company.emailAddresses
            }).exec();

            promise.then((dbRes) => {

                if(dbRes.n === 1) {

                    result.success = true;
                    result.message = "The record was successfully updated.";
                    
                } else {

                    result.success = false;
                    result.message = "The record was not successfully updated.";

                }

                result.data = dbRes;
                resolve(result);

            })
            .catch((error) => {

                reject(error);

            });

        });

    }

    static DeleteById(_company) {

        return new Promise((resolve, reject) => {

            let result = new Result();
            let promise = CompanyModel.findOne({ _id: _company._id }).remove().exec();

            promise.then((dbRes) => {

                if(dbRes.result.n === 1) {

                    result.success = true;
                    result.message = "Record was successfully deleted.";

                } else {

                    result.success = false;
                    result.message = "Unable to delete the record.";

                }

                resolve(result);

            })
            .catch((error) => {

                reject(error);

            });

        });

    }

};

module.exports = Company;