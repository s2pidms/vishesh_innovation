const asyncHandler = require("express-async-handler");
const Model = require("../../../../models/production/childPartProductionModel");
const MESSAGES = require("../../../../helpers/messages.options");
const {generateCreateData, OPTIONS} = require("../../../../helpers/global.options");
const {default: mongoose} = require("mongoose");
const {CHILD_ITEM_CATEGORY_NAME} = require("../../../../mocks/constantData");
const {getAllMapProcessMachine} = require("../map-process-machine/map-process-machine");
const {
    getAllChildPartProductionAttributes
} = require("../../../../models/production/helpers/childPartProductionHelper");
const {getEndDateTime, getStartDateTime, dateToAnyFormat} = require("../../../../helpers/dateTime");
const {CHILD_PART_PRODUCTION} = require("../../../../mocks/schemasConstant/productionConstant");
const {getAndSetAutoIncrementNo} = require("../../settings/autoIncrement/autoIncrement");
const {getAllModuleMaster} = require("../../settings/module-master/module-master");
const {filteredChildItemList} = require("../../../../models/planning/repository/childItemRepository");
const {
    getAllChildPartProdAggregate
} = require("../../../../models/production/repository/childPartProductionRepository");
const ObjectId = mongoose.Types.ObjectId;

exports.create = asyncHandler(async (req, res) => {
    try {
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
                message: MESSAGES.apiSuccessStrings.ADDED(" Child Part Production")
            });
        } else {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.serverError(errors);
        }
    } catch (e) {
        console.error("create Child Part Production", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
exports.getAll = asyncHandler(async (req, res) => {
    try {
        let project = getAllChildPartProductionAttributes();
        let pipeline = [
            {
                $match: {
                    company: ObjectId(req.user.company)
                }
            }
        ];
        let rows = await getAllChildPartProdAggregate({pipeline, project, queryParams: req.query});
        return res.success(rows);
    } catch (e) {
        console.error("getAll", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getById = asyncHandler(async (req, res) => {
    try {
        let existing = await Model.findById(req.params.id);
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS(" Child Part Production");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        console.error("getById  Child Part Production", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.deleteById = asyncHandler(async (req, res) => {
    try {
        const deleteItem = await Model.findById(req.params.id);
        if (deleteItem) {
            await deleteItem.remove();
            return res.success({
                message: MESSAGES.apiSuccessStrings.DELETED("Child Part Production")
            });
        } else {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Child Part Production");
            return res.preconditionFailed(errors);
        }
    } catch (e) {
        console.error("deleteById  Child Part Production", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.update = asyncHandler(async (req, res) => {
    try {
        let itemDetails = await Model.findById(req.params.id);
        if (!itemDetails) {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.preconditionFailed(errors);
        }
        itemDetails.updatedBy = req.user.sub;
        itemDetails = await generateCreateData(itemDetails, req.body);
        if (req.body.childPartProductionDetails) {
            itemDetails.childPartProductionDetails = req.body.childPartProductionDetails;
        }
        itemDetails = await itemDetails.save();

        return res.success({
            message: MESSAGES.apiSuccessStrings.UPDATE(" Child Part Production has been")
        });
    } catch (e) {
        console.error("update  Child Part Production", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAllMasterData = asyncHandler(async (req, res) => {
    try {
        let childItemListOptions = await filteredChildItemList([
            {
                $match: {
                    company: ObjectId(req.user.company),
                    status: OPTIONS.defaultStatus.ACTIVE,
                    childItemCategory: CHILD_ITEM_CATEGORY_NAME.CHILD_ITEM
                }
            },
            {
                $project: {
                    childItem: "$_id",
                    itemCode: 1,
                    itemName: 1,
                    itemDescription: 1,
                    UOM: "$unitOfMeasurement",
                    orderRef: null,
                    jobCard: null,
                    batchNumber: null,
                    batchQty: null,
                    outputQty: null,
                    rejectedQty: null
                }
            }
        ]);
        const mapProcessMachineListOptions = await getAllMapProcessMachine(req.user.company);
        const productionShiftOptions = await getAllModuleMaster(req.user.company, "PRODUCTION_SHIFT");
        const autoIncrementNo = await getAndSetAutoIncrementNo(
            {...CHILD_PART_PRODUCTION.AUTO_INCREMENT_DATA()},
            req.user.company
        );
        return res.success({
            autoIncrementNo,
            childItemListOptions,
            mapProcessMachineListOptions,
            productionShiftOptions
        });
    } catch (error) {
        console.error("getAllMasterData Child Part Production", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getTotalNoOfChildPartProducedPerDay = async company => {
    const currentDate = dateToAnyFormat(new Date(), "YYYY-MM-DD");
    const rows = await Model.aggregate([
        {
            $addFields: {
                matchDate: {$dateToString: {format: "%Y-%m-%d", date: "$productionDate"}}
            }
        },
        {
            $match: {
                company: ObjectId(company),
                matchDate: currentDate
            }
        },
        {
            $group: {
                _id: null,
                // count: {$sum: 1},
                count: {$sum: {$cond: [{$eq: ["$status", "Awaiting Approval"]}, 1, 0]}}
            }
        },
        {
            $project: {
                _id: 0,
                count: 1
            }
        }
    ]);
    return rows[0]?.count || 0;
};
