const mongoose = require("mongoose");
const Audit = require("../../controllers/v1/settings/audit/audit");
const {INVENTORY_CORRECTION: SCHEMA_CONST} = require("../../mocks/schemasConstant/storesConstant");
const {SCHEMA} = require("./schemas/inventoryCorrectionSchema");
const {paginatePlugin, reportPaginatePlugin} = require("../plugins/paginatePlugin");
const inventoryCorrectionSchema = mongoose.Schema(SCHEMA, {
    timestamps: true,
    collection: SCHEMA_CONST.COLLECTION_NAME
});
inventoryCorrectionSchema.pre("save", async function (next) {
    const {isNew, isModified} = this;

    await auditTrail(this, this.modifiedPaths(), isNew, isModified);
    next();
});
inventoryCorrectionSchema.index({ICStatus: -1});
inventoryCorrectionSchema.index({ICDate: -1});
inventoryCorrectionSchema.plugin(paginatePlugin);
inventoryCorrectionSchema.plugin(reportPaginatePlugin);
const InventoryCorrection = mongoose.model(SCHEMA_CONST.COLLECTION_NAME, inventoryCorrectionSchema);

module.exports = InventoryCorrection;
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
