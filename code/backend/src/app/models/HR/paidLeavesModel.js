const mongoose = require("mongoose");
const Audit = require("../../controllers/v1/settings/audit/audit");
const {PAID_LEAVES: SCHEMA_CONST} = require("../../mocks/schemasConstant/HRConstant");
const {getAndSetAutoIncrementNo} = require("../../controllers/v1/settings/autoIncrement/autoIncrement");
const {paginatePlugin} = require("../plugins/paginatePlugin");
const paidLeavesSchema = mongoose.Schema(
    {
        company: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Company"
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "User"
        },
        updatedBy: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "User"
        },
        paidLeavesNumber: {
            type: String,
            required: true
        },
        employeeId: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "Employee"
        },
        dateOfJoining: {
            type: Date,
            required: true
        },
        calendarYear: {
            type: String,
            required: true
        },
        casualLeaveCL: {
            type: Number,
            required: false
        },
        sickLeaveSL: {
            type: Number,
            required: false
        },
        privilegeLeavePL: {
            type: Number,
            required: false
        },
        totalSickLeaveSL: {
            type: String,
            required: false
        },
        totalCasualLeaveCL: {
            type: String,
            required: false
        },
        totalPrivilegeLeavePL: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true,
        collection: SCHEMA_CONST.COLLECTION_NAME
    }
);

paidLeavesSchema.pre("save", async function (next) {
    const {isNew, isModified} = this;

    if (this.isNew) {
        this.paidLeavesNumber = await getAndSetAutoIncrementNo(SCHEMA_CONST.AUTO_INCREMENT_DATA(), this.company, true);
    }
    await auditTrail(this, this.modifiedPaths(), isNew, isModified);
    next();
});
paidLeavesSchema.plugin(paginatePlugin);
const PaidLeaves = mongoose.model(SCHEMA_CONST.COLLECTION_NAME, paidLeavesSchema);

module.exports = PaidLeaves;
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
