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
    BOMCode: {
        type: String,
        required: false
    },
    BOMDate: {
        type: Date,
        required: false,
        default: new Date()
    },
    BOMDescription: {
        type: String,
        required: false
    },
    revision: {
        type: String,
        required: false
    },
    SKU: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "SKUMaster"
    },
    SKUName: {
        type: String,
        required: false
    },
    SKUCode: {
        type: String,
        required: false
    },
    SKUDescription: {
        type: String,
        required: false
    },
    UOM: {
        type: String,
        required: false
    },
    BOMComposition: [
        {
            item: {
                type: mongoose.Schema.Types.ObjectId,
                required: false,
                ref: "Items"
            },
            itemCode: {
                type: String,
                required: false
            },
            itemName: {
                type: String,
                required: false
            },
            itemDescription: {
                type: String,
                required: false
            },
            itemCategory: {
                type: String,
                required: false
            },
            UOM: {
                type: String,
                required: false
            },
            BOMLevel: {
                type: Number,
                set: value => {
                    if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                        return parseFloat(value).toFixed(2);
                    }
                },
                required: false
            },
            qty: {
                type: Number,
                set: value => {
                    if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                        return parseFloat(value).toFixed(2);
                    }
                },
                required: false
            },
            substituteAvailable: {
                type: String,
                required: false,
                enum: ["Yes", "No"],
                default: "Yes"
            }
        }
    ],
    status: {
        type: String,
        required: false,
        enum: OPTIONS.defaultStatus.getCommonStatusAsArray(),
        default: OPTIONS.defaultStatus.ACTIVE
    }
};
