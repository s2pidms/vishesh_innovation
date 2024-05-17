const asyncHandler = require("express-async-handler");
const MESSAGES = require("../../../../helpers/messages.options");
const {default: mongoose} = require("mongoose");
const MenuItem = require("../menuItem/menuItem");
const User = require("../user/user");
const {getAllRoles} = require("../role/role");
const {getAllSubModuleManagementAttributes} = require("../../../../models/settings/helpers/subModuleManagementHelper");
const ObjectId = mongoose.Types.ObjectId;
const subModuleJson = require("../../../../utilities/module");
const SubModuleRepository = require("../../../../models/settings/repository/subModuleRepository");
const {getAllAggregationFooter, outputData} = require("../../../../helpers/utility");
const {getMatchData} = require("../../../../helpers/global.options");

exports.getAll = asyncHandler(async (req, res) => {
    try {
        const roles = await getAllRoles(req.user.company, true);
        let user = await User.getAllRoleByUserId(req.user.company, req.user.sub);
        const {search = null, menuID = null, tabType = null, display = true, subItemsFilter = "yes"} = req.query;
        let itemsCondition = 1;
        let superAdminExist = user.role.some(x => String(x) == "64a687b4e9143bffd820fb3d");
        if (subItemsFilter == "yes" && !superAdminExist) {
            itemsCondition = {
                $cond: [
                    superAdminExist,
                    {
                        $map: {
                            input: "$items",
                            as: "item",
                            in: {
                                $mergeObjects: [
                                    "$$item",
                                    {
                                        disabled: {
                                            $cond: [superAdminExist, false, null]
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    {
                        $filter: {
                            input: "$items",
                            as: "item",
                            cond: {
                                $eq: ["$$item.isDisplay", true]
                            }
                        }
                    }
                ]
            };
        }
        const project = getAllSubModuleManagementAttributes(itemsCondition);
        let match = await getMatchData(project, search);
        let rows = await SubModuleRepository.filteredSubModuleManagementList([
            {
                $match: {
                    ...(display === true &&
                        !superAdminExist && {
                            isDisplay: display
                        }),
                    ...(!!menuID && {
                        menuItemId: ObjectId(menuID)
                    }),
                    ...(!!tabType && {
                        type: tabType
                    })
                }
            },
            {
                $addFields: {
                    commonValues: {$cond: [superAdminExist, [], {$setIntersection: [user.role, "$roles"]}]},
                    disabled: {$cond: [superAdminExist, false, null]}
                }
            },
            {
                $match: {
                    commonValues: []
                }
            },
            ...getAllAggregationFooter(project, match, "order", 1, [])
        ]);
        return res.success({
            ...outputData(rows),
            roles
        });
    } catch (e) {
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        res.serverError(errors);
        console.error(e);
    }
});

exports.update = asyncHandler(async (req, res) => {
    try {
        for await (const ele of req.body) {
            let itemDetails = await SubModuleRepository.getDocById(ele._id);
            await SubModuleRepository.updateDoc(itemDetails, ele);
        }
        return res.success({
            message: MESSAGES.apiSuccessStrings.UPDATE("Sub Module has been")
        });
    } catch (e) {
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        res.serverError(errors);
        console.error(e);
    }
});
exports.deleteById = asyncHandler(async (req, res) => {
    try {
        const subModuleExists = subModuleJson.find(x => x._id == req.params.id);
        if (subModuleExists) {
            return res.preconditionFailed(MESSAGES.apiErrorStrings.CANNOT_DELETE("Sub Module"));
        } else {
            await SubModuleRepository.deleteDoc({_id: req.params.id});
            return res.success({message: MESSAGES.apiSuccessStrings.DELETED("Sub Module")});
        }
    } catch (e) {
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        res.serverError(errors);
        console.error(e);
    }
});
exports.getById = asyncHandler(async (req, res) => {
    try {
        let existing = await SubModuleRepository.getDocById(req.params.id);
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Sub Module");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        res.serverError(errors);
        console.error(e);
    }
});

exports.getAllSubModuleForPermissions = async data => {
    let menuItemRoles = await MenuItem.getAllMenuItemsRolesForPermissions(data.menuItemId);
    let roleExists = false;
    if (data.role == "64a687b4e9143bffd820fb3d") {
        roleExists = true;
    } else {
        roleExists = menuItemRoles.roles.map(x => x.valueOf()).includes(data.role);
    }
    let rows = await SubModuleRepository.filteredSubModuleManagementList([
        {
            $match: {
                menuItemId: ObjectId(data.menuItemId)
            }
        },
        {
            $project: {
                subModuleId: "$_id",
                subModuleName: "$displayName",
                type: 1,
                items: 1
            }
        },
        {
            $group: {
                _id: "$type",
                data: {
                    $push: {
                        $cond: [
                            {$eq: ["$type", "REPORT"]},
                            {
                                items: "$items",
                                subModuleId: "$subModuleId",
                                subModuleName: "$subModuleName",
                                viewAction: roleExists,
                                downloadAction: roleExists,
                                printAction: roleExists
                            },
                            {
                                $cond: [
                                    {$eq: ["$type", "MASTER"]},
                                    {
                                        items: "$items",
                                        subModuleId: "$subModuleId",
                                        subModuleName: "$subModuleName",
                                        createAction: roleExists,
                                        viewAction: roleExists,
                                        editAction: roleExists,
                                        downloadAction: roleExists
                                    },
                                    {
                                        items: "$items",
                                        subModuleId: "$subModuleId",
                                        subModuleName: "$subModuleName",
                                        createAction: roleExists,
                                        viewAction: roleExists,
                                        editAction: roleExists,
                                        deleteAction: roleExists,
                                        approveAction: roleExists,
                                        downloadAction: roleExists,
                                        generateReportAction: roleExists,
                                        rejectAction: roleExists,
                                        cancelledAction: roleExists
                                    }
                                ]
                            }
                        ]
                    }
                }
            }
        }
    ]);
    return {rows, roleExists};
};

exports.getAllSubModuleList = async menuID => {
    try {
        let rows = await SubModuleRepository.filteredSubModuleManagementList([
            {
                $match: {
                    menuItemId: ObjectId(menuID)
                }
            },
            {
                $project: {
                    title: 1
                }
            }
        ]);
        return rows;
    } catch (e) {
        console.error("getAllSubModuleList", e);
    }
};

exports.getAllSubModule = async module => {
    try {
        let rows = await SubModuleRepository.filteredSubModuleManagementList([
            {
                $match: {
                    type: "REPORT",
                    module: module
                }
            },
            {
                $project: {
                    title: 1,
                    displayName: 1
                }
            }
        ]);
        return rows;
    } catch (e) {
        console.error("getAllSubModule", e);
    }
};

exports.getAllFilteredCardsManagement = asyncHandler(async (req, res) => {
    try {
        const {menuID = null, type = null} = req.query;
        let project = {
            order: 1,
            isDisplay: 1,
            title: 1,
            displayName: 1,
            disabled: 1,
            items: 1
        };
        let pipeline = [
            {
                $match: {
                    ...(!!menuID && {
                        menuItemId: ObjectId(menuID)
                    }),
                    ...(!!type && {type: type})
                }
            }
        ];
        let rows = await SubModuleRepository.getAllPaginate({pipeline, project, queryParams: req.query});
        return res.success(rows);
    } catch (e) {
        console.error("getAllFilteredCardsManagement", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.updateById = asyncHandler(async (req, res) => {
    try {
        let itemDetails = await SubModuleRepository.getDocById(req.params.id);
        if (!itemDetails) {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.preconditionFailed(errors);
        }
        itemDetails.updatedBy = req.user.sub;
        await SubModuleRepository.updateDoc(itemDetails, req.body);
        return res.success({
            message: MESSAGES.apiSuccessStrings.UPDATE("Sub Module")
        });
    } catch (e) {
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        res.serverError(errors);
        console.error(e);
    }
});

exports.getCountsMenuItemWise = asyncHandler(async (req, res) => {
    try {
        const {menuID = null, type = null} = req.query;
        let groupCounts = await SubModuleRepository.filteredSubModuleManagementList([
            {
                $match: {
                    ...(!!menuID && {
                        menuItemId: ObjectId(menuID)
                    }),
                    ...(!!type && {type: type})
                }
            },
            {
                $group: {
                    _id: {
                        menuItemId: "$menuItemId",
                        type: "$type"
                    },
                    module: {$first: "$module"},
                    uniqueTitle: {$addToSet: "$title"}
                }
            },
            {
                $project: {
                    _id: 0,
                    module: 1,
                    type: "$_id.type",
                    counts: {$size: "$uniqueTitle"}
                }
            }
        ]);
        return res.success(groupCounts);
    } catch (e) {
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        res.serverError(errors);
        console.error(e);
    }
});
