const mongoose = require("mongoose");
const Audit = require("../../controllers/v1/settings/audit/audit");
const {PAID_HOLIDAY: SCHEMA_CONST} = require("../../mocks/schemasConstant/HRConstant");
const {paginatePlugin} = require("../plugins/paginatePlugin");
const holidaySchema = mongoose.Schema(
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
        serialNumber: {
            type: Number,
            set: value => {
                if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                    return parseFloat(value).toFixed(2);
                }
            },
            required: true
        },
        holidayName: {
            type: String,
            required: true
        },
        holidayDate: {
            type: Date,
            required: true
        },
        holidayDay: {
            type: String,
            required: false
        },
        holidayLocation: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true,
        collection: SCHEMA_CONST.COLLECTION_NAME
    }
);

holidaySchema.pre("save", async function (next) {
    const {isNew, isModified} = this;

    await auditTrail(this, this.modifiedPaths(), isNew, isModified);
    next();
});
holidaySchema.plugin(paginatePlugin);
const PaidHoliday = mongoose.model(SCHEMA_CONST.COLLECTION_NAME, holidaySchema);

module.exports = PaidHoliday;
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
