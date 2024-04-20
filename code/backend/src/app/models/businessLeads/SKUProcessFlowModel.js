const mongoose = require("mongoose");
const Audit = require("../../controllers/v1/settings/audit/audit");
const {SKU_PROCESS_FLOW: SCHEMA_CONSTANT} = require("../../mocks/schemasConstant/businessLeadsConstant");
const {paginatePlugin} = require("../plugins/paginatePlugin");
const {OPTIONS} = require("../../helpers/global.options");
const SKUProcessFlowSchema = mongoose.Schema(
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
        SKU: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "SKUMaster"
        },
        PFDetails: [
            {
                seq: {
                    type: Number,
                    required: false
                },
                process: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: "ProcessMaster"
                },
                processId: {
                    type: String,
                    required: false
                },
                processName: {
                    type: String,
                    required: false
                },
                sourceOfManufacturing: {
                    type: String,
                    required: false
                },
                primaryAssetAllocation: {
                    type: String,
                    required: false
                },
                unitProcessOutput: {
                    type: String,
                    required: false
                }
            }
        ]
    },
    {
        timestamps: true,
        collection: SCHEMA_CONSTANT.COLLECTION_NAME
    }
);

SKUProcessFlowSchema.pre("save", async function (next) {
    const {isNew, isModified} = this;
    if (this.isNew) {
    }
    await auditTrail(this, this.modifiedPaths(), isNew, isModified);
    next();
});
SKUProcessFlowSchema.plugin(paginatePlugin);
const SKUProcessFlow = mongoose.model(SCHEMA_CONSTANT.COLLECTION_NAME, SKUProcessFlowSchema);

module.exports = SKUProcessFlow;
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
