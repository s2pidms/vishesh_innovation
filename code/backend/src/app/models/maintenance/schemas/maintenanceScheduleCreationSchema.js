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
    scheduleCode: {
        type: String,
        required: false
    },
    scheduleName: {
        type: String,
        required: false
    },
    equipment: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "Asset"
    },
    maintenanceTask: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "MaintenanceTask"
    },
    frequency: {
        type: String,
        required: false,
        enum: ["Daily", "Weekly", "Monthly", "Yearly"],
        default: "Daily"
    },
    priority: {
        type: String,
        required: false
        // enum: [
        //     "Daily", "Weekly", "Monthly", "Yearly"
        // ],
        // default: "Daily",
    },

    startDate: {
        type: Date,
        required: false
    },
    endDate: {
        type: Date,
        required: false
    },
    description: {
        type: String,
        required: false
    }
};
