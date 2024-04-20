const mongoose = require("mongoose");
const {findAppParameterValue} = require("../../controllers/v1/settings/appParameter/appParameter");
const Audit = require("../../controllers/v1/settings/audit/audit");
const {NPD_REVIEW: SCHEMA_CONST} = require("../../mocks/schemasConstant/businessLeadsConstant");
const {getAndSetAutoIncrementNo} = require("../../controllers/v1/settings/autoIncrement/autoIncrement");
const {SCHEMA} = require("./schemas/NPDReviewSchema");
const {paginatePlugin} = require("../plugins/paginatePlugin");
const NPDReviewSchema = mongoose.Schema(SCHEMA, {
    timestamps: true,
    collection: SCHEMA_CONST.COLLECTION_NAME
});
NPDReviewSchema.pre("save", async function (next) {
    const {isNew, isModified} = this;
    if (this.isNew) {
        this.NPDReviewNo = await getAndSetAutoIncrementNo({...SCHEMA_CONST.AUTO_INCREMENT_DATA()}, this.company, true);
    }
    await auditTrail(this, this.modifiedPaths(), isNew, isModified);
    next();
});
NPDReviewSchema.index({status: -1});
NPDReviewSchema.index({isReportGenerated: -1});
NPDReviewSchema.plugin(paginatePlugin);
const NPDReview = mongoose.model(SCHEMA_CONST.COLLECTION_NAME, NPDReviewSchema);

module.exports = NPDReview;
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
