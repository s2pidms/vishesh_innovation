const mongoose = require("mongoose");
const {
    getAllESPCategory,
    setESPNextAutoIncrementNo
} = require("../../controllers/v1/settings/ESPCategoryMaster/ESPCategoryMaster");
const {getIncrementNumWithPrefix} = require("../../helpers/utility");
const Audit = require("../../controllers/v1/settings/audit/audit");
const {EXTERNAL_SERVICE_PROVIDER: SCHEMA_CONSTANT} = require("../../mocks/schemasConstant/purchaseConstant");
const {SCHEMA} = require("./schemas/externalServiceProviderSchema");
const {paginatePlugin} = require("../plugins/paginatePlugin");
const externalServiceProviderSchema = mongoose.Schema(SCHEMA, {
    timestamps: true,
    collection: SCHEMA_CONSTANT.COLLECTION_NAME
});

externalServiceProviderSchema.pre("save", async function (next) {
    const {isNew, isModified} = this;
    if (this.isNew) {
        const ESPCategoryList = await getAllESPCategory(this.company);
        let category = ESPCategoryList.find(x => this.ESPCategory == x.category);
        if (!!category) {
            this.ESPCode = getIncrementNumWithPrefix({
                modulePrefix: category.prefix,
                autoIncrementValue: category.nextAutoIncrement,
                digit: category.digit
            });
            await setESPNextAutoIncrementNo(this.ESPCategory);
        }
    }
    await auditTrail(this, this.modifiedPaths(), isNew, isModified);
    next();
});
externalServiceProviderSchema.index({isESPActive: -1});
externalServiceProviderSchema.plugin(paginatePlugin);
const ExternalServiceProvider = mongoose.model(SCHEMA_CONSTANT.COLLECTION_NAME, externalServiceProviderSchema);

module.exports = ExternalServiceProvider;
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
