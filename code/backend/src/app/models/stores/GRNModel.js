const mongoose = require("mongoose");
const Audit = require("../../controllers/v1/settings/audit/audit");
const {GOODS_RECEIPT_NOTE: SCHEMA_CONST} = require("../../mocks/schemasConstant/storesConstant");
const {getAndSetAutoIncrementNo} = require("../../controllers/v1/settings/autoIncrement/autoIncrement");
const {SCHEMA} = require("./schemas/GRNSchema");
const {paginatePlugin} = require("../plugins/paginatePlugin");
const GRNSchema = mongoose.Schema(SCHEMA, {
    timestamps: true,
    collection: SCHEMA_CONST.COLLECTION_NAME
});

GRNSchema.pre("save", async function (next) {
    const {isNew, isModified} = this;
    if (this.isNew) {
        this.GRNNumber =
            this.GRNNumber != "0000000"
                ? await getAndSetAutoIncrementNo({...SCHEMA_CONST.AUTO_INCREMENT_DATA()}, this.company, true)
                : 0;
    }
    await auditTrail(this, this.modifiedPaths(), isNew, isModified);
    next();
});
GRNSchema.index({GRNStatus: -1});
GRNSchema.index({GRNDate: -1});
GRNSchema.plugin(paginatePlugin);
const GRN = mongoose.model(SCHEMA_CONST.COLLECTION_NAME, GRNSchema);

module.exports = GRN;
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
