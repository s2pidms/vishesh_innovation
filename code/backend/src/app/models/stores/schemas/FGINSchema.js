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
    FGINNo: {
        type: String,
        required: false
    },
    FGINDate: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: false
    },
    SKUId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "SKUMaster"
    },
    SKUNo: {
        type: String,
        required: false
    },
    SKUName: {
        type: String,
        required: false
    },
    SKUDescription: {
        type: String,
        required: false
    },
    partNo: {
        type: String,
        required: false
    },
    UOM: {
        type: String,
        required: false
    },
    jobCardNo: {
        type: String,
        required: false
    },
    manufacturingDate: {
        type: Date,
        required: true
    },
    expiryDate: {
        type: Date,
        required: false
    },
    shelfLife: {
        type: Number,
        required: false
    },
    producedQty: {
        type: Number,
        set: value => {
            if (![undefined, null, "NaN"].includes(value) && typeof value == "number") {
                return parseFloat(value).toFixed(2);
            }
        },
        required: false,
        default: 0
    },
    FGINQuantity: {
        type: Number,
        set: value => {
            if (![undefined, null, "NaN"].includes(value) && typeof value == "number") {
                return parseFloat(value).toFixed(2);
            }
        },
        required: true
    },
    previousDRNQty: {
        type: Number,
        set: value => {
            if (![undefined, null, "NaN"].includes(value) && typeof value == "number") {
                return parseFloat(value).toFixed(2);
            }
        },
        required: false,
        default: 0
    },
    batchNo: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: false,
        default: "Created"
    }
};
