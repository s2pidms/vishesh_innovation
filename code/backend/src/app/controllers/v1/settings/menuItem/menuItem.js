const asyncHandler = require("express-async-handler");
const Model = require("../../../../models/settings/menuItemModel");
const MESSAGES = require("../../../../helpers/messages.options");
const {generateCreateData, OPTIONS} = require("../../../../helpers/global.options");
const {getAllRoles} = require("../role/role");
const User = require("../user/user");
const SubModulePermissions = require("../subModulePermissions/subModulePermissions");
const LabelMaster = require("../label-master/label-master");
const memoryCacheHandler = require("../../../../utilities/memoryCacheHandler");
const UOMUnitMasterRepository = require("../../../../models/settings/repository/UOMUnitMasterRepository");
const {ObjectId} = require("../../../../../config/mongoose");

exports.getAll = asyncHandler(async (req, res) => {
    try {
        const {system = "main", column = "menuOrder", direction = -1} = req.query;
        let rows = await Model.find({system: system}).sort({[column]: +direction});
        return res.success(rows);
    } catch (e) {
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        res.serverError(errors);
        console.error(e);
    }
});
exports.create = asyncHandler(async (req, res) => {
    try {
        let existing = await Model.findOne(
            {
                title: req.body.title
            },
            {_id: 1}
        );
        if (existing) {
            let errors = MESSAGES.apiErrorStrings.Data_EXISTS("Menu Item");
            return res.preconditionFailed(errors);
        }
        let createdObj = {
            company: req.user.company,
            createdBy: req.user.sub,
            updatedBy: req.user.sub,
            ...req.body
        };
        const saveObj = new Model(createdObj);
        const itemDetails = await saveObj.save();
        if (itemDetails) {
            return res.success({
                message: MESSAGES.apiSuccessStrings.ADDED("Menu Item")
            });
        } else {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.serverError(errors);
        }
    } catch (e) {
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        res.serverError(errors);
        console.error(e);
    }
});
exports.update = asyncHandler(async (req, res) => {
    try {
        let itemDetails = await Model.findById(req.params.id);
        itemDetails.updatedBy = req.user.sub;
        itemDetails = await generateCreateData(itemDetails, req.body);
        itemDetails = await itemDetails.save();
        if (!itemDetails) {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.preconditionFailed(errors);
        }
        res.success({
            message: MESSAGES.apiSuccessStrings.UPDATE("Menu Item has been")
        });
        await this.updateCacheGlobalMenuItems(req.user.company, "main");
    } catch (e) {
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        res.serverError(errors);
        console.error(e);
    }
});
exports.deleteById = asyncHandler(async (req, res) => {
    try {
        const deleteItem = await Model.findById(req.params.id);
        if (deleteItem) {
            await deleteItem.remove();
            return res.success({
                message: MESSAGES.apiSuccessStrings.DELETED("Menu Item")
            });
        } else {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Menu Item");
            res.preconditionFailed(errors);
        }
    } catch (e) {
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        res.serverError(errors);
        console.error(e);
    }
});
exports.getById = asyncHandler(async (req, res) => {
    try {
        let existing = await Model.findById(req.params.id);
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Menu Item");
            return res.unprocessableEntity(errors);
        }
        let roles = await getAllRoles(req.user.company);
        return res.success({
            menuDetails: existing,
            roles: roles.map(x => {
                return {
                    label: x.roleName,
                    value: x._id
                };
            })
        });
    } catch (e) {
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        res.serverError(errors);
        console.error(e);
    }
});
exports.getAllGlobalData = asyncHandler(async (req, res) => {
    try {
        const {system = "main", column = "menuOrder", direction = 1} = req.query;
        const labelsJSON = await LabelMaster.getAllLabelJSON(req.user.company);
        const UOMUintMasterJSON = await UOMUnitMasterRepository.filteredUOMUnitMasterList([
            {
                $match: {
                    company: ObjectId(req.user.company),
                    status: OPTIONS.defaultStatus.ACTIVE
                }
            },
            {
                $sort: {order: 1}
            },
            {
                $project: {
                    label: 1,
                    value: 1,
                    _id: 0
                }
            }
        ]);
        const menuItems = await checkMenuItemInCacheBySystem(req.user.company, system);
        const userRoles = await User.getAllRoleByUserId(req.user.company, req.user.sub);
        const rolesPermission = await SubModulePermissions.getAllSubModulePermissions(userRoles);
        let roles = await getAllRoles(req.user.company, true);
        return res.success({menuItems, roles, rolesPermission, labelsJSON, UOMUintMasterJSON});
    } catch (e) {
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        res.serverError(errors);
        console.error(e);
    }
});
const checkMenuItemInCacheBySystem = async (company, system) => {
    let menuItems = [];
    const cachedData = memoryCacheHandler.get("mainMenuItems");
    if (cachedData) {
        menuItems = cachedData;
    } else {
        menuItems = await this.updateCacheGlobalMenuItems(company, system);
    }
    return menuItems;
};
exports.updateCacheGlobalMenuItems = async (company, system) => {
    const menuItems = await this.getAllMenuItemsList(company, system, {
        title: 1,
        path: 1,
        image: 1,
        color: 1,
        isMenuActive: 1,
        isActive: 1,
        activeClass: 1,
        roles: 1
    });
    memoryCacheHandler.put("mainMenuItems", menuItems);
    return menuItems;
};

exports.getAllMenuItemsList = async (company, system = "main", project = {}) => {
    let rows = await Model.find(
        {
            // company: company,
            system: system
        },
        project
    ).sort({menuOrder: 1});
    return rows;
};

exports.getAllMenuItemsRolesForPermissions = async menuItemId => {
    let rows = await Model.findOne(
        {
            _id: menuItemId
        },
        {roles: 1}
    ).lean();
    return rows;
};
