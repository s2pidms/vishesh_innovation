const asyncHandler = require("express-async-handler");
const Model = require("../../../../../models/planning/billOfMaterialModels/BoMOfSKUModel");
const MESSAGES = require("../../../../../helpers/messages.options");
const {generateCreateData, OPTIONS} = require("../../../../../helpers/global.options");
const {default: mongoose} = require("mongoose");
const {getAllSKUs, getAllInkDetailsForBOM} = require("../../../sales/SKU/SKU");
const ChildItemMaster = require("../../childItemMaster/childItemMaster");
const {getAllItemsForBOM} = require("../../../purchase/items/items");
const {getAllCheckedItemCategoriesList} = require("../../../purchase/itemCategoryMaster/itemCategoryMaster");
const {getAllInkListForBOM} = require("../../../production/inkMaster/inkMaster");
const {
    getAllBOMOfSKUAttributes
} = require("../../../../../models/planning/helpers/billOfMaterialHelper/BoMOfSKUHelper");
const {BOM_OF_SKU} = require("../../../../../mocks/schemasConstant/planningConstant");
const {getAndSetAutoIncrementNo} = require("../../../settings/autoIncrement/autoIncrement");
const BOMOfSKURepository = require("../../../../../models/planning/repository/BOMRepository/BoMOfSKURepository");
const {INK_MIXING_UOM, COMPANY_TYPE} = require("../../../../../mocks/constantData");
const {getCompanyById} = require("../../../settings/company/company");
const ObjectId = mongoose.Types.ObjectId;

exports.create = asyncHandler(async (req, res) => {
    try {
        let exists = await Model.findOne(
            {
                SKU: req.body.SKUId
            },
            {_id: 1}
        );
        if (exists) {
            let errors = MESSAGES.apiErrorStrings.Data_EXISTS("SKU");
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
                message: MESSAGES.apiSuccessStrings.ADDED("BoM Of SKU")
            });
        } else {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.serverError(errors);
        }
    } catch (e) {
        console.error("create BoM Of SKU", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAll = asyncHandler(async (req, res) => {
    try {
        let project = getAllBOMOfSKUAttributes();
        let pipeline = [
            {
                $match: {
                    company: ObjectId(req.user.company)
                }
            }
        ];
        let rows = await BOMOfSKURepository.getAllPaginate({pipeline, project, queryParams: req.query});
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
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("BoM Of SKU");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        console.error("getById BoM Of SKU", e);
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
                message: MESSAGES.apiSuccessStrings.DELETED("BoM Of SKU")
            });
        } else {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("BoM Of SKU");
            return res.preconditionFailed(errors);
        }
    } catch (e) {
        console.error("deleteById BoM Of SKU", e);
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
        if (req.body.BOMOfSKUDetails) {
            itemDetails.BOMOfSKUDetails = req.body.BOMOfSKUDetails;
        }
        itemDetails = await itemDetails.save();

        return res.success({
            message: MESSAGES.apiSuccessStrings.UPDATE("BoM Of SKU has been")
        });
    } catch (e) {
        console.error("update BoM Of SKU", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
exports.getAllMasterData = asyncHandler(async (req, res) => {
    try {
        let SKUOptions = await getAllSKUs(req.user.company, {
            SKUNo: 1,
            SKUName: 1,
            SKUDescription: 1,
            primaryUnit: 1,
            ups: {$ifNull: ["$packingStdAttribute.primaryPacking", "$dimensionsDetails.layoutDimensions.ups"]}
        });
        const autoIncrementNo = await getAndSetAutoIncrementNo({...BOM_OF_SKU.AUTO_INCREMENT_DATA()}, req.user.company);
        return res.success({
            SKUOptions,
            autoIncrementNo
        });
    } catch (error) {
        console.error("getAllMasterData BoM Of SKU", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
exports.getBOMOfSKUCount = async company => {
    try {
        const result = await Model.aggregate([
            {
                $match: {
                    company: ObjectId(company)
                }
            },
            {
                $group: {
                    _id: null,
                    counts: {$sum: 1}
                }
            },
            {
                $project: {
                    _id: 0,
                    counts: 1
                }
            }
        ]);
        return result[0]?.counts || 0;
    } catch (error) {
        console.error("Not able to get record ", error);
    }
};

exports.getAllInkListBySKUId = asyncHandler(async (req, res) => {
    try {
        if (req.query.action == "create") {
            let exists = await Model.findOne(
                {
                    SKU: req.query.SKUId
                },
                {_id: 1}
            );
            if (exists) {
                let errors = MESSAGES.apiErrorStrings.Data_EXISTS("SKU");
                return res.preconditionFailed(errors);
            }
        }
        let rows = await getAllInkDetailsForBOM(req.user.company, req.query.SKUId);
        let listType = "Ink";
        if (rows.length == 0) {
            listType = "Merged";
            let itemCategoriesList = await getAllCheckedItemCategoriesList({
                categoryStatus: OPTIONS.defaultStatus.ACTIVE,
                BOM: true
            });
            itemCategoriesList = itemCategoriesList.map(x => x.category);
            const inkList = await getAllInkListForBOM(req.user.company);
            const childItems = await ChildItemMaster.getAllChildItemsListForBOM(req.user.company, null, "SKU");
            const itemsList = await getAllItemsForBOM(req.user.company, itemCategoriesList);
            rows = [...itemsList, ...childItems];
            let companyData = await getCompanyById(req.user.company, {
                companyType: 1
            });
            rows = rows.map(x => {
                if (companyData.companyType == COMPANY_TYPE.PRINTING_INDUSTRY) {
                    x.unitCost = x.UOM == INK_MIXING_UOM.KG ? x.unitCost / 1000 : x.unitCost;
                    x.UOM = x.UOM == INK_MIXING_UOM.KG ? INK_MIXING_UOM.GRAM : x.UOM;
                }
                return x;
            });
            rows = [...rows, ...inkList];
        }
        return res.success({rows, listType});
    } catch (e) {
        console.error("getAllInkListBySKUId", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.createBOMOfSKU = async obj => {
    try {
        obj = JSON.parse(JSON.stringify(obj));
        delete obj._id;
        delete obj.BOMNo;
        delete obj.__v;
        let createdObj = {
            ...obj
        };
        let newBOMOfDSKU = await Model.create(createdObj);
        return {
            _id: newBOMOfDSKU._id,
            BOMNo: newBOMOfDSKU.BOMNo
        };
    } catch (error) {
        console.error("Create SKU On NPD Master Update::::: Error in creating SKU ======= ", error);
    }
};

exports.getBOMBySKUId = async (company, SKUId) => {
    try {
        const SKUObj = await Model.findOne({company: company, SKU: SKUId}, {_id: 1});
        return SKUObj;
    } catch (e) {
        console.error("getBOMBySKUId", e);
    }
};

exports.getMaterialCostBySKUId = async (company, SKUId) => {
    try {
        const SKUObj = await Model.findOne({company: company, SKU: SKUId}, {totalMaterialCost: 1});
        return SKUObj?.totalMaterialCost || 0;
    } catch (e) {
        console.error("getBOMBySKUId", e);
    }
};

exports.getBOMBySKUIdForMRP = asyncHandler(async (req, res) => {
    try {
        let result = await BOMOfSKURepository.filteredBoMOfSKUList([
            {
                $match: {
                    company: ObjectId(req.user.company),
                    SKU: ObjectId(req.query.SKUId)
                }
            },
            {
                $project: {
                    BOMOfSKUDetails: 1,
                    BOMNo: 1
                }
            }
        ]);
        return res.success(result.length ? result[0] : []);
    } catch (error) {
        console.error("getBOMBySKUIdForMRP  ", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
