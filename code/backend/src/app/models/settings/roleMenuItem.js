const mongoose = require("mongoose");
const {ROLE_MENU: SCHEMA_CONST} = require("../../mocks/schemasConstant/settingsConstant");
const roleMenuItemSchema = mongoose.Schema(
    {
        company: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "Company"
        },
        role: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Role"
        },
        roleName: {
            type: String,
            required: false
        },
        menuItems: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "menuItems"
        }
    },
    {
        timestamps: true,
        collection: SCHEMA_CONST.COLLECTION_NAME
    }
);
const RoleMenuItem = mongoose.model(SCHEMA_CONST.COLLECTION_NAME, roleMenuItemSchema);

module.exports = RoleMenuItem;
