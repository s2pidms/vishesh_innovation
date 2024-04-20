const mongoose = require("mongoose");
const Audit = require("../../controllers/v1/settings/audit/audit");
const {DEBIT_NOTE: SCHEMA_CONSTANT} = require("../../mocks/schemasConstant/purchaseConstant");
const {getAndSetAutoIncrementNo} = require("../../controllers/v1/settings/autoIncrement/autoIncrement");
const {SCHEMA} = require("./schemas/debitNoteSchema");
const {paginatePlugin, reportPaginatePlugin} = require("../plugins/paginatePlugin");

const debitNoteSchema = mongoose.Schema(SCHEMA, {
    timestamps: true,
    collection: SCHEMA_CONSTANT.COLLECTION_NAME
});

debitNoteSchema.pre("save", async function (next) {
    const {isNew, isModified} = this;

    if (this.isNew) {
        this.DNNumber = await getAndSetAutoIncrementNo({...SCHEMA_CONSTANT.AUTO_INCREMENT_DATA()}, this.company, true);
    }
    await auditTrail(this, this.modifiedPaths(), isNew, isModified);
    next();
});
debitNoteSchema.index({DNStatus: -1});
debitNoteSchema.index({DNDate: -1});
debitNoteSchema.plugin(paginatePlugin);
debitNoteSchema.plugin(reportPaginatePlugin);
const DebitNote = mongoose.model(SCHEMA_CONSTANT.COLLECTION_NAME, debitNoteSchema);

module.exports = DebitNote;
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
