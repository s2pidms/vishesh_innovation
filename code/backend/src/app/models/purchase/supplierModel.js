const mongoose = require("mongoose");
const {getAndSetAutoIncrementNo} = require("../../controllers/v1/settings/autoIncrement/autoIncrement");
const {CONSTANTS} = require("../../../config/config");
const Audit = require("../../controllers/v1/settings/audit/audit");
const {SUPPLIER: SCHEMA_CONSTANT} = require("../../mocks/schemasConstant/purchaseConstant");
const {SCHEMA} = require("./schemas/supplierSchema");
const {paginatePlugin} = require("../plugins/paginatePlugin");
const supplierSchema = mongoose.Schema(SCHEMA, {
    timestamps: true,
    collection: SCHEMA_CONSTANT.COLLECTION_NAME
});

supplierSchema.set("toJSON", {virtuals: true});
supplierSchema.virtual("cpaFileUrl").get(function () {
    if (this.cpaFile && this.cpaFile != "undefined") {
        return CONSTANTS.domainUrl + "supplier/" + this.cpaFile;
    }
});

supplierSchema.pre("save", async function (next) {
    const {isNew, isModified} = this;
    if (this.isNew) {
        this.supplierCode = await getAndSetAutoIncrementNo(SCHEMA_CONSTANT.AUTO_INCREMENT_DATA(), this.company, true);
    }
    await auditTrail(this, this.modifiedPaths(), isNew, isModified);
    next();
});
supplierSchema.index({isSupplierActive: -1});
supplierSchema.plugin(paginatePlugin);
const Supplier = mongoose.model(SCHEMA_CONSTANT.COLLECTION_NAME, supplierSchema);

module.exports = Supplier;
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
