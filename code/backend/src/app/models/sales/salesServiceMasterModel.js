const mongoose = require("mongoose");
const Audit = require("../../controllers/v1/settings/audit/audit");
const {SALES_SERVICE_MASTER: SCHEMA_CONST} = require("../../mocks/schemasConstant/salesConstant");
const {getAndSetAutoIncrementNo} = require("../../controllers/v1/settings/autoIncrement/autoIncrement");
const {paginatePlugin} = require("../plugins/paginatePlugin");
const salesServiceMasterSchema = mongoose.Schema(
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
        serviceCode: {
            type: String,
            required: false
        },
        serviceDescription: {
            type: String,
            required: true
        },
        unit: {
            type: String,
            required: false
        },
        sacId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "SaleSAC"
        },
        sacCode: {
            type: String,
            required: false
        },
        isActive: {
            type: String,
            required: true,
            enum: ["Yes", "No"],
            default: "Yes"
        },
        servicePrice: {
            type: String,
            set: value => {
                if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                    return parseFloat(value).toFixed(2);
                }
            },
            required: false,
            default: 0
        },
        gst: {
            type: Number,
            set: value => {
                if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                    return parseFloat(value).toFixed(2);
                }
            },
            required: false
        },
        igst: {
            type: Number,
            set: value => {
                if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                    return parseFloat(value).toFixed(2);
                }
            },
            required: false
        },
        sgst: {
            type: Number,
            set: value => {
                if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                    return parseFloat(value).toFixed(2);
                }
            },
            required: false
        },
        cgst: {
            type: Number,
            set: value => {
                if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                    return parseFloat(value).toFixed(2);
                }
            },
            required: false
        }
    },
    {
        collection: SCHEMA_CONST.COLLECTION_NAME,
        timestamps: true
    }
);
salesServiceMasterSchema.pre("save", async function (next) {
    const {isNew, isModified} = this;
    if (this.isNew) {
        this.serviceCode = await getAndSetAutoIncrementNo({...SCHEMA_CONST.AUTO_INCREMENT_DATA()}, this.company, true);
    }
    await auditTrail(this, this.modifiedPaths(), isNew, isModified);
    next();
});
salesServiceMasterSchema.index({isActive: -1});
salesServiceMasterSchema.plugin(paginatePlugin);
const SalesServiceMaster = mongoose.model("SalesServiceMaster", salesServiceMasterSchema);

module.exports = SalesServiceMaster;
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
