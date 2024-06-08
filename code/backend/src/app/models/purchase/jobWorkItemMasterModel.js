const mongoose = require("mongoose");
const Audit = require("../../controllers/v1/settings/audit/audit");
const {JOB_WORK_ITEM_MASTER: SCHEMA_CONSTANT} = require("../../mocks/schemasConstant/purchaseConstant");
const {paginatePlugin} = require("../plugins/paginatePlugin");
const {OPTIONS} = require("../../helpers/global.options");
const {setTwoDecimal, getIncrementNumWithPrefix} = require("../../helpers/utility");
const {filteredItemCategoryList} = require("./repository/itemCategoryRepository");
const {setItemsNextAutoIncrementNo} = require("../../controllers/v1/purchase/itemCategoryMaster/itemCategoryMaster");
const jobWorkItemMasterSchema = mongoose.Schema(
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
        itemCategory: {
            type: String,
            required: false
        },
        jobWorkItemCode: {
            type: String,
            required: false
        },
        jobWorkItemName: {
            type: String,
            required: false
        },
        jobWorkItemDescription: {
            type: String,
            required: false
        },
        primaryUnit: {
            type: String,
            required: false
        },
        secondaryUnit: {
            type: String,
            required: false
        },
        conversionFactor: {
            type: Number,
            required: false
        },
        primaryToSecondaryConversion: {
            type: Number,
            required: false
        },
        secondaryToPrimaryConversion: {
            type: Number,
            required: false
        },
        conversionOfUnits: {
            type: String,
            required: false
        },
        orderInfoUOM: {
            type: String,
            required: false
        },
        unitConversionFlag: {
            type: Number,
            required: false
        },
        dualUnitsDimensionsDetails: {
            type: {
                type: String,
                required: false
            },
            width: {
                type: Number,
                required: false
            },
            length: {
                type: Number,
                required: false
            },
            widthUnit: {
                type: String,
                required: false
            },
            lengthUnit: {
                type: String,
                required: false
            },
            widthInMM: {
                type: Number,
                required: false
            },
            lengthInM: {
                type: Number,
                required: false
            },
            sqmPerRoll: {
                type: Number,
                required: false
            }
        },
        HSN: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "HSN"
        },
        HSNCode: {
            type: Number,
            required: false
        },
        gst: {
            type: Number,
            required: false,
            default: 0
        },
        igst: {
            type: Number,
            required: false,
            default: 0
        },
        cgst: {
            type: Number,
            required: false,
            default: 0
        },
        sgst: {
            type: Number,
            required: false,
            default: 0
        },
        ugst: {
            type: Number,
            required: false,
            default: 0
        },
        shelfLife: {
            type: Number,
            required: false
        },
        QCLevels: {
            type: String,
            required: false
        },
        status: {
            type: String,
            required: false,
            enum: OPTIONS.defaultStatus.getCommonStatusAsArray(),
            default: OPTIONS.defaultStatus.ACTIVE
        },
        jobWorkerDetails: [
            {
                jobWorker: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: false,
                    ref: "JobWorkerMaster"
                },
                jobWorkerName: {
                    type: String,
                    required: false
                },
                currency: {
                    type: String,
                    required: false
                },
                partNo: {
                    type: String,
                    required: false
                },
                partName: {
                    type: String,
                    required: false
                },
                uom1: {
                    type: String,
                    required: false
                },
                uom2: {
                    type: String,
                    required: false
                },
                stdCostUom1: {
                    type: Number,
                    set: value => setTwoDecimal(value, 3),
                    required: false,
                    default: 0
                },
                stdCostUom2: {
                    type: Number,
                    set: value => setTwoDecimal(value, 3),
                    required: false,
                    default: 0
                }
            }
        ]
    },
    {
        timestamps: true,
        collection: SCHEMA_CONSTANT.COLLECTION_NAME
    }
);

jobWorkItemMasterSchema.pre("save", async function (next) {
    const {isNew, isModified} = this;
    if (this.isNew) {
        const itemCategoryList = await filteredItemCategoryList([
            {
                $match: {
                    categoryStatus: OPTIONS.defaultStatus.ACTIVE,
                    jobWorkItem: true
                }
            }
        ]);
        let category = itemCategoryList.find(x => this.itemCategory == x.category);
        if (!!category) {
            this.jobWorkItemCode = getIncrementNumWithPrefix({
                modulePrefix: category.prefix,
                autoIncrementValue: category.nextAutoIncrement,
                digit: category.digit
            });
            await setItemsNextAutoIncrementNo(this.itemCategory);
        }
    }
    await auditTrail(this, this.modifiedPaths(), isNew, isModified);
    next();
});
jobWorkItemMasterSchema.plugin(paginatePlugin);
const jobWorkItemMaster = mongoose.model(SCHEMA_CONSTANT.COLLECTION_NAME, jobWorkItemMasterSchema);

module.exports = jobWorkItemMaster;
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
