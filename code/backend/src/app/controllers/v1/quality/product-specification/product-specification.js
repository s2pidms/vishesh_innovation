const asyncHandler = require("express-async-handler");
const Model = require("../../../../models/quality/productSpecificationModel");
const MESSAGES = require("../../../../helpers/messages.options");
const {generateCreateData, OPTIONS} = require("../../../../helpers/global.options");
const {getAllSKUCategory} = require("../../settings/SKUCategoryMaster/SKUCategoryMaster");
const {getAllProductSpecificationAttributes} = require("../../../../models/quality/helpers/productSpecificationHelper");
const {default: mongoose} = require("mongoose");
const {getAndSetAutoIncrementNo} = require("../../settings/autoIncrement/autoIncrement");
const {PRODUCT_SPECIFICATION} = require("../../../../mocks/schemasConstant/qualityConstant");
const {filteredSKUMasterList} = require("../../../../models/sales/repository/SKUMasterRepository");
const {filteredSpecificationList} = require("../../../../models/quality/repository/specificationRepository");
const ProductSpecificationRepository = require("../../../../models/quality/repository/productSpecificationRepository");
const {filteredProductCategoryMasterList} = require("../../../../models/settings/repository/productCategoryRepository");
const ObjectId = mongoose.Types.ObjectId;

exports.getAll = asyncHandler(async (req, res) => {
    try {
        let project = getAllProductSpecificationAttributes();
        let pipeline = [
            {
                $match: {
                    company: ObjectId(req.user.company)
                }
            }
        ];

        let rows = await ProductSpecificationRepository.getAllPaginate({pipeline, project, queryParams: req.query});
        return res.success(rows);
    } catch (e) {
        console.error("getAll", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @desc    create Product Specification new Record
// @route   POST /quality/inspectionParameter/create
exports.create = asyncHandler(async (req, res) => {
    try {
        let existingUser = await Model.findOne({
            SKUNo: req.body.SKUNo
        });
        if (existingUser) {
            let errors = "Product Specification already exists with this same SKUNo";
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
                message: MESSAGES.apiSuccessStrings.ADDED("Product Specification")
            });
        } else {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.serverError(errors);
        }
    } catch (e) {
        console.error("create Product Specification", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @desc    update Product Specification  Record
// @route   PUT /quality/inspectionParameter/update/:id
exports.update = asyncHandler(async (req, res) => {
    try {
        let itemDetails = await Model.findById(req.params.id);
        if (!itemDetails) {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.preconditionFailed(errors);
        }
        itemDetails.updatedBy = req.user.sub;
        itemDetails = await generateCreateData(itemDetails, req.body);
        if (req.body.specificationInfo) {
            itemDetails.specificationInfo = req.body.specificationInfo;
        }
        itemDetails = await itemDetails.save();
        return res.success({
            message: MESSAGES.apiSuccessStrings.UPDATE("Product Specification has been")
        });
    } catch (e) {
        console.error("update Product Specification", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @desc    deleteById Product Specification Record
// @route   PUT /quality/inspectionParameter/delete/:id
exports.deleteById = asyncHandler(async (req, res) => {
    try {
        const deleteItem = await Model.findById(req.params.id);
        if (deleteItem) {
            await deleteItem.remove();
            return res.success({
                message: MESSAGES.apiSuccessStrings.DELETED("Product Specification")
            });
        } else {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Product Specification");
            return res.preconditionFailed(errors);
        }
    } catch (e) {
        console.error("deleteById Product Specification", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @desc    getById Product Specification Record
// @route   GET /quality/inspectionParameter/getById/:id
exports.getById = asyncHandler(async (req, res) => {
    try {
        let existing = await Model.findById(req.params.id);
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Product Specification");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        console.error("getById Product Specification", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @desc    getAllMasterData Product Specification Record
// @route   GET /quality/inspectionParameter/getAllMasterData
exports.getAllMasterData = asyncHandler(async (req, res) => {
    try {
        const specificationList = await filteredSpecificationList([
            {$match: {company: ObjectId(req.user.company)}},
            {$sort: {createdAt: -1}},
            {
                $project: {
                    seq: null,
                    specValue: null,
                    tolerance: null,
                    LTL: null,
                    UTL: null,
                    specificationCode: 1,
                    characteristic: 1,
                    UOM: 1,
                    testStandard: 1,
                    measuringInstrument: 1
                }
            }
        ]);
        const SKUCategoryList = await getAllSKUCategory(req.user.company, null);
        if (SKUCategoryList.length > 0) {
            productCategories = SKUCategoryList.map(x => {
                return {
                    label: x.displayProductCategoryName,
                    value: x.displayProductCategoryName,
                    application: x.application,
                    productNumber: x.SKUCategoryName,
                    productCode: x.productCode
                };
            });
        } else {
            productCategories = await filteredProductCategoryMasterList([
                {
                    $match: {
                        company: ObjectId(req.user.company),
                        categoryStatus: OPTIONS.defaultStatus.ACTIVE
                    }
                },
                {$sort: {seq: 1}},
                {
                    $project: {
                        productNumber: 1,
                        productCode: 1,
                        displayProductCategoryName: 1,
                        application: 1
                    }
                }
            ]);
            productCategories = productCategories.map(x => {
                return {
                    label: x.displayProductCategoryName,
                    value: x.displayProductCategoryName,
                    application: x.application,
                    productNumber: x.productNumber,
                    productCode: x.productCode
                };
            });
        }
        const SKUOptions = await filteredSKUMasterList([
            {$match: {isActive: "A", company: ObjectId(req.user.company)}},
            {$sort: {createdAt: -1}},
            {$project: {SKUNo: 1, SKUName: 1, SKUDescription: 1, productCategory: 1, primaryUnit: 1, _id: 1}}
        ]);
        let autoIncrementNo = await getAndSetAutoIncrementNo(
            PRODUCT_SPECIFICATION.AUTO_INCREMENT_DATA(),
            req.user.company
        );
        return res.success({autoIncrementNo, specificationList, productCategories, SKUOptions});
    } catch (error) {
        console.error("getAllMasterData Product Specification", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @desc    getAllInspectionParameters Product Specification Record
exports.getAllProductSpecification = async company => {
    try {
        let rows = await Model.find({
            status: OPTIONS.defaultStatus.ACTIVE,
            company: company
        }).sort({createdAt: -1});
        return rows;
    } catch (e) {
        console.error("getAllRM Specification", e);
    }
};
exports.getBySKUId = async (company, SKUId) => {
    try {
        let rows = await Model.findOne(
            {
                status: OPTIONS.defaultStatus.ACTIVE,
                company: company,
                SKU: SKUId
            },
            {specificationInfo: 1}
        ).sort({createdAt: -1});
        return rows;
    } catch (e) {
        console.error("getAllRM Specification", e);
    }
};
