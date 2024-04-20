const mongoose = require("mongoose");
const Audit = require("../../controllers/v1/settings/audit/audit");
const {PURCHASE_SAC: SCHEMA_CONSTANT} = require("../../mocks/schemasConstant/purchaseConstant");
const {getAndSetAutoIncrementNo} = require("../../controllers/v1/settings/autoIncrement/autoIncrement");
const {SCHEMA} = require("./schemas/SACSchema");
const {paginatePlugin} = require("../plugins/paginatePlugin");
const sacSchema = mongoose.Schema(SCHEMA, {
    timestamps: true,
    collection: SCHEMA_CONSTANT.COLLECTION_NAME
});

sacSchema.pre("save", async function (next) {
    const {isNew, isModified} = this;
    if (this.isNew) {
        this.sacMasterEntryNo =
            this.sacMasterEntryNo != "SAC0000"
                ? await getAndSetAutoIncrementNo(SCHEMA_CONSTANT.AUTO_INCREMENT_DATA(), this.company, true)
                : "SAC0000";
    }
    await auditTrail(this, this.modifiedPaths(), isNew, isModified);
    next();
});
sacSchema.index({isActive: -1});
sacSchema.plugin(paginatePlugin);
const SAC = mongoose.model(SCHEMA_CONSTANT.COLLECTION_NAME, sacSchema);

module.exports = SAC;
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
