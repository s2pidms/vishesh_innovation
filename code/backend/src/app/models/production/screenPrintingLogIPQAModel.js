const mongoose = require("mongoose");
const Audit = require("../../controllers/v1/settings/audit/audit");
const {SCREEN_PRINTING_IPQA: SCHEMA_CONSTANT} = require("../../mocks/schemasConstant/productionConstant");
const {paginatePlugin} = require("../plugins/paginatePlugin");
const screenPrintingLogIPQASchema = mongoose.Schema(
    {
        company: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
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
        jobCard: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "JobCardCreation"
        },
        jobCardNo: {
            type: String,
            required: false
        },
        SKU: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "SKUMaster"
        },
        SKUNo: {
            type: String,
            required: false
        },
        SKUName: {
            type: String,
            required: false
        },
        SKUDescription: {
            type: String,
            required: false
        },
        IPQCLogInfo: [
            {
                inspectionType: {
                    type: String,
                    required: false
                },
                inspectionParameter: {
                    type: String,
                    required: false
                },
                observation: {
                    type: String,
                    required: false
                },
                inspectedBy: {
                    type: String,
                    required: false
                },
                status: {
                    type: String,
                    required: false
                }
            }
        ],
        remarks: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true,
        collection: SCHEMA_CONSTANT.COLLECTION_NAME
    }
);

screenPrintingLogIPQASchema.pre("save", async function (next) {
    const {isNew, isModified} = this;

    await auditTrail(this, this.modifiedPaths(), isNew, isModified);
    next();
});
screenPrintingLogIPQASchema.plugin(paginatePlugin);
const screenPrintingLogIPQA = mongoose.model(SCHEMA_CONSTANT.COLLECTION_NAME, screenPrintingLogIPQASchema);

module.exports = screenPrintingLogIPQA;
const auditTrail = async (master, modifiedPaths, isNew, isModified) => {
    const {createdBy, updatedBy, company} = master;
    const auditTrail = {
        company: company,
        oldData: JSON.stringify(await master.constructor.findById(master._id)),
        data: JSON.stringify(master),
        user: isNew ? createdBy : updatedBy, // Replace with the actual current user's name
        action: isNew ? SCHEMA_CONSTANT.ADDED_ACTION : SCHEMA_CONSTANT.UPDATED_ACTION,
        fieldsModified: modifiedPaths.toString()
    };
    await Audit.auditModule(auditTrail);
};
