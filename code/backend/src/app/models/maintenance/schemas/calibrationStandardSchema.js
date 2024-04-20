const {default: mongoose} = require("mongoose");
const {OPTIONS} = require("../../../helpers/global.options");
exports.SCHEMA = {
    company: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Company"
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "User"
    },
    updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "User"
    },
    standardCode: {
        type: String,
        required: false
    },
    standardName: {
        type: String,
        required: false
    },
    standardType: {
        type: String,
        required: false
    },
    measurementRange: {
        type: String,
        required: false
    },
    calibrationMethod: {
        type: String,
        required: false
    },
    calibrationInterval: {
        type: String,
        required: false
    },
    traceability: {
        type: String,
        required: false
    },
    lastCalibrationDate: {
        type: Date,
        required: false,
        default: new Date()
    },
    calibrationAgency: {
        type: String,
        required: false
    },
    standardLocation: {
        type: String,
        required: false
    },
    calibrationCost: {
        type: Number,
        set: value => {
            if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                return parseFloat(value).toFixed(2);
            }
        },
        required: false
    },
    status: {
        type: String,
        required: false,
        enum: OPTIONS.defaultStatus.getAllCalibrationStandardStatusArray(),
        default: OPTIONS.defaultStatus.ACTIVE
    }
};
