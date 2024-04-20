const mongoose = require("mongoose");
const Audit = require("../../controllers/v1/settings/audit/audit");
const {FGIN_SCHEMA: SCHEMA_CONST} = require("../../mocks/schemasConstant/storesConstant");
const {getAndSetAutoIncrementNo} = require("../../controllers/v1/settings/autoIncrement/autoIncrement");
const {SCHEMA} = require("./schemas/FGINSchema");
const {paginatePlugin, reportPaginatePlugin} = require("../plugins/paginatePlugin");
const finishedGoodsInwardEntrySchema = mongoose.Schema(SCHEMA, {
    timestamps: true,
    collection: SCHEMA_CONST.COLLECTION_NAME
});
finishedGoodsInwardEntrySchema.pre("save", async function (next) {
    const {isNew, isModified} = this;
    if (this.isNew) {
        this.FGINNo = await getAndSetAutoIncrementNo({...SCHEMA_CONST.AUTO_INCREMENT_DATA()}, this.company, true);
    }
    await auditTrail(this, this.modifiedPaths(), isNew, isModified);
    next();
});
finishedGoodsInwardEntrySchema.index({SKUId: -1});
finishedGoodsInwardEntrySchema.index({FGINDate: -1});
finishedGoodsInwardEntrySchema.plugin(paginatePlugin);
finishedGoodsInwardEntrySchema.plugin(reportPaginatePlugin);
const FGIN = mongoose.model(SCHEMA_CONST.COLLECTION_NAME, finishedGoodsInwardEntrySchema);

module.exports = FGIN;
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
