const mongoose = require("mongoose");
const Audit = require("../../controllers/v1/settings/audit/audit");
const {CONSTANTS} = require("../../../config/config");
const {NPD_REQUEST: SCHEMA_CONST} = require("../../mocks/schemasConstant/businessLeadsConstant");
const {getAndSetAutoIncrementNo} = require("../../controllers/v1/settings/autoIncrement/autoIncrement");
const {SCHEMA} = require("./schemas/NPDSchema");
const {paginatePlugin} = require("../plugins/paginatePlugin");
const NPDSchema = mongoose.Schema(SCHEMA, {
    timestamps: true,
    collection: SCHEMA_CONST.COLLECTION_NAME
});
NPDSchema.set("toJSON", {virtuals: true});

NPDSchema.virtual("engineeringDrawingUrl").get(function () {
    if (this.engineeringDrawing && this.engineeringDrawing != "undefined") {
        return CONSTANTS.domainUrl + "NPDRequest/" + this.engineeringDrawing;
    }
});
NPDSchema.virtual("productSpecificationUrl").get(function () {
    if (this.productSpecification && this.productSpecification != "undefined") {
        return CONSTANTS.domainUrl + "NPDRequest/" + this.productSpecification;
    }
});
NPDSchema.virtual("designMockUpFileUrl").get(function () {
    if (this.designMockUpFile && this.designMockUpFile != "undefined") {
        return CONSTANTS.domainUrl + "NPDRequest/" + this.designMockUpFile;
    }
});
NPDSchema.virtual("artworkForProcessingFileUrl").get(function () {
    if (this.artworkForProcessingFile && this.artworkForProcessingFile != "undefined") {
        return CONSTANTS.domainUrl + "NPDRequest/" + this.artworkForProcessingFile;
    }
});
NPDSchema.pre("save", async function (next) {
    const {isNew, isModified} = this;
    if (this.isNew) {
        this.NPDNo = await getAndSetAutoIncrementNo({...SCHEMA_CONST.AUTO_INCREMENT_DATA()}, this.company, true);
    }
    await auditTrail(this, this.modifiedPaths(), isNew, isModified);
    next();
});
NPDSchema.plugin(paginatePlugin);
NPDSchema.index({referenceModel: -1});
NPDSchema.index({status: -1});
NPDSchema.index({NPDDate: -1});
const NPD = mongoose.model(SCHEMA_CONST.COLLECTION_NAME, NPDSchema);

module.exports = NPD;
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
