const mongoose = require("mongoose");
const Audit = require("../../controllers/v1/settings/audit/audit");
const {ITEM_CATEGORY: SCHEMA_CONSTANT} = require("../../mocks/schemasConstant/purchaseConstant");
const {SCHEMA} = require("./schemas/itemCategorySchema");
const {paginatePlugin} = require("../plugins/paginatePlugin");
const itemCategorySchema = mongoose.Schema(SCHEMA, {
    timestamps: true,
    collection: SCHEMA_CONSTANT.COLLECTION_NAME
});

itemCategorySchema.pre("save", async function (next) {
    const {isNew, isModified} = this;

    await auditTrail(this, this.modifiedPaths(), isNew, isModified);
    next();
});
itemCategorySchema.index({categoryStatus: -1});
itemCategorySchema.plugin(paginatePlugin);
const ItemCategory = mongoose.model(SCHEMA_CONSTANT.COLLECTION_NAME, itemCategorySchema);

module.exports = ItemCategory;
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
