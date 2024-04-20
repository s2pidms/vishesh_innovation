const mongoose = require("mongoose");
const {CONSTANTS} = require("../../../config/config");
const {getAndSetAutoIncrementNo} = require("../../controllers/v1/settings/autoIncrement/autoIncrement");
const Audit = require("../../controllers/v1/settings/audit/audit");
const {CAPITAL_GOODS_CGM: SCHEMA_CONSTANT} = require("../../mocks/schemasConstant/purchaseConstant");
const {SCHEMA} = require("./schemas/CGMSchema");
const {paginatePlugin} = require("../plugins/paginatePlugin");

const cgmSchema = mongoose.Schema(SCHEMA, {
    timestamps: true,
    collection: SCHEMA_CONSTANT.COLLECTION_NAME
});
cgmSchema.set("toJSON", {virtuals: true});

cgmSchema.virtual("technicalSheetFileUrl").get(function () {
    if (this.technicalSheetFile && this.technicalSheetFile != "undefined") {
        return CONSTANTS.domainUrl + "technicalSheet/" + this.technicalSheetFile;
    }
});
cgmSchema.pre("save", async function (next) {
    const {isNew, isModified} = this;
    if (this.isNew) {
        this.capitalGoodsNo = await getAndSetAutoIncrementNo(SCHEMA_CONSTANT.AUTO_INCREMENT_DATA(), this.company, true);
    }
    await auditTrail(this, this.modifiedPaths(), isNew, isModified);
    next();
});
cgmSchema.plugin(paginatePlugin);
const CapitalGoods = mongoose.model(SCHEMA_CONSTANT.COLLECTION_NAME, cgmSchema);

module.exports = CapitalGoods;
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
