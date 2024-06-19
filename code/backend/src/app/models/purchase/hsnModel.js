const mongoose = require("mongoose");
const Audit = require("../../controllers/v1/settings/audit/audit");
const {PURCHASE_HSN: SCHEMA_CONSTANT} = require("../../mocks/schemasConstant/purchaseConstant");
const {getAndSetAutoIncrementNo} = require("../../controllers/v1/settings/autoIncrement/autoIncrement");
const {paginatePlugin} = require("../plugins/paginatePlugin");
const hsnSchema = mongoose.Schema(
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
        provisionType: {
            type: String,
            required: true,
            default: "Goods"
        },
        // auto-incremented by us
        hsnMasterEntryNo: {
            type: String,
            required: false
        },
        hsnEntryDate: {
            type: String,
            required: false,
            default: new Date()
        },
        // enter tax no
        hsnCode: {
            type: String,
            required: true
        },
        isActive: {
            type: String,
            required: true,
            enum: ["Y", "N"],
            default: "Y"
        },
        goodsDescription: {
            type: String,
            required: true
        },
        gstRate: {
            type: Number,
            required: true
        },
        igstRate: {
            type: Number,
            required: true
        },
        sgstRate: {
            type: Number,
            required: true
        },
        cgstRate: {
            type: Number,
            required: true
        },
        ugstRate: {
            type: Number,
            required: true
        },
        revision: [
            {
                revisionNo: {
                    type: String,
                    required: false
                },
                revisionDate: {
                    type: Date,
                    required: false
                }
            }
        ]
        // HSNHistory: [],
    },
    {
        timestamps: true,
        collection: SCHEMA_CONSTANT.COLLECTION_NAME
    }
);

hsnSchema.pre("save", async function (next) {
    const {isNew, isModified} = this;
    if (this.isNew) {
        this.hsnMasterEntryNo = await getAndSetAutoIncrementNo(
            SCHEMA_CONSTANT.AUTO_INCREMENT_DATA(),
            this.company,
            true
        );
    }
    await auditTrail(this, this.modifiedPaths(), isNew, isModified);
    next();
});
hsnSchema.index({isActive: -1});
hsnSchema.index({hsnCode: -1});
hsnSchema.plugin(paginatePlugin);
const HSN = mongoose.model(SCHEMA_CONSTANT.COLLECTION_NAME, hsnSchema);

module.exports = HSN;
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
