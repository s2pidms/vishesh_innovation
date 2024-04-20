const mongoose = require("mongoose");
const {getIncrementNumWithPrefix} = require("../../helpers/utility");
const {CONSTANTS} = require("../../../config/config");
const {
    getAllItemCategory,
    setItemsNextAutoIncrementNo
} = require("../../controllers/v1/purchase/itemCategoryMaster/itemCategoryMaster");
const Audit = require("../../controllers/v1/settings/audit/audit");
const {ITEMS: SCHEMA_CONSTANT} = require("../../mocks/schemasConstant/purchaseConstant");
const {SCHEMA} = require("./schemas/itemSchema");
const {paginatePlugin} = require("../plugins/paginatePlugin");
const itemSchema = mongoose.Schema(SCHEMA, {
    timestamps: true,
    collection: SCHEMA_CONSTANT.COLLECTION_NAME
});

itemSchema.set("toJSON", {virtuals: true});

itemSchema.virtual("tdsFileUrl").get(function () {
    if (this.tdsFile && this.tdsFile != "undefined") {
        return CONSTANTS.domainUrl + "items/" + this.tdsFile;
    }
});
itemSchema.virtual("msdsFileUrl").get(function () {
    if (this.msdsFile && this.msdsFile != "undefined") {
        return CONSTANTS.domainUrl + "items/" + this.msdsFile;
    }
});
itemSchema.virtual("drawingUrl").get(function () {
    if (this.drawing && this.drawing != "undefined") {
        return CONSTANTS.domainUrl + "items/" + this.drawing;
    }
});

itemSchema.pre("save", async function (next) {
    const {isNew, isModified} = this;
    if (this.isNew) {
        const itemCategoryList = await getAllItemCategory(this.company);
        let category = itemCategoryList.find(x => this.itemType == x.category);
        if (!!category) {
            this.itemCode = getIncrementNumWithPrefix({
                modulePrefix: category.prefix,
                autoIncrementValue: category.nextAutoIncrement,
                digit: category.digit
            });
            await setItemsNextAutoIncrementNo(this.itemType);
        }
    }
    await auditTrail(this, this.modifiedPaths(), isNew, isModified);
    next();
});
itemSchema.index({isActive: -1});
itemSchema.plugin(paginatePlugin);
const Item = mongoose.model(SCHEMA_CONSTANT.COLLECTION_NAME, itemSchema);
module.exports = Item;
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
