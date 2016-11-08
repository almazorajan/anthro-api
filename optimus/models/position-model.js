
"use strict";

const optimusCon = require("../optimus.con.js");

const Schema = new optimusCon.Schema({
    positionName: { type: String, trim: true },
    modules: [
        {
            type: optimusCon.Schema.ObjectId,
            ref: "Module"
        }
    ]
});

const PositionModel = optimusCon.model("Position", Schema);

const Result = require("../classes/result.js");

const Position = class {

    static get PositionModel() {

        return PositionModel;

    }

    static GetAll(_callBack) {

        try {

            let result = new Result();
            let promise = PositionModel.find({}).exec();

            promise.then((positions) => {

                result.success = true;

                if(positions.length)
                    result.message = "Successfully loaded all records.";
                else
                    result.message = "No records to be loaded.";
                
                result.data = positions;
                _callBack(result);

            })
            .catch((error) => {

                result.success = false;
                result.message = error.toString();
                _callBack(result);

            });

        } catch(e) {

            _callBack(new Result({
                success: false,
                message: (e || e.message).toString()
            }));

        }

    }

    static FindOneByPositionName(_positionName, _callBack) {

        try {
     
            let result = new Result();
            let promise = PositionModel.findOne({ positionName: _positionName }).exec();

            promise.then((_position) => {

                if(_position) {

                    result.success = true;
                    result.message = "Found matching record.";

                } else {

                    result.success = false;
                    result.message = "Unable to find matching record.";

                }

                _callBack(result);

            })
            .catch((error) => {

                result.success = false;
                result.message = error.toString();
                _callBack(result);

            });

        } catch(e) {

            _callBack(new Result({
                success: false,
                message: (e || e.message).toString()
            }));

        }

    }

    static Add(_position, _callBack) {

        try {

            let result = new Result();
            let promise = new PositionModel(_position).save();

            promise.then((_position) => {

                if(_position) {

                    result.success = true;
                    result.message = "Successfully added position.";

                } else {

                    result.success = false;
                    result.message = "Unable to save position.";

                }

                result.dat = _position;
                _callBack(result);


            })
            .catch((error) => {

                result.success = false;
                result.message = error.toString();
                _callBack(result);

            });

        } catch(e) {

            _callBack(new Result({
                success: false,
                message: (e || e.message).toString()
            }));

        }

    }

    static UpdateById(_position, _callBack) {

        try {

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
                _callBack(result);

            })
            .catch((error) => {

                result.success = false;
                result.error = error.toString();
                _callBack(result);

            });

        } catch(e) {
            
            _callBack(new Result({
                success: false,
                message: (e || e.message).toString()
            }));

        }

    }

}

module.exports = PositionModel;
