const mongoose = require("mongoose");
const {SUB_MODULE_MANAGEMENT: SCHEMA_CONST} = require("../../mocks/schemasConstant/settingsConstant");
const {paginatePlugin} = require("../plugins/paginatePlugin");
const subModuleManagementSchema = mongoose.Schema(
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
        menuItemId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "menuItems"
        },
        module: {
            type: String,
            required: false
        },
        roles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                required: false,
                ref: "Role"
            }
        ],
        type: {
            type: String,
            required: false
        },
        order: {
            type: Number,
            required: false
        },
        isDisplay: {
            type: Boolean,
            required: false,
            default: true
        },
        title: {
            type: String,
            required: false
        },
        displayName: {
            type: String,
            required: false
        },
        disabled: {
            type: Boolean,
            required: false,
            default: false
        },
        url: {
            type: String,
            required: false
        },
        items: [
            {
                menuItemId: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: "menuItems"
                },
                module: {
                    type: String,
                    required: false
                },
                type: {
                    type: String,
                    required: false
                },
                order: {
                    type: Number,
                    required: false
                },
                isDisplay: {
                    type: Boolean,
                    required: false,
                    default: true
                },
                title: {
                    type: String,
                    required: false
                },
                displayName: {
                    type: String,
                    required: false
                },
                disabled: {
                    type: Boolean,
                    required: false,
                    default: false
                },
                url: {
                    type: String,
                    required: false
                }
            }
        ]
    },
    {
        timestamps: true,
        collection: SCHEMA_CONST.COLLECTION_NAME
    }
);
subModuleManagementSchema.plugin(paginatePlugin);
const SubModuleManagement = mongoose.model(SCHEMA_CONST.COLLECTION_NAME, subModuleManagementSchema);
module.exports = SubModuleManagement;
