const mongoose = require("mongoose");
const Audit = require("../../controllers/v1/settings/audit/audit");
const {MATERIAL_RECEIPT_NOTE: SCHEMA_CONST} = require("../../mocks/schemasConstant/qualityConstant");
const {getAndSetAutoIncrementNo} = require("../../controllers/v1/settings/autoIncrement/autoIncrement");
const {paginatePlugin} = require("../plugins/paginatePlugin");
const {setTwoDecimal} = require("../../helpers/utility");
const MRNSchema = mongoose.Schema(
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
        MRNNumber: {
            type: String,
            required: true
        },
        MRNDate: {
            type: Date,
            required: true,
            default: new Date()
        },
        GRNNumber: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "GRN"
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
        supplierDate: {
            type: Date,
            required: true,
            default: new Date()
        },
        MRNStatus: {
            type: String,
            required: false,
            enum: ["Partially Released", "Rejected", "Report Generated", "Released", "Closed", "Created"],
            default: "Created"
        },
        MRNDetails: [
            {
                MRNLineNumber: {
                    type: Number,
                    required: false
                },
                GRNLineNumber: {
                    type: Number,
                    required: false
                },
                item: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: false,
                    ref: "Items"
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
                GRNQty: {
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
                // balanceRejectedQty: {
                //     type: Number,
                // set: value => {
                //     if (typeof +value == "number") {
                //         return parseFloat(value).toFixed(2);
                //     }
                // },
                //     required: false,
                //     default: 0,
                // },
                // previousRejectedQty: {
                //     type: Number,
                // set: value => {
                //     if (typeof +value == "number") {
                //         return parseFloat(value).toFixed(2);
                //     }
                // },
                //     required: false,
                //     default: 0,
                // },
                lineRemarks: {
                    type: String,
                    required: false
                },
                batchNo: {
                    type: String,
                    required: false
                },
                batchDate: {
                    type: Date,
                    required: false
                },
                QCLevels: {
                    type: String,
                    required: false
                },
                QCLevelsDetails: [
                    {
                        seq: {
                            type: Number,
                            required: false
                        },
                        specificationCode: {
                            type: String,
                            required: false
                        },
                        characteristic: {
                            type: String,
                            required: false
                        },
                        UOM: {
                            type: String,
                            required: false
                        },
                        testStandard: {
                            type: String,
                            required: false
                        },
                        measuringInstrument: {
                            type: String,
                            required: false
                        },
                        specValue: {
                            type: String,
                            required: false
                        },
                        LTL: {
                            type: String,
                            required: false
                        },
                        UTL: {
                            type: String,
                            required: false
                        },
                        observation: {
                            type: String,
                            required: false
                        }
                    }
                ],
                status: {
                    type: String,
                    required: false
                },
                deviationApprovedBy: {
                    type: String,
                    required: false
                }
            }
        ],
        deliveryLocation: {
            type: String,
            required: false
        },
        GRNRemarks: {
            type: String,
            required: false
        },
        MRNRemarks: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true,
        collection: SCHEMA_CONST.COLLECTION_NAME
    }
);
MRNSchema.pre("save", async function (next) {
    const {isNew, isModified} = this;
    if (this.isNew) {
        this.MRNNumber =
            this.MRNNumber != "0000000"
                ? await getAndSetAutoIncrementNo({...SCHEMA_CONST.AUTO_INCREMENT_DATA()}, this.company, true)
                : 0;
    }
    await auditTrail(this, this.modifiedPaths(), isNew, isModified);
    next();
});

MRNSchema.index({MRNDate: -1});
MRNSchema.index({MRNStatus: -1});
MRNSchema.plugin(paginatePlugin);

const MRN = mongoose.model(SCHEMA_CONST.COLLECTION_NAME, MRNSchema);
module.exports = MRN;
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
