const {default: mongoose} = require("mongoose");
const {OPTIONS} = require("../../../helpers/global.options");

exports.SCHEMA = {
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
    childItemCategory: {
        type: String,
        required: false
    },
    itemCode: {
        type: String,
        required: false
    },
    itemName: {
        type: String,
        required: false
    },
    itemDescription: {
        type: String,
        required: false
    },
    HSNCode: {
        type: String,
        required: false
    },
    HSN: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "HSN"
    },
    unitOfMeasurement: {
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
    primaryToSecondaryConversion: {
        type: String,
        required: false
    },
    secondaryToPrimaryConversion: {
        type: String,
        required: false
    },
    conversionOfUnits: {
        type: String,
        required: false
    },
    avgConsumptionPerMonth: {
        type: Number,
        set: value => {
            if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                return parseFloat(value).toFixed(2);
            }
        },
        required: false
    },
    sourceOfManufacturing: {
        type: String,
        required: false
    },
    // serviceProviderDetails: [
    //     {
    //         extServiceProvider: {
    //             type: String,
    //             required: false,
    //             ref: "ExternalServiceProvider"
    //         },
    //         extServiceProviderName: {
    //             type: String,
    //             required: false
    //         },
    //         manufacturingCost: {
    //             type: Number,
    //             set: value => {
    //                 if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
    //                     return parseFloat(value).toFixed(2);
    //                 }
    //             },
    //             required: false
    //         },
    //         paymentTerms: {
    //             type: String,
    //             required: false
    //         }
    //     }
    // ],
    itemCost: {
        type: Number,
        set: value => {
            if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                return parseFloat(value).toFixed(2);
            }
        },
        required: false
    },
    shelfLife: {
        type: Number,
        set: value => {
            if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
                return parseFloat(value).toFixed(2);
            }
        },
        required: false
    },
    // storageTemp: {
    //     type: String,
    //     required: false
    // },
    // storageHumidity: {
    //     type: String,
    //     required: false
    // },
    // specialStorageInstruction: {
    //     type: String,
    //     required: false
    // },
    status: {
        type: String,
        required: false,
        enum: OPTIONS.defaultStatus.getCommonStatusAsArray(),
        default: OPTIONS.defaultStatus.ACTIVE
    },
    unitConversionFlag: {
        type: Number,
        required: false
    },
    inventoryStockLevels: {
        maxConsumptionPerDay: {
            type: Number,
            required: false
        },
        minConsumptionPerDay: {
            type: Number,
            required: false
        },
        avgConsumptionPerDay: {
            type: Number,
            required: false
        },
        supplyLeadTime: {
            type: Number,
            required: false
        },
        inventoryTurnoverCycle: {
            type: Number,
            required: false
        },
        noOfOrdersPerCycle: {
            type: Number,
            required: false
        },
        reorderLevel: {
            type: Number,
            required: false
        },
        reorderQuantity: {
            type: Number,
            required: false
        },
        maximumStockLevel: {
            type: Number,
            required: false
        },
        averageStockLevel: {
            type: Number,
            required: false
        },
        minimumStockLevel: {
            type: Number,
            required: false
        }
    },
    supplierDetails: [
        {
            supplier: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "Supplier"
            },
            supplierName: {
                type: String,
                required: false
            },
            supplierPartNo: {
                type: String,
                required: false
            },
            currency: {
                type: String,
                required: false
            },
            purchaseCost: {
                type: Number,
                required: false
            }
        }
    ],
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
    }
};
