const mongoose = require("mongoose");
const Audit = require("../../controllers/v1/settings/audit/audit");
const {DIRECT_COST_DSKU: SCHEMA_CONST} = require("../../mocks/schemasConstant/businessLeadsConstant");
const {getAndSetAutoIncrementNo} = require("../../controllers/v1/settings/autoIncrement/autoIncrement");
const {SCHEMA} = require("./schemas/directCostDSKUSchema");
const {paginatePlugin} = require("../plugins/paginatePlugin");
const directCostDSKUSchema = mongoose.Schema(SCHEMA, {
    timestamps: true,
    collection: SCHEMA_CONST.COLLECTION_NAME
});

directCostDSKUSchema.pre("save", async function (next) {
    const {isNew, isModified} = this;
    if (this.isNew) {
        this.directCostNo = await getAndSetAutoIncrementNo({...SCHEMA_CONST.AUTO_INCREMENT_DATA()}, this.company, true);
    }
    await auditTrail(this, this.modifiedPaths(), isNew, isModified);
    next();
});
directCostDSKUSchema.plugin(paginatePlugin);
directCostDSKUSchema.index({DSKU: -1});
const DirectCostDSKU = mongoose.model(SCHEMA_CONST.COLLECTION_NAME, directCostDSKUSchema);

module.exports = DirectCostDSKU;

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
