const mongoose = require("mongoose");
const Audit = require("../../controllers/v1/settings/audit/audit");
const {SCREEN_PRINTING_LOG: SCHEMA_CONSTANT} = require("../../mocks/schemasConstant/productionConstant");
const {paginatePlugin} = require("../plugins/paginatePlugin");
const { setTwoDecimal } = require("../../helpers/utility");
const screenPrintingLogSchema = mongoose.Schema(
    {
        company: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
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
        jobCard: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "JobCardCreation"
        },
        jobCardNo: {
            type: String,
            required: false
        },
        SKU: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "SKUMaster"
        },
        SKUNo: {
            type: String,
            required: false
        },
        SKUName: {
            type: String,
            required: false
        },
        SKUDescription: {
            type: String,
            required: false
        },
        screenPrintingLogDetails: [
            {
                SN: {
                    type: Number,
                    required: false
                },
                ink: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: "InkMaster"
                },
                colourCode: {
                    type: String,
                    required: false
                },
                colourName: {
                    type: String,
                    required: false
                },
                colourDescription: {
                    type: String,
                    required: false
                },
                mesh: {
                    type: String,
                    required: false
                },
                machine: {
                    type: String,
                    required: false
                },
                ptgPass: {
                    type: Number,
                    set: value => setTwoDecimal(value),
                    required: false
                },
                SQGPerSH: {
                    type: Number,
                    set: value => setTwoDecimal(value),
                    required: false
                },
                deltaE: {
                    type: Number,
                    set: value => setTwoDecimal(value),
                    required: false
                },
                logDetails: {
                    prodSource: {
                        type: String,
                        required: false
                    },
                    prodDate: {
                        type: Date,
                        required: false
                    },
                    prodShift: {
                        type: String,
                        required: false
                    },
                    operatingStaff: {
                        type: String,
                        required: false
                    },
                    remarks: {
                        type: String,
                        required: false
                    },
                    authorizedBy: {
                        type: String,
                        required: false
                    }
                },
                status: {
                    type: Boolean,
                    required: false
                }
            }
        ]
    },
    {
        timestamps: true,
        collection: SCHEMA_CONSTANT.COLLECTION_NAME
    }
);

screenPrintingLogSchema.pre("save", async function (next) {
    const {isNew, isModified} = this;
    await auditTrail(this, this.modifiedPaths(), isNew, isModified);
    next();
});
screenPrintingLogSchema.plugin(paginatePlugin);
const screenPrintingLog = mongoose.model(SCHEMA_CONSTANT.COLLECTION_NAME, screenPrintingLogSchema);

module.exports = screenPrintingLog;
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
