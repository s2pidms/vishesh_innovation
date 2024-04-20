const {default: mongoose} = require("mongoose");

exports.SCHEMA = {
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
};
