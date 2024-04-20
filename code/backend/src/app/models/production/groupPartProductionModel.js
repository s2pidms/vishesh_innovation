const mongoose = require("mongoose");
const Audit = require("../../controllers/v1/settings/audit/audit");
const {GROUP_PART_PRODUCTION: SCHEMA_CONST} = require("../../mocks/schemasConstant/productionConstant");
const {getAndSetAutoIncrementNo} = require("../../controllers/v1/settings/autoIncrement/autoIncrement");
const {paginatePlugin} = require("../plugins/paginatePlugin");
const grandPartProductionSchema = mongoose.Schema(
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
        groupPartCode: {
            type: String,
            required: false
        },
        processName: {
            type: String,
            required: false
        },
        processCode: {
            type: String,
            required: false
        },
        process: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "ProcessNameMaster"
        },
        machineName: {
            type: String,
            required: false
        },
        machineCode: {
            type: String,
            required: false
        },
        machine: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "Asset"
        },
        productionDate: {
            type: Date,
            required: false,
            default: new Date()
        },
        productionShift: {
            type: String,
            required: false
        },
        operatingStaff: {
            type: String,
            required: false
        },
        status: {
            type: String,
            required: false,
            enum: ["Awaiting Approval", "Approved", "Cancelled"],
            default: "Awaiting Approval"
        },
        groupPartProductionDetails: [
            {
                childItem: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: "ChildItem"
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
                orderRef: {
                    type: String,
                    required: false
                },
                jobCard: {
                    type: String,
                    required: false
                },
                batchNumber: {
                    type: String,
                    required: false
                },
                UOM: {
                    type: String,
                    required: false
                },
                batchQty: {
                    type: Number,
                    set: value => {
                        if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                            return parseFloat(value).toFixed(2);
                        }
                    },
                    required: false
                },
                outputQty: {
                    type: Number,
                    set: value => {
                        if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                            return parseFloat(value).toFixed(2);
                        }
                    },
                    required: false
                },
                rejectedQty: {
                    type: Number,
                    set: value => {
                        if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                            return parseFloat(value).toFixed(2);
                        }
                    },
                    required: false
                }
            }
        ],
        remarks: {
            type: String,
            required: false
        },
        cancelRemarks: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true,
        collection: SCHEMA_CONST.COLLECTION_NAME
    }
);

grandPartProductionSchema.pre("save", async function (next) {
    const {isNew, isModified} = this;
    if (this.isNew) {
        this.groupPartCode = await getAndSetAutoIncrementNo(
            {...SCHEMA_CONST.AUTO_INCREMENT_DATA()},
            this.company,
            true
        );
    }
    await auditTrail(this, this.modifiedPaths(), isNew, isModified);
    next();
});
grandPartProductionSchema.index({productionDate: -1});
grandPartProductionSchema.plugin(paginatePlugin);
const GrandPartProduction = mongoose.model(SCHEMA_CONST.COLLECTION_NAME, grandPartProductionSchema);

module.exports = GrandPartProduction;
const auditTrail = async (master, modifiedPaths, isNew, isModified) => {
    const {createdBy, updatedBy, company} = master;
    const auditTrail = {
        company: company,
        oldData: JSON.stringify(await master.constructor.findById(master._id)),
        data: JSON.stringify(master),
        user: isNew ? createdBy : updatedBy,
        action: isNew ? SCHEMA_CONST.ADDED_ACTION : SCHEMA_CONST.UPDATED_ACTION,
        fieldsModified: modifiedPaths.toString()
    };
    await Audit.auditModule(auditTrail);
};
