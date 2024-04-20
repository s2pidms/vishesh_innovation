const mongoose = require("mongoose");
const Audit = require("../../controllers/v1/settings/audit/audit");
const {REJ_QTY_MANAGEMENT: SCHEMA_CONST} = require("../../mocks/schemasConstant/qualityConstant");
const rejectedQtyMgntSchema = mongoose.Schema(
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
        supplier: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "Supplier"
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
        standardRate: {
            type: Number,
            set: value => {
                if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                    return parseFloat(value).toFixed(2);
                }
            },
            required: false
        },
        purchaseRate: {
            type: Number,
            set: value => {
                if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                    return parseFloat(value).toFixed(2);
                }
            },
            required: false
        },
        MRNRejectedQty: {
            type: Number,
            set: value => {
                if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                    return parseFloat(value).toFixed(2);
                }
            },
            required: false,
            default: 0
        },
        // balanceRejectedQty: {
        // type: Number,
        // set: value => {
        //     if (typeof +value == "number") {
        //         return parseFloat(value).toFixed(2);
        //     }
        // },
        //     required: false,
        //     default: 0,
        // },
        previousRejectedQty: {
            type: Number,
            set: value => {
                if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                    return parseFloat(value).toFixed(2);
                }
            },
            required: false,
            default: 0
        },
        status: {
            type: String,
            required: false,
            enum: ["Closed", "Created"],
            default: "Created"
        }
    },
    {
        timestamps: true,
        collection: SCHEMA_CONST.COLLECTION_NAME
    }
);
rejectedQtyMgntSchema.pre("save", async function (next) {
    const {isNew, isModified} = this;
    await auditTrail(this, this.modifiedPaths(), isNew, isModified);
    next();
});

const rejectedQtyMgnt = mongoose.model(SCHEMA_CONST.COLLECTION_NAME, rejectedQtyMgntSchema);

module.exports = rejectedQtyMgnt;
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
