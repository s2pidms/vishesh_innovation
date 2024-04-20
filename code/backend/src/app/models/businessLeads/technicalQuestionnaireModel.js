const mongoose = require("mongoose");
const Audit = require("../../controllers/v1/settings/audit/audit");
const {TECHNICAL_QUESTIONNAIRE: SCHEMA_CONST} = require("../../mocks/schemasConstant/businessLeadsConstant");
const {SCHEMA} = require("./schemas/technicalQuestionnaireSchema");
const {paginatePlugin} = require("../plugins/paginatePlugin");
const technicalQuestionnaireSchema = mongoose.Schema(SCHEMA, {
    timestamps: true,
    collection: SCHEMA_CONST.COLLECTION_NAME
});

technicalQuestionnaireSchema.pre("save", async function (next) {
    const {isNew, isModified} = this;
    await auditTrail(this, this.modifiedPaths(), isNew, isModified);
    next();
});
technicalQuestionnaireSchema.plugin(paginatePlugin);
const TechnicalQuestionnaire = mongoose.model(SCHEMA_CONST.COLLECTION_NAME, technicalQuestionnaireSchema);

module.exports = TechnicalQuestionnaire;
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
