const mongoose = require("mongoose");
const Audit = require("../../controllers/v1/settings/audit/audit");
const {OPTIONS} = require("../../helpers/global.options");
const {MODULE_MASTER: SCHEMA_CONST} = require("../../mocks/schemasConstant/settingsConstant");
const {paginatePlugin} = require("../plugins/paginatePlugin");
const moduleMasterSchema = mongoose.Schema(
    {
        company: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Company"
        },
        type: {
            type: String,
            required: false
        },
        parameterName: {
            type: String,
            required: true,
            trim: true
        },
        parameterLabel: {
            type: String,
            required: true,
            trim: true
        },
        order: {
            type: Number,
            required: false
        },
        status: {
            type: String,
            required: false,
            enum: OPTIONS.defaultStatus.getCommonStatusAsArray(),
            default: OPTIONS.defaultStatus.ACTIVE
        }
    },
    {
        timestamps: true,
        versionKey: false,
        collection: SCHEMA_CONST.COLLECTION_NAME
    }
);
moduleMasterSchema.plugin(paginatePlugin);
moduleMasterSchema.pre("save", async function (next) {
    const {isNew, isModified} = this;
    await auditTrail(this, this.modifiedPaths(), isNew, isModified);
    next();
});
const ModuleMaster = mongoose.model(SCHEMA_CONST.COLLECTION_NAME, moduleMasterSchema);

module.exports = ModuleMaster;
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
