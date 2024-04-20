const mongoose = require("mongoose");
const Audit = require("../../controllers/v1/settings/audit/audit");
const {SUPPLIER_RULE: SCHEMA_CONSTANT} = require("../../mocks/schemasConstant/purchaseConstant");
const {SCHEMA} = require("./schemas/supplierRuleSchema");
const {paginatePlugin} = require("../plugins/paginatePlugin");
const supplierRuleSchema = mongoose.Schema(SCHEMA, {
    timestamps: true,
    collection: SCHEMA_CONSTANT.COLLECTION_NAME
});

supplierRuleSchema.pre("save", async function (next) {
    const {isNew, isModified} = this;

    await auditTrail(this, this.modifiedPaths(), isNew, isModified);
    next();
});
supplierRuleSchema.index({enabled: -1});
supplierRuleSchema.plugin(paginatePlugin);
const SupplierRule = mongoose.model(SCHEMA_CONSTANT.COLLECTION_NAME, supplierRuleSchema);

module.exports = SupplierRule;
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
