const mongoose = require("mongoose");
const {findAppParameterValue} = require("../../controllers/v1/settings/appParameter/appParameter");
const Audit = require("../../controllers/v1/settings/audit/audit");
const {FG_CORRECTION: SCHEMA_CONST} = require("../../mocks/schemasConstant/productionConstant");
const {getAndSetAutoIncrementNo} = require("../../controllers/v1/settings/autoIncrement/autoIncrement");
const {paginatePlugin} = require("../plugins/paginatePlugin");
const FGCorrectionSchema = mongoose.Schema(
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
        FGNo: {
            type: String,
            required: true
        },
        FGDate: {
            type: Date,
            required: false,
            default: new Date()
        },
        SKU: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "SKUMaster"
        },
        SKUNo: {
            type: String,
            required: true
        },
        SKUDescription: {
            type: String,
            required: true
        },
        correctionCategory: {
            type: String,
            required: true
        },
        sourceBatch: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "FGIN"
        },
        transferQty: {
            type: Number,
            set: value => {
                if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                    return parseFloat(value).toFixed(2);
                }
            },
            required: false
        },
        correctedQty: {
            type: Number,
            set: value => {
                if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                    return parseFloat(value).toFixed(2);
                }
            },
            required: false
        },
        destinationBatch: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "FGIN"
        },
        newBatch: {
            type: Date,
            required: false,
            default: new Date()
        },
        availableSourceQty: {
            type: Number,
            set: value => {
                if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                    return parseFloat(value).toFixed(2);
                }
            },
            required: false
        }
    },
    {
        timestamps: true,
        collection: SCHEMA_CONST.COLLECTION_NAME
    }
);
FGCorrectionSchema.pre("save", async function (next) {
    const {isNew, isModified} = this;
    if (this.isNew) {
        this.FGNo = await getAndSetAutoIncrementNo({...SCHEMA_CONST.AUTO_INCREMENT_DATA()}, this.company, true);
    }
    await auditTrail(this, this.modifiedPaths(), isNew, isModified);
    next();
});
FGCorrectionSchema.index({SKU: -1});
FGCorrectionSchema.plugin(paginatePlugin);
const FGCorrection = mongoose.model(SCHEMA_CONST.COLLECTION_NAME, FGCorrectionSchema);

module.exports = FGCorrection;
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
