const {default: mongoose} = require("mongoose");
const {OPTIONS} = require("../../../helpers/global.options");
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
    GRNNumber: {
        type: String,
        required: true
    },
    GRNDate: {
        type: Date,
        required: true,
        default: new Date()
    },
    PONumber: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "PurchaseOrder"
    },
    PODate: {
        type: Date,
        required: true,
        default: new Date()
    },
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "Supplier"
    },
    supplierInvoiceRef: {
        type: String,
        required: true
    },
    supplierInvoiceRefDate: {
        type: Date,
        required: true
    },
    GRNStatus: {
        type: String,
        required: true,
        // enum: [
        //     "Awaiting Approval",
        //     "Approved",
        //     "Rejected",
        //     "Report Generated",
        //     "GRN Partial Created",
        //     "GRN Created",
        //     "Closed",
        // ],
        enum: OPTIONS.defaultStatus.getAllGRNStatusAsArray(),
        default: OPTIONS.defaultStatus.AWAITING_APPROVAL
    },
    remarks: {
        type: String,
        required: false
    },
    goodsDeliveryDate: {
        type: Date,
        required: false,
        default: new Date()
    },
    transporterName: {
        type: String,
        required: false
    },
    AWB_LR_BR: {
        type: String,
        required: false
    },
    freightChargesPaid: {
        type: Number,
        set: value => setTwoDecimal(value),
        required: false
    },
    otherChargesPaid: {
        type: Number,
        set: value => setTwoDecimal(value),
        required: false
    },
    deliveryLocation: {
        type: String,
        required: false
    },

    GRNDetails: [
        {
            GRNLineNumber: {
                type: Number,
                required: false
            },
            POLineNumber: {
                type: Number,
                required: false
            },
            item: {
                type: mongoose.Schema.Types.ObjectId,
                required: false,
                ref: "Items"
            },
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
            POQty: {
                type: Number,
                set: value => setTwoDecimal(value),
                required: false
            },
            GRNQty: {
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
            // receivedQty: {
            //   type: Number,
            //  set: value => {
            //     if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
            //         return parseFloat(value).toFixed(2);
            //     }
            // },
            //   required: false,
            // },
            invoicedQty: {
                type: Number,
                set: value => setTwoDecimal(value),
                required: false,
                default: 0
            },
            balancedQty: {
                type: Number,
                set: value => setTwoDecimal(value),
                required: false,
                default: 0
            },
            rejectedQty: {
                type: Number,
                set: value => setTwoDecimal(value),
                required: false
            },
            canceledQty: {
                type: Number,
                set: value => setTwoDecimal(value),
                required: false,
                default: 0
            },
            canceledReason: {
                type: String,
                required: false
            },
            lineRemarks: {
                type: String,
                required: false
            },
            batchDate: {
                type: Date,
                required: false
            }
        }
    ],
    isTaxInvoice: {
        type: Boolean,
        required: false
    },
    isEWayBill: {
        type: Boolean,
        required: false
    },
    isDeliveryChallan: {
        type: Boolean,
        required: false
    },
    isPackingList: {
        type: Boolean,
        required: false
    },
    isCOATC: {
        type: Boolean,
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
    },
    cancellationReason: {
        type: String,
        required: false
    }
};
