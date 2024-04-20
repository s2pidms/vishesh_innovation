const {default: mongoose} = require("mongoose");

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
    SFGStockCode: {
        type: String,
        required: false
    },
    // processName: {
    //     type: String,
    //     required: false
    // },
    stage: {
        type: String,
        required: false,
        default: "Roll"
    },
    // machineName: {
    //     type: String,
    //     required: false
    // },
    // processDate: {
    //     type: Date,
    //     required: false,
    //     default: new Date()
    // },
    // inputSource: {
    //     type: String,
    //     required: false
    // },
    // productionShift: {
    //     type: String,
    //     required: false
    // },
    // productionStaff: {
    //     type: String,
    //     required: false
    // },
    // jobCard: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: false,
    //     ref: JOB_CARD_CREATION.COLLECTION_NAME
    // },
    // jobCardRef: {
    //     type: String,
    //     required: false
    // },
    GIN: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "GoodInwardEntry"
    },
    GINDate: {
        type: Date,
        required: false
    },
    WIPInventory: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "WIPInventory"
    },
    MRN: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "MRN"
    },
    MRNNumber: {
        type: String,
        required: false
    },
    item: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        refPath: "referenceModel"
    },
    referenceModel: {
        enum: ["ChildItem", "Items"],
        type: String,
        default: "Items"
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
    unitConversion: {
        type: String,
        required: false
    },
    UOM: {
        type: String,
        required: false
    },
    shelfLife: {
        type: Number,
        set: value => setTwoDecimal(value),
        required: false
    },
    PPICQty: {
        type: Number,
        set: value => setTwoDecimal(value),
        required: false
    },
    SQM: {
        type: Number,
        set: value => setTwoDecimal(value),
        required: false
    },
    roll: {
        type: Number,
        set: value => setTwoDecimal(value),
        required: false
    },
    width: {
        type: Number,
        set: value => setTwoDecimal(value),
        required: false
    },
    length: {
        type: Number,
        set: value => setTwoDecimal(value),
        required: false
    },
    noOfRollsToBeSlit: {
        type: Number,
        set: value => setTwoDecimal(value),
        required: false
    },
    sqmToBeProcessed: {
        type: Number,
        set: value => setTwoDecimal(value, 4),
        required: false
    },
    recovery: {
        type: Number,
        set: value => setTwoDecimal(value),
        required: false
    },
    recoveryPercentage: {
        type: Number,
        set: value => setTwoDecimal(value),
        required: false
    },
    wastage: {
        type: Number,
        set: value => setTwoDecimal(value),
        required: false
    },
    wastagePercentage: {
        type: Number,
        set: value => setTwoDecimal(value),
        required: false
    },
    productionRemarks: {
        prodRemarks: {
            type: String,
            required: false
        },
        checkedBy: {
            type: String,
            required: false
        },
        approvedBy: {
            type: String,
            required: false
        },
        approvedDate: {
            type: Date,
            required: false
        }
    },
    QARemarks: {
        QARemark: {
            type: String,
            required: false
        },
        checkedBy: {
            type: String,
            required: false
        },
        approvedBy: {
            type: String,
            required: false
        },
        approvedDate: {
            type: Date,
            required: false
        }
    }
    // inputDetails: {
    //     width: {
    //         type: Number,
    //         set: value => {
    //             if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
    //                 return parseFloat(value).toFixed(2);
    //             }
    //         },
    //         required: false
    //     },
    //     length: {
    //         type: Number,
    //         set: value => {
    //             if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
    //                 return parseFloat(value).toFixed(2);
    //             }
    //         },
    //         required: false
    //     },
    //     sqmPerRoll: {
    //         type: Number,
    //         set: value => {
    //             if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
    //                 return parseFloat(value).toFixed(2);
    //             }
    //         },
    //         required: false
    //     },
    //     noOfRolls: {
    //         type: Number,
    //         set: value => {
    //             if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
    //                 return parseFloat(value).toFixed(2);
    //             }
    //         },
    //         required: false
    //     },
    //     sqmTotal: {
    //         type: Number,
    //         set: value => {
    //             if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
    //                 return parseFloat(value).toFixed(2);
    //             }
    //         },
    //         required: false
    //     }
    // },
    // inputDetails: {
    //     width: {
    //         type: Number,
    //         set: value => {
    //             if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
    //                 return parseFloat(value).toFixed(2);
    //             }
    //         },
    //         required: false
    //     },
    //     length: {
    //         type: Number,
    //         set: value => {
    //             if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
    //                 return parseFloat(value).toFixed(2);
    //             }
    //         },
    //         required: false
    //     },
    //     sqmPerRoll: {
    //         type: Number,
    //         set: value => {
    //             if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
    //                 return parseFloat(value).toFixed(2);
    //             }
    //         },
    //         required: false
    //     },
    //     noOfRolls: {
    //         type: Number,
    //         set: value => {
    //             if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
    //                 return parseFloat(value).toFixed(2);
    //             }
    //         },
    //         required: false
    //     },
    //     sqmTotal: {
    //         type: Number,
    //         set: value => {
    //             if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
    //                 return parseFloat(value).toFixed(2);
    //             }
    //         },
    //         required: false
    //     }
    // },

    // outputDetails: {
    //     width: {
    //         type: Number,
    //         set: value => {
    //             if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
    //                 return parseFloat(value).toFixed(2);
    //             }
    //         },
    //         required: false
    //     },
    //     length: {
    //         type: Number,
    //         set: value => {
    //             if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
    //                 return parseFloat(value).toFixed(2);
    //             }
    //         },
    //         required: false
    //     },
    //     sheetQty: {
    //         type: Number,
    //         set: value => {
    //             if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
    //                 return parseFloat(value).toFixed(2);
    //             }
    //         },
    //         required: false
    //     },
    //     sqmPerRoll: {
    //         type: Number,
    //         set: value => {
    //             if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
    //                 return parseFloat(value).toFixed(2);
    //             }
    //         },
    //         required: false
    //     },
    //     noOfSlits: {
    //         type: Number,
    //         set: value => {
    //             if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
    //                 return parseFloat(value).toFixed(2);
    //             }
    //         },
    //         required: false
    //     },
    //     sqmTotal: {
    //         type: Number,
    //         set: value => {
    //             if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
    //                 return parseFloat(value).toFixed(2);
    //             }
    //         },
    //         required: false
    //     },
    //     usage: {
    //         type: Number,
    //         set: value => {
    //             if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
    //                 return parseFloat(value).toFixed(2);
    //             }
    //         },
    //         required: false
    //     }
    // },
    // trimWaste: {
    //     width: {
    //         type: Number,
    //         set: value => {
    //             if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
    //                 return parseFloat(value).toFixed(2);
    //             }
    //         },
    //         required: false
    //     },
    //     length: {
    //         type: Number,
    //         set: value => {
    //             if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
    //                 return parseFloat(value).toFixed(2);
    //             }
    //         },
    //         required: false
    //     },
    //     sqmPerRoll: {
    //         type: Number,
    //         set: value => {
    //             if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
    //                 return parseFloat(value).toFixed(2);
    //             }
    //         },
    //         required: false
    //     },
    //     noOfSlits: {
    //         type: Number,
    //         set: value => {
    //             if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
    //                 return parseFloat(value).toFixed(2);
    //             }
    //         },
    //         required: false
    //     },
    //     sqmTotal: {
    //         type: Number,
    //         set: value => {
    //             if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
    //                 return parseFloat(value).toFixed(2);
    //             }
    //         },
    //         required: false
    //     },
    //     usage: {
    //         type: Number,
    //         set: value => {
    //             if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
    //                 return parseFloat(value).toFixed(2);
    //             }
    //         },
    //         required: false
    //     }
    // },
    // balanceRollsDetails: [
    //     {
    //         width: {
    //             type: Number,
    //             set: value => {
    //                 if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
    //                     return parseFloat(value).toFixed(2);
    //                 }
    //             },
    //             required: false
    //         },
    //         length: {
    //             type: Number,
    //             set: value => {
    //                 if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
    //                     return parseFloat(value).toFixed(2);
    //                 }
    //             },
    //             required: false
    //         },
    //         sqmPerRoll: {
    //             type: Number,
    //             set: value => {
    //                 if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
    //                     return parseFloat(value).toFixed(2);
    //                 }
    //             },
    //             required: false
    //         },
    //         noOfRolls: {
    //             type: Number,
    //             set: value => {
    //                 if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
    //                     return parseFloat(value).toFixed(2);
    //                 }
    //             },
    //             required: false
    //         },
    //         sqmTotal: {
    //             type: Number,
    //             set: value => {
    //                 if (![undefined, null, "NaN"].includes(value) && typeof +value == "number") {
    //                     return parseFloat(value).toFixed(2);
    //                 }
    //             },
    //             required: false
    //         }
    //     }
    // ]
};
