const mongoose = require("mongoose");
const {getAutoIncrementNumber} = require("../../helpers/utility");
const Audit = require("../../controllers/v1/settings/audit/audit");
const {
    getAllPurchaseCategory,
    setPurchaseNextAutoIncrementNo
} = require("../../controllers/v1/settings/purchaseCategoryMaster/purchaseCategoryMaster");
const {PURCHASE_ORDER: SCHEMA_CONSTANT} = require("../../mocks/schemasConstant/purchaseConstant");
const {getAndSetAutoIncrementNo} = require("../../controllers/v1/settings/autoIncrement/autoIncrement");
const {SCHEMA} = require("./schemas/purchaseOrderSchema");
const {paginatePlugin, reportPaginatePlugin} = require("../plugins/paginatePlugin");
const newPurchaseOrderSchema = mongoose.Schema(SCHEMA, {
    timestamps: true,
    collection: SCHEMA_CONSTANT.COLLECTION_NAME
});

newPurchaseOrderSchema.pre("save", async function (next) {
    const {isNew, isModified} = this;
    if (this.isNew && !this.PONumber.includes("PO/S")) {
        const purchaseCategoryList = await getAllPurchaseCategory(this.company, this.purchaseCategory);
        if (!!purchaseCategoryList && purchaseCategoryList.length > 0) {
            this.PONumber = getAutoIncrementNumber(
                purchaseCategoryList[0].prefix,
                "",
                this.PONumber != "0000000" ? purchaseCategoryList[0].nextAutoIncrement : 0,
                purchaseCategoryList[0].digit
            );
            if (this.PONumber != "0000000") {
                await setPurchaseNextAutoIncrementNo(this.purchaseCategory);
            }
        } else {
            this.PONumber =
                this.PONumber != "0000000"
                    ? await getAndSetAutoIncrementNo({...SCHEMA_CONSTANT.AUTO_INCREMENT_DATA()}, this.company, true)
                    : 0;
        }
    }
    await auditTrail(this, this.modifiedPaths(), isNew, isModified);
    next();
});
newPurchaseOrderSchema.index({POStatus: -1});
newPurchaseOrderSchema.index({PODate: -1});
newPurchaseOrderSchema.plugin(paginatePlugin);
newPurchaseOrderSchema.plugin(reportPaginatePlugin);
const PurchaseOrder = mongoose.model(SCHEMA_CONSTANT.COLLECTION_NAME, newPurchaseOrderSchema);

module.exports = PurchaseOrder;
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
