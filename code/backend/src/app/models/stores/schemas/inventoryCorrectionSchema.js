const {default: mongoose} = require("mongoose");
const {GOODS_TRANSFER_REQUEST_DEPT, INV_FORM_TYPE} = require("../../../mocks/constantData");
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
    ICDate: {
        type: Date,
        required: false,
        default: new Date()
    },
    GINDate: {
        type: Date,
        required: true,
        default: new Date()
    },
    GIN: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "GoodInwardEntry"
    },
    MRN: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "MRN"
    },
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Supplier"
    },
    MRNNumber: {
        type: String,
        required: false
    },
    MRNDate: {
        type: Date,
        required: false
    },
    ICStatus: {
        type: String,
        required: false,
        default: "IC Created"
    },
    // GINLineNumber: {
    //     type: Number,
    //     required: false
    // },
    UOM: {
        type: String,
        required: true
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
    item: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        refPath: "referenceModel"
    },
    referenceModel: {
        enum: ["ChildItem", "Items"],
        type: String,
        default: "Items"
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
    itemType: {
        type: String,
        required: false
    },
    itemSubCategory: {
        type: String,
        required: false,
        default: "General"
    },
    // openIRQty: {
    //     type: Number,
    //     set: value => setTwoDecimal(value),
    //     required: false
    // },
    updatedQty: {
        type: Number,
        set: value => setTwoDecimal(value),
        required: false
    },
    closedIRQty: {
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
    batchDate: {
        type: Date,
        required: false
    },
    deliveryLocation: {
        type: String,
        required: false
    },
    department: {
        type: String,
        required: false,
        enum: [
            GOODS_TRANSFER_REQUEST_DEPT.PLANNING,
            GOODS_TRANSFER_REQUEST_DEPT.PRODUCTION,
            GOODS_TRANSFER_REQUEST_DEPT.STORES
        ],
        default: GOODS_TRANSFER_REQUEST_DEPT.STORES
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
    },
    type: {
        type: String,
        required: false,
        enum: ["InventoryCorrection", "SFGStock"],
        default: "InventoryCorrection"
    },
    // WIP Keys
    SQM: {
        type: Number,
        set: value => setTwoDecimal(value),
        required: false
    },
    roll: {
        type: Number,
        set: value => setTwoDecimal(value),
        required: false
    },
    width: {
        type: Number,
        set: value => setTwoDecimal(value),
        required: false
    },
    length: {
        type: Number,
        set: value => setTwoDecimal(value),
        required: false
    },
    expiryDate: {
        type: Date,
        required: false
    },
    // End WIP Keys
    // SFG Keys
    stage: {
        type: String,
        required: false
        // default: "Roll"
    },
    noOfRollsToBeSlit: {
        type: Number,
        set: value => setTwoDecimal(value),
        required: false
    },
    sqmToBeProcessed: {
        type: Number,
        set: value => setTwoDecimal(value, 4),
        required: false
    },
    recovery: {
        type: Number,
        set: value => setTwoDecimal(value),
        required: false
    },
    recoveryPercentage: {
        type: Number,
        set: value => setTwoDecimal(value),
        required: false
    },
    wastage: {
        type: Number,
        set: value => setTwoDecimal(value),
        required: false
    },
    wastagePercentage: {
        type: Number,
        set: value => setTwoDecimal(value),
        required: false
    },
    productionRemarks: {
        prodRemarks: {
            type: String,
            required: false
        },
        checkedBy: {
            type: String,
            required: false
        },
        approvedBy: {
            type: String,
            required: false
        },
        approvedDate: {
            type: Date,
            required: false
        }
    },
    QARemarks: {
        QARemark: {
            type: String,
            required: false
        },
        checkedBy: {
            type: String,
            required: false
        },
        approvedBy: {
            type: String,
            required: false
        },
        approvedDate: {
            type: Date,
            required: false
        }
    },
    formType: {
        type: String,
        required: false,
        enum: [INV_FORM_TYPE.PARENT, INV_FORM_TYPE.CHILD],
        default: INV_FORM_TYPE.PARENT
    }
};
