const mongoose = require("mongoose");
const Audit = require("../../controllers/v1/settings/audit/audit");
const {BOM_DSKU: SCHEMA_CONST} = require("../../mocks/schemasConstant/businessLeadsConstant");
const {getAndSetAutoIncrementNo} = require("../../controllers/v1/settings/autoIncrement/autoIncrement");
const {SCHEMA} = require("./schemas/BOMOfDSKUSchema");
const {paginatePlugin} = require("../plugins/paginatePlugin");
const BoMOfDSKUSchema = mongoose.Schema(SCHEMA, {
    timestamps: true,
    collection: SCHEMA_CONST.COLLECTION_NAME
});

BoMOfDSKUSchema.pre("save", async function (next) {
    const {isNew, isModified} = this;
    if (this.isNew) {
        this.BOMNo = await getAndSetAutoIncrementNo({...SCHEMA_CONST.AUTO_INCREMENT_DATA()}, this.company, true);
    }
    await auditTrail(this, this.modifiedPaths(), isNew, isModified);
    next();
});
BoMOfDSKUSchema.plugin(paginatePlugin);
BoMOfDSKUSchema.index({SKU: -1});
const BoMOfDSKU = mongoose.model(SCHEMA_CONST.COLLECTION_NAME, BoMOfDSKUSchema);

module.exports = BoMOfDSKU;
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
