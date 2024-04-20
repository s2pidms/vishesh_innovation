const asyncHandler = require("express-async-handler");
const Model = require("../../../../models/settings/roleModel");
const MESSAGES = require("../../../../helpers/messages.options");
const {getAllAggregationFooter} = require("../../../../helpers/utility");
const {getMatchData} = require("../../../../helpers/global.options");
const {default: mongoose} = require("mongoose");
const RoleRepository = require("../../../../models/settings/repository/roleRepository");
const {getAllRoleAttributes} = require("../../../../models/settings/helpers/roleHelper");
const memoryCacheHandler = require("../../../../utilities/memoryCacheHandler");
const {getAndSetAutoIncrementNo} = require("../autoIncrement/autoIncrement");
const {ROLE} = require("../../../../mocks/schemasConstant/settingsConstant");
const ObjectId = mongoose.Types.ObjectId;

exports.getAll = asyncHandler(async (req, res) => {
    try {
        const {
            search = null,
            excel = "false",
            page = 1,
            pageSize = 10,
            column = "createdAt",
            direction = -1
        } = req.query;
        let skip = Math.max(0, page - 1) * pageSize;
        let project = getAllRoleAttributes();
        let match = await getMatchData(project, search);
        let pagination = [];
        if (excel == "false") {
            pagination = [{$skip: +skip}, {$limit: +pageSize}];
        }
        let rows = await RoleRepository.getAllRoleList([
            {$match: {company: ObjectId(req.user.company)}},
            {
                $addFields: {
                    createdAtS: {$dateToString: {format: "%d-%m-%Y", date: "$createdAt"}}
                }
            },
            ...getAllAggregationFooter(project, match, column, direction, pagination)
        ]);
        return res.success(rows);
    } catch (e) {
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        res.serverError(errors);
        console.error(e);
    }
});
exports.create = asyncHandler(async (req, res) => {
    try {
        let existing = await RoleRepository.findOneRole(
            {
                roleName: req.body.roleName
            },
            {_id: 1}
        );
        if (existing) {
            let errors = MESSAGES.apiErrorStrings.Data_EXISTS("Role");
            return res.preconditionFailed(errors);
        }
        let createdObj = {
            company: req.user.company,
            createdBy: req.user.sub,
            updatedBy: req.user.sub,
            ...req.body
        };
        const itemDetails = RoleRepository.createRole(createdObj);
        if (itemDetails) {
            res.success({
                message: MESSAGES.apiSuccessStrings.ADDED("Role")
            });
            await this.updateCacheRoles(req.user.company, true);
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
        // let itemDetails = await Model.findById(req.params.id);
        let itemDetails = await RoleRepository.getRoleById(req.params.id);
        itemDetails.updatedBy = req.user.sub;
        itemDetails = await RoleRepository.updateRole(itemDetails, req.body);
        if (!itemDetails) {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.preconditionFailed(errors);
        }
        res.success({
            message: MESSAGES.apiSuccessStrings.UPDATE("Role has been")
        });
        await this.updateCacheRoles(req.user.company, true);
    } catch (e) {
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        res.serverError(errors);
        console.error(e);
    }
});
exports.deleteById = asyncHandler(async (req, res) => {
    try {
        const deleteItem = await RoleRepository.getRoleById(req.params.id);
        if (deleteItem) {
            await RoleRepository.deleteRole(deleteItem);
            return res.success({
                message: MESSAGES.apiSuccessStrings.DELETED("Role")
            });
        } else {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Role");
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
        let existing = await RoleRepository.getRoleById(req.params.id);
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Role");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        res.serverError(errors);
        console.error(e);
    }
});
exports.getAllMasterData = asyncHandler(async (req, res) => {
    try {
        const autoIncrementNo = await getAndSetAutoIncrementNo(ROLE.AUTO_INCREMENT_DATA(), req.user.company);
        res.success({autoIncrementNo});
    } catch (error) {
        console.error(error);
        res.status(400);
        throw new Error("Invalid Model data");
    }
});
exports.getAllRoles = async (company, isSuperAdmin = false) => {
    let rows = [];
    const cachedData = memoryCacheHandler.get("roles");
    if (cachedData) {
        rows = cachedData;
    } else {
        rows = await this.updateCacheRoles(company, isSuperAdmin);
    }
    return rows;
};

exports.updateCacheRoles = async (company, isSuperAdmin = false) => {
    try {
        let rows = await Model.find(
            {
                company: company,
                ...(!isSuperAdmin && {_id: {$ne: ObjectId("64a687b4e9143bffd820fb3d")}})
            },
            {roleCode: 1, roleName: 1, displayRoleName: 1, redirectTo: 1, permissions: 1}
        ).sort({createdAt: -1});
        memoryCacheHandler.put("roles", rows);
        return rows;
    } catch (error) {
        console.error(e);
    }
};

exports.getAllRoleCounts = async (company, isSuperAdmin) => {
    try {
        const result = await Model.aggregate([
            {
                $match: {
                    company: ObjectId(company),
                    ...(!isSuperAdmin && {role: {$nin: [ObjectId("64a687b4e9143bffd820fb3d")]}})
                }
            },
            {
                $group: {
                    _id: null,
                    count: {$sum: 1}
                }
            },
            {
                $project: {
                    totalCounts: "$count"
                }
            }
        ]);
        return result[0]?.totalCounts || 0;
    } catch (error) {
        console.error("Not able to get record ", error);
    }
};
