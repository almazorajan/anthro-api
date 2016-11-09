
"use strict";

const Promise = require("bluebird");

const OptimusCon = require("../optimus.con.js");

const Schema = new OptimusCon.Schema({
    positionName: { type: String, trim: true },
    modules: [
        {
            type: OptimusCon.Schema.ObjectId,
            ref: "Module"
        }
    ]
});

const PositionModel = OptimusCon.model("Position", Schema);

const Result = require("../classes/result.js");

const Position = class {

    static get PositionModel() {

        return PositionModel;

    }

    static GetAll() {

        return new Promise((resolve, reject) => {

            let result = new Result();
            let promise = PositionModel.find({}).exec();

            promise.then((positions) => {

                result.success = true;

                if(positions.length)
                    result.message = "Successfully loaded all records.";
                else
                    result.message = "No records to be loaded.";
                
                result.data = positions;
                resolve(result);

            })
            .catch((error) => {

                reject(error);

            });

        });

    }

    static FindOneByIdAndPositionName(_position) {

        return new Promise((resolve, reject) => {

            let result = new Result();
            let promise = PositionModel.findOne({ _id: _position._id, positionName: _position.positionName }).exec();

            promise.then((_position) => {

                if(_position) {

                    result.success = true;
                    result.message = "Found a record match.";

                } else {

                    result.success = false;
                    result.message = "Could not find a record match.";

                }

                result.data = _position;
                resolve(result);

            })
            .catch((error) => {

                reject(error);

            })

        });

    }

    static FindOneByPositionName(_position) {

        return new Promise((resolve, reject) => {

            let result = new Result();
            let promise = PositionModel.findOne({ positionName: _position.positionName }).exec();

            promise.then((_position) => {

                if(_position) {

                    result.success = true;
                    result.message = "Found matching record.";

                } else {

                    result.success = false;
                    result.message = "Unable to find matching record.";

                }

                result.data = _position;
                resolve(result);

            })
            .catch((error) => {

                reject(error);

            });

        });

    }

    static Add(_position) {

        return new Promise((resolve, reject) => {

            let result = new Result();
            let promise = new PositionModel(_position).save();

            promise.then((position) => {

                if(position) {

                    result.success = true;
                    result.message = "Successfully added position.";

                } else {

                    result.success = false;
                    result.message = "Unable to save position.";

                }

                result.data = position;
                resolve(result);


            })
            .catch((error) => {

                reject(error);

            });

        });

    }

    static UpdateById(_position) {

        return new Promise((resolve, reject) => {

            let result = new Result();
            let promise = PositionModel.update({
                _id: _position._id
            }, {
                positionName: _position.positionName,
                modules: _position.modules
            }).exec();

            promise.then((dbRes) => {

                if(dbRes.n === 1) {

                    result.success = true;
                    result.message = "Position was successfully updated!";

                } else {

                    result.success = false;
                    result.message = "Position was not updated.";

                }

                result.data = dbRes;
                resolve(result);

            })
            .catch((error) => {

                reject(error);

            });

        });

    }

    static DeleteById(_position) {

        return new Promise((resolve, reject) => {

            let result = new Result();
            let promise = PositionModel.findById({ _id: _position._id }).remove().exec();

            promise.then((dbRes) => {

                if(dbRes.result.n === 1) {

                    result.success = true;
                    result.message = "Record was successfully deleted.";
                    
                } else {

                    result.success = false;
                    result.message = "Unable to delete the record.";

                }

                result.data = dbRes;
                resolve(result);

            }).catch((error) => {

                reject(error);

            });

        });

    }

}

module.exports = Position;
