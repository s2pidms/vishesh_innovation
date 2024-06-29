const mongoose = require("mongoose");
const Audit = require("../../controllers/v1/settings/audit/audit");
const {PROCESS_LIST_CONFIGURATION: SCHEMA_CONSTANT} = require("../../mocks/schemasConstant/settingsConstant");
const {paginatePlugin} = require("../plugins/paginatePlugin");
const processListConfigSchema = mongoose.Schema(
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
        SN: {
            type: Number,
            required: false
        },
        processName: {
            type: String,
            required: false
        },
        source: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true,
        collection: SCHEMA_CONSTANT.COLLECTION_NAME
    }
);

processListConfigSchema.pre("save", async function (next) {
    const {isNew, isModified} = this;
    await auditTrail(this, this.modifiedPaths(), isNew, isModified);
    next();
});
processListConfigSchema.plugin(paginatePlugin);
const processListConfiguration = mongoose.model(SCHEMA_CONSTANT.COLLECTION_NAME, processListConfigSchema);

module.exports = processListConfiguration;
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
