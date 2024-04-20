const mongoose = require("mongoose");
const Audit = require("../../controllers/v1/settings/audit/audit");
const {GOOD_INWARD_ENTRY: SCHEMA_CONST} = require("../../mocks/schemasConstant/storesConstant");
const {getAndSetAutoIncrementNo} = require("../../controllers/v1/settings/autoIncrement/autoIncrement");
const {SCHEMA} = require("./schemas/goodInwardEntrySchema");
const {paginatePlugin} = require("../plugins/paginatePlugin");
const goodInwardEntrySchema = mongoose.Schema(SCHEMA, {
    timestamps: true,
    collection: SCHEMA_CONST.COLLECTION_NAME
});
goodInwardEntrySchema.pre("save", async function (next) {
    const {isNew, isModified} = this;

    if (this.isNew) {
        this.GINNumber =
            this.GINNumber != "0000000"
                ? await getAndSetAutoIncrementNo({...SCHEMA_CONST.AUTO_INCREMENT_DATA()}, this.company, true)
                : 0;
    }
    await auditTrail(this, this.modifiedPaths(), isNew, isModified);

    next();
});
goodInwardEntrySchema.index({GINStatus: -1});
goodInwardEntrySchema.index({GINDate: -1});
goodInwardEntrySchema.plugin(paginatePlugin);
const GoodInwardEntry = mongoose.model(SCHEMA_CONST.COLLECTION_NAME, goodInwardEntrySchema);

module.exports = GoodInwardEntry;
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
