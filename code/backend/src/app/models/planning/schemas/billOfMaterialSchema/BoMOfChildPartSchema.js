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
    BOMNo: {
        type: String,
        required: false
    },
    childItem: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "ChildItem"
    },
    documentDetails: [
        {
            documentNo: {
                type: String,
                required: false
            },
            documentDate: {
                type: Date,
                required: false,
                default: new Date()
            },
            revisionNo: {
                type: String,
                required: false
            },
            revisionDate: {
                type: Date,
                required: false,
                default: new Date()
            },
            docCreatedBy: {
                type: String,
                required: false
            },
            docApprovedBy: {
                type: String,
                required: false
            },
            QMSDocumentNo: {
                type: String,
                required: false
            }
        }
    ],
    childItemCode: {
        type: String,
        required: false
    },
    childItemName: {
        type: String,
        required: false
    },
    childItemDescription: {
        type: String,
        required: false
    },
    UOM: {
        type: String,
        required: false
    },
    partCount: {
        type: Number,
        set: value => {
            if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                return parseFloat(value).toFixed(2);
            }
        },
        required: false
    },
    totalMaterialCost: {
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
        enum: OPTIONS.defaultStatus.getCommonStatusAsArray(),
        default: OPTIONS.defaultStatus.ACTIVE
    },
    BOMOfChildPartDetails: [
        {
            reference: {
                type: mongoose.Schema.Types.ObjectId,
                refPath: "referenceModel"
            },
            referenceModel: {
                type: String,
                enum: ["ChildItem", "Items"]
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
            supplier: {
                type: mongoose.Schema.Types.ObjectId,
                required: false,
                ref: "Supplier"
            },
            supplierCode: {
                type: String,
                required: false
            },
            UOM: {
                type: String,
                required: false
            },
            qtyPerSKUUnit: {
                type: Number,
                set: value => {
                    if (![undefined, null, "NaN"].includes(value) && typeof value == "number") {
                        return parseFloat(value).toFixed(5);
                    }
                },
                required: false
            },
            wastePercentage: {
                type: Number,
                set: value => {
                    if (![undefined, null, "NaN"].includes(value) && typeof value == "number") {
                        return parseFloat(value).toFixed(2);
                    }
                },
                required: false
            },
            partCount: {
                type: Number,
                set: value => {
                    if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                        return parseFloat(value).toFixed(2);
                    }
                },
                required: false
            },
            unitCost: {
                type: Number,
                set: value => {
                    if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                        return parseFloat(value).toFixed(2);
                    }
                },
                required: false
            },
            itemCost: {
                type: Number,
                set: value => {
                    if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                        return parseFloat(value).toFixed(2);
                    }
                },
                required: false
            },
            BOM: {
                type: String,
                required: false
            }
        }
    ]
};
