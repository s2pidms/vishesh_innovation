const mongoose = require("mongoose");
const Audit = require("../../controllers/v1/settings/audit/audit");
const {OPTIONS} = require("../../helpers/global.options");
const {SALES_ORDER: SCHEMA_CONST} = require("../../mocks/schemasConstant/salesConstant");
const {getAndSetAutoIncrementNo} = require("../../controllers/v1/settings/autoIncrement/autoIncrement");
const {paginatePlugin, reportPaginatePlugin} = require("../plugins/paginatePlugin");
const {setTwoDecimal} = require("../../helpers/utility");
const salesOrderSchema = mongoose.Schema(
    {
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
        salesCategory: {
            type: String,
            required: true
            // imports, domestic
        },
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Customer"
        },
        quotationProformaRef: {
            type: mongoose.Schema.Types.ObjectId,
            required: false
            // ref: "QuotationProformaRef",
        },
        SONumber: {
            type: String,
            required: true
        },
        SOType: {
            type: String,
            required: false,
            default: "Regular"
        },
        SODate: {
            type: Date,
            required: true,
            default: new Date()
        },
        PIId: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "ProformaInvoice"
        },
        PINumber: {
            type: String,
            required: false
        },
        PIDate: {
            type: Date,
            required: false,
            default: new Date()
        },
        billFromLocation: {
            type: String,
            required: false
        },
        PONumber: {
            //orderReference
            type: String,
            required: true
        },
        PODate: {
            type: Date,
            required: true
        },
        currency: {
            type: String,
            required: true
        },
        POFileName: {
            type: String,
            required: false
        },
        SOTargetDate: {
            type: Date,
            required: false
        },
        SOTotalAmount: {
            type: Number,
            set: value => {
                if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                    return parseFloat(value).toFixed(2);
                }
            },
            required: true
        },
        SODetails: [
            {
                SOLineNumber: {
                    type: Number,
                    set: value => {
                        if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                            return parseFloat(value).toFixed(2);
                        }
                    },
                    required: true
                },
                SKU: {
                    //sku no.
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: "SKUMaster"
                },
                UOM: {
                    type: String,
                    required: false
                },
                customerPartNo: {
                    type: String,
                    required: false
                },
                standardRate: {
                    // rate/unit
                    type: Number,
                    set: value => {
                        if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                            return parseFloat(value).toFixed(2);
                        }
                    },
                    required: true
                },
                discount: {
                    type: Number,
                    set: value => {
                        if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                            return parseFloat(value).toFixed(2);
                        }
                    },
                    required: true,
                    default: 0
                },
                netRate: {
                    // standardRate - (standardRate * discount)
                    type: Number,
                    set: value => {
                        if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                            return parseFloat(value).toFixed(2);
                        }
                    },
                    required: true
                },
                SOLineTargetDate: {
                    type: Date,
                    required: false
                },
                orderedQty: {
                    type: Number,
                    set: value => {
                        if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                            return parseFloat(value).toFixed(2);
                        }
                    },
                    required: true
                },
                lineValue: {
                    // orderedQty * netRate
                    type: Number,
                    set: value => {
                        if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                            return parseFloat(value).toFixed(2);
                        }
                    },
                    required: true
                },
                invoicedQty: {
                    type: Number,
                    set: value => {
                        if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                            return parseFloat(value).toFixed(2);
                        }
                    },
                    required: false,
                    default: 0
                },
                balancedQty: {
                    type: Number,
                    set: value => {
                        if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                            return parseFloat(value).toFixed(2);
                        }
                    },
                    required: false,
                    default: 0
                },
                previousDRNQty: {
                    type: Number,
                    set: value => {
                        if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                            return parseFloat(value).toFixed(2);
                        }
                    },
                    required: false,
                    default: 0
                },
                JCCQty: {
                    type: Number,
                    set: value => setTwoDecimal(value),
                    required: false,
                    default: 0
                },
                previousJCCQty: {
                    type: Number,
                    set: value => setTwoDecimal(value),
                    required: false,
                    default: 0
                },
                canceledQty: {
                    type: Number,
                    set: value => {
                        if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                            return parseFloat(value).toFixed(2);
                        }
                    },
                    required: false,
                    default: 0
                },
                canceledReason: {
                    type: String,
                    required: false
                },
                lineStatus: {
                    type: String,
                    required: false
                },
                dispatchCount: {
                    type: Number,
                    required: false
                },
                dispatchDate: {
                    type: Date,
                    required: false
                },
                dispatchSchedule: [
                    {
                        scheduleNo: {
                            type: Number,
                            required: false
                        },
                        quantity: {
                            type: Number,
                            set: value => {
                                if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                                    return parseFloat(value).toFixed(2);
                                }
                            },
                            required: false
                        },
                        dispatchDate: {
                            type: Date,
                            required: false
                        },
                        PPICDate: {
                            type: Date,
                            required: false
                        }
                    }
                ]
            }
        ],
        customerBillingAddress: {
            line1: {
                type: String,
                required: false,
                trim: true
            },
            line2: {
                type: String,
                required: false,
                trim: true
            },
            line3: {
                type: String,
                required: false,
                trim: true
            },
            line4: {
                type: String,
                required: false,
                trim: true
            },
            state: {
                type: String,
                required: false,
                trim: true
            },
            city: {
                type: String,
                required: false,
                trim: true
            },
            district: {
                type: String,
                required: false,
                trim: true
            },
            pinCode: {
                type: String,
                required: false,
                trim: true
            },
            country: {
                type: String,
                required: false,
                trim: true
            },
            contactPersonName: {
                type: String,
                required: false,
                trim: true
            },
            contactPersonNumber: {
                type: String,
                required: false,
                trim: true
            }
        },
        customerShippingAddress: {
            line1: {
                type: String,
                required: false,
                trim: true
            },
            line2: {
                type: String,
                required: false,
                trim: true
            },
            line3: {
                type: String,
                required: false,
                trim: true
            },
            line4: {
                type: String,
                required: false,
                trim: true
            },
            state: {
                type: String,
                required: false,
                trim: true
            },
            city: {
                type: String,
                required: false,
                trim: true
            },
            district: {
                type: String,
                required: false,
                trim: true
            },
            pinCode: {
                type: String,
                required: false,
                trim: true
            },
            country: {
                type: String,
                required: false,
                trim: true
            },
            contactPersonName: {
                type: String,
                required: false,
                trim: true
            },
            contactPersonNumber: {
                type: String,
                required: false,
                trim: true
            }
        },
        billFromAddress: {
            line1: {
                type: String,
                required: false,
                trim: true
            },
            line2: {
                type: String,
                required: false,
                trim: true
            },
            line3: {
                type: String,
                required: false,
                trim: true
            },
            line4: {
                type: String,
                required: false,
                trim: true
            },
            state: {
                type: String,
                required: false,
                trim: true
            },
            city: {
                type: String,
                required: false,
                trim: true
            },
            district: {
                type: String,
                required: false,
                trim: true
            },
            pinCode: {
                type: String,
                required: false,
                trim: true
            },
            country: {
                type: String,
                required: false,
                trim: true
            }
        },
        billToAddress: {
            line1: {
                type: String,
                required: false,
                trim: true
            },
            line2: {
                type: String,
                required: false,
                trim: true
            },
            line3: {
                type: String,
                required: false,
                trim: true
            },
            line4: {
                type: String,
                required: false,
                trim: true
            },
            state: {
                type: String,
                required: false,
                trim: true
            },
            city: {
                type: String,
                required: false,
                trim: true
            },
            district: {
                type: String,
                required: false,
                trim: true
            },
            pinCode: {
                type: String,
                required: false,
                trim: true
            },
            country: {
                type: String,
                required: false,
                trim: true
            },
            contactPersonName: {
                type: String,
                required: false,
                trim: true
            },
            contactPersonNumber: {
                type: String,
                required: false,
                trim: true
            }
        },
        modeOfTransport: {
            type: String,
            required: false
        },
        frightCharge: {
            type: String,
            required: false
        },
        frightTerms: {
            type: String,
            required: false
        },
        transporter: {
            type: String,
            required: false
        },
        destination: {
            type: String,
            required: false
        },
        paymentTerms: {
            type: String,
            required: false
        },
        SORemarks: {
            type: String,
            required: false
        },
        SOCancellationReason: {
            type: String,
            required: false
        },
        isActive: {
            type: Boolean,
            required: false,
            default: true
        },
        otherCharges: {
            packagingAndForwarding: {
                type: Number,
                set: value => {
                    if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                        return parseFloat(value).toFixed(2);
                    }
                },
                required: false,
                default: 0
            },
            freight: {
                type: Number,
                set: value => {
                    if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                        return parseFloat(value).toFixed(2);
                    }
                },
                required: false,
                default: 0
            },
            insurance: {
                type: Number,
                set: value => {
                    if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                        return parseFloat(value).toFixed(2);
                    }
                },
                required: false,
                default: 0
            },
            loadingAndUnloading: {
                type: Number,
                set: value => {
                    if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                        return parseFloat(value).toFixed(2);
                    }
                },
                required: false,
                default: 0
            },
            miscellaneous: {
                type: Number,
                set: value => {
                    if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                        return parseFloat(value).toFixed(2);
                    }
                },
                required: false,
                default: 0
            },
            totalAmount: {
                type: Number,
                set: value => {
                    if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                        return parseFloat(value).toFixed(2);
                    }
                },
                required: false,
                default: 0
            }
        },
        SOStatus: {
            type: String,
            required: true,
            // enum: ["Created", "Invoiced", "Cancelled", "Closed", "Approved", "Report Generated"],
            enum: OPTIONS.defaultStatus.getAllSalesOrderStatusAsArray(),
            default: "Created"
        }
    },
    {
        timestamps: true,
        collection: SCHEMA_CONST.COLLECTION_NAME
    }
);

salesOrderSchema.pre("save", async function (next) {
    const {isNew, isModified} = this;
    if (this.isNew) {
        this.SONumber = await getAndSetAutoIncrementNo({...SCHEMA_CONST.AUTO_INCREMENT_DATA()}, this.company, true);
    }
    await auditTrail(this, this.modifiedPaths(), isNew, isModified);
    next();
});
salesOrderSchema.index({SOStatus: -1});
salesOrderSchema.index({SODate: -1});
salesOrderSchema.plugin(paginatePlugin);
salesOrderSchema.plugin(reportPaginatePlugin);
const SalesOrder = mongoose.model(SCHEMA_CONST.COLLECTION_NAME, salesOrderSchema);

module.exports = SalesOrder;
const auditTrail = async (master, modifiedPaths, isNew, isModified) => {
    const {createdBy, updatedBy, company} = master;
    const auditTrail = {
        company: company,
        oldData: JSON.stringify(await master.constructor.findById(master._id)),
        data: JSON.stringify(master),
        user: isNew ? createdBy : updatedBy, // Replace with the actual current user's name
        action: isNew ? SCHEMA_CONST.ADDED_ACTION : SCHEMA_CONST.UPDATED_ACTION,
        fieldsModified: modifiedPaths.toString()
    };
    await Audit.auditModule(auditTrail);
};
