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
    seq: {
        type: Number,
        required: false
    },
    productNumber: {
        type: String,
        required: false
    },
    productCode: {
        type: String,
        required: false
    },
    displayProductCategoryName: {
        type: String,
        required: false
    },
    application: {
        type: String,
        required: false
    },
    categoryStatus: {
        type: String,
        required: false,
        enum: OPTIONS.defaultStatus.getCommonStatusAsArray(),
        default: OPTIONS.defaultStatus.ACTIVE
    }
};
