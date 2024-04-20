const {default: mongoose} = require("mongoose");
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
    equipment: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "Asset"
    },
    calibrationDate: {
        type: Date,
        required: false,
        default: new Date()
    },
    calibrationDue: {
        type: Date,
        required: false,
        default: new Date()
    },

    calibrationAgency: {
        type: String,
        required: false
    },
    calibrationResult: {
        type: String,
        required: false,
        enum: ["Passed", "Failed"],
        default: "Passed"
    },
    remarks: {
        type: String,
        required: false
    }
};
