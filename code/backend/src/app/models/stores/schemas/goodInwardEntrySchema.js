const {default: mongoose} = require("mongoose");
const {setTwoDecimal} = require("../../../helpers/utility");
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
    GINNumber: {
        type: String,
        required: true
    },
    GINDate: {
        type: Date,
        required: true,
        default: new Date()
    },
    MRNNumber: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "MRN"
    },
    MRNDate: {
        type: Date,
        required: false,
        default: new Date()
    },
    purchaseCategory: {
        type: String,
        required: true
    },
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "Supplier"
    },
    supplierInvoice: {
        type: String,
        required: false
    },
    supplierInvoiceDate: {
        type: Date,
        required: true,
        default: new Date()
    },
    currency: {
        type: String,
        required: true
    },
    FXRateINR: {
        type: String,
        required: true
    },
    GINStatus: {
        type: String,
        required: false,
        default: "Created"
    },
    GINDetails: [
        {
            GINLineNumber: {
                type: Number,
                required: false
            },
            MRNLineNumber: {
                type: Number,
                required: false
            },
            primaryToSecondaryConversion: {
                type: Number,
                required: false
            },
            secondaryToPrimaryConversion: {
                type: Number,
                required: false
            },
            primaryUnit: {
                type: String,
                required: false
            },
            secondaryUnit: {
                type: String,
                required: false
            },
            conversionOfUnits: {
                type: String,
                required: false
            },
            UOM: {
                type: String,
                required: true
            },
            item: {
                type: mongoose.Schema.Types.ObjectId,
                required: false,
                ref: "Items"
            },
            itemType: {
                type: String,
                required: false
            },
            itemSubCategory: {
                type: String,
                required: false,
                default: "General"
            },
            GINQty: {
                type: Number,
                set: value => setTwoDecimal(value),
                required: false
            },
            standardRate: {
                type: Number,
                set: value => setTwoDecimal(value, 3),
                required: false
            },
            purchaseRate: {
                type: Number,
                set: value => setTwoDecimal(value, 3),
                required: false
            },
            purchaseRateUSD: {
                type: Number,
                set: value => setTwoDecimal(value, 3),
                required: false
            },
            purchaseRatINR: {
                type: Number,
                set: value => setTwoDecimal(value, 3),
                required: false
            },
            lineValueINR: {
                type: Number,
                set: value => setTwoDecimal(value),
                required: false
            },
            releasedQty: {
                type: Number,
                set: value => setTwoDecimal(value),
                required: false
            },
            rejectedQty: {
                type: Number,
                set: value => setTwoDecimal(value),
                required: false
            },
            batchDate: {
                type: Date,
                required: false
            }
        }
    ],
    deliveryLocation: {
        type: String,
        required: false
    },
    remarks: {
        type: String,
        required: false
    },
    storageLocationMapping: {
        subLocation: {
            type: String,
            required: false
        },
        rowNo: {
            type: String,
            required: false
        },
        rackNo: {
            type: String,
            required: false
        },
        binNo: {
            type: String,
            required: false
        },
        otherId: {
            type: String,
            required: false
        }
    }
};
