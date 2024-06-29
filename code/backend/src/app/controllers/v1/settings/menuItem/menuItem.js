const asyncHandler = require("express-async-handler");
const Model = require("../../../../models/settings/menuItemModel");
const MESSAGES = require("../../../../helpers/messages.options");
const {OPTIONS} = require("../../../../helpers/global.options");
const {getAllRoles} = require("../role/role");
const User = require("../user/user");
const SubModulePermissions = require("../subModulePermissions/subModulePermissions");
const LabelMaster = require("../label-master/label-master");
const memoryCacheHandler = require("../../../../utilities/memoryCacheHandler");
const UOMUnitMasterRepository = require("../../../../models/settings/repository/UOMUnitMasterRepository");
const {ObjectId} = require("../../../../../config/mongoose");
const SalesUOMUnitMasterRepository = require("../../../../models/settings/repository/SalesUOMUnitMasterRepository");
const {getAllModuleMaster} = require("../module-master/module-master");
const MenuItemRepository = require("../../../../models/settings/repository/menuItemRepository");
const CurrencyMasterRepository = require("../../../../models/settings/repository/currencyMasterRepository");

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
        let existing = await MenuItemRepository.findOneDoc(
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
        const itemDetails = await MenuItemRepository.createDoc(createdObj);
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
        let itemDetails = await MenuItemRepository.getDocById(req.params.id);
        itemDetails.updatedBy = req.user.sub;
        itemDetails = await MenuItemRepository.updateDoc(itemDetails, req.body);
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
        const deleteItem = await MenuItemRepository.deleteDoc({_id: req.params.id});
        if (deleteItem) {
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
        let existing = await MenuItemRepository.getDocById(req.params.id);
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
        const UOMDefaultValue = await getAllModuleMaster(req.user.company, "DEFAULT_UNIT_VALUE");
        const salesUOMUintMaster = await SalesUOMUnitMasterRepository.filteredSalesUOMUnitMasterList([
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
        const currencyMaster = await CurrencyMasterRepository.filteredCurrencyMasterList([
            {
                $match: {
                    company: ObjectId(req.user.company),
                    status: OPTIONS.defaultStatus.ACTIVE
                }
            },
            {
                $sort: {sequence: 1}
            },
            {
                $project: {
                    currencyName: 1,
                    symbol: 1
                }
            }
        ]);
        let roles = await getAllRoles(req.user.company, true);
        return res.success({
            menuItems,
            roles,
            rolesPermission,
            labelsJSON,
            UOMUintMasterJSON,
            salesUOMUintMaster,
            UOMDefaultValue,
            currencyMaster
        });
    } catch (e) {
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        res.serverError(errors);
        console.error(e);
    }
});
const checkMenuItemInCacheBySystem = async (company, system) => {
    let menuItems = [];
    // const cachedData = memoryCacheHandler.get("mainMenuItems");
    // if (cachedData) {
    //     menuItems = cachedData;
    // } else {
    menuItems = await this.updateCacheGlobalMenuItems(company, system);
    // }
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
        roles: 1,
        id: "$_id"
    });
    // memoryCacheHandler.put("mainMenuItems", menuItems);
    return menuItems;
};

exports.getAllMenuItemsList = async (company, system = "main", project = {__v: 0}) => {
    let rows = await MenuItemRepository.filteredMenuItemList([
        {
            $match: {
                // company: company,
                system: system
            }
        },
        {
            $sort: {menuOrder: 1}
        },
        {
            $project: project
        }
    ]);
    return rows;
};

exports.getAllMenuItemsRolesForPermissions = async menuItemId => {
    let rows = await MenuItemRepository.findOneDoc(
        {
            _id: menuItemId
        },
        {roles: 1}
    );
    return rows;
};
