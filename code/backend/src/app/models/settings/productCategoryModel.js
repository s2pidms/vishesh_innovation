const mongoose = require("mongoose");
const Audit = require("../../controllers/v1/settings/audit/audit");
const {PRODUCT_CATEGORY: SCHEMA_CONST} = require("../../mocks/schemasConstant/settingsConstant");
const {SCHEMA} = require("./schemas/productCategorySchema");
const {paginatePlugin} = require("../plugins/paginatePlugin");
const productCategorySchema = mongoose.Schema(SCHEMA, {
    timestamps: true,
    collection: SCHEMA_CONST.COLLECTION_NAME
});
productCategorySchema.pre("save", async function (next) {
    const {isNew, isModified} = this;
  
    await auditTrail(this, this.modifiedPaths(), isNew, isModified);
    next();
});
productCategorySchema.plugin(paginatePlugin);
const ProcessNameMaster = mongoose.model(SCHEMA_CONST.COLLECTION_NAME, productCategorySchema);

module.exports = ProcessNameMaster;
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
