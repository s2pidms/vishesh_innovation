const asyncHandler = require("express-async-handler");
const MESSAGES = require("../../../../helpers/messages.options");
const {OPTIONS} = require("../../../../helpers/global.options");
const {getAllSKUCategory} = require("../../settings/SKUCategoryMaster/SKUCategoryMaster");
const {getAllProductSpecificationAttributes} = require("../../../../models/quality/helpers/productSpecificationHelper");
const {default: mongoose} = require("mongoose");
const {getAndSetAutoIncrementNo} = require("../../settings/autoIncrement/autoIncrement");
const {PRODUCT_SPECIFICATION} = require("../../../../mocks/schemasConstant/qualityConstant");
const {filteredSpecificationList} = require("../../../../models/quality/repository/specificationRepository");
const ProductSpecificationRepository = require("../../../../models/quality/repository/productSpecificationRepository");
const {filteredProductCategoryMasterList} = require("../../../../models/settings/repository/productCategoryRepository");
const SKUMasterRepository = require("../../../../models/sales/repository/SKUMasterRepository");
const {filteredCustomerList} = require("../../../../models/sales/repository/customerRepository");

const ObjectId = mongoose.Types.ObjectId;

exports.getAll = asyncHandler(async (req, res) => {
    try {
        const customerOptions = await filteredCustomerList([
            {$match: {company: ObjectId(req.user.company), isCustomerActive: "A"}},
            {$sort: {customerName: 1}},
            {
                $project: {
                    customerName: 1
                }
            }
        ]);
        const {customer = null} = req.query;
        let project = getAllProductSpecificationAttributes();
        let query = {
            company: ObjectId(req.user.company),
            ...(!!customer && {
                "customerInfo.customer": ObjectId(customer)
            })
        };
        let pipeline = [
            // {
            //     $match: {
            //         company: ObjectId(req.user.company)
            //     }
            // },
            {
                $match: query
            },
            {
                $lookup: {
                    from: "ProductSpecification",
                    localField: "_id",
                    foreignField: "SKU",
                    pipeline: [
                        {
                            $project: {
                                status: 1
                            }
                        }
                    ],
                    as: "productSpecification"
                }
            },
            {
                $unwind: {
                    path: "$productSpecification",
                    preserveNullAndEmptyArrays: true
                }
            }
        ];

        let rows = await SKUMasterRepository.getAllPaginate({pipeline, project, queryParams: req.query});
        let totalAmounts = await SKUMasterRepository.filteredSKUMasterList([
            {$match: {company: ObjectId(req.user.company), isActive: "A"}},
            {
                $group: {
                    _id: null,
                    itemId: {$first: "$_id"},
                    activeSKUCount: {$sum: 1}
                }
            },
            {
                $lookup: {
                    from: "ProductSpecification",
                    pipeline: [
                        {
                            $group: {
                                _id: null,
                                createdCount: {$sum: {$cond: [{$eq: ["$status", OPTIONS.defaultStatus.ACTIVE]}, 1, 0]}}
                            }
                        }
                    ],
                    as: "productSpecification"
                }
            },
            {
                $unwind: {
                    path: "$productSpecification",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $project: {
                    _id: 0,
                    totalActiveSKU: "$activeSKUCount",
                    totalCreatedSKU: "$productSpecification.createdCount",
                    totalPendingSKU: {$subtract: ["$activeSKUCount", "$productSpecification.createdCount"]}
                }
            }
        ]);
        return res.success({...rows, totalAmounts, customerOptions});
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
        let existingUser = await ProductSpecificationRepository.findOneDoc({
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
        const itemDetails = await ProductSpecificationRepository.createDoc(createdObj);
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
        let itemDetails = await ProductSpecificationRepository.getDocById(req.params.id);
        if (!itemDetails) {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.preconditionFailed(errors);
        }
        itemDetails.updatedBy = req.user.sub;
        itemDetails = await ProductSpecificationRepository.updateDoc(itemDetails, req.body);
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
        const deleteItem = await ProductSpecificationRepository.deleteDoc({_id: req.params.id});
        if (deleteItem) {
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
        let existing = await ProductSpecificationRepository.filteredProductSpecificationList([
            {
                $match: {
                    SKU: ObjectId(req.params.id)
                }
            },
            {
                $project: {
                    productSpecificationCode: 1,
                    productCategory: 1,
                    SKU: 1,
                    SKUNo: 1,
                    SKUName: 1,
                    SKUDescription: 1,
                    UOM: 1,
                    specificationInfo: 1,
                    status: 1
                }
            }
        ]);
        if (!existing.length) {
            existing = await SKUMasterRepository.filteredSKUMasterList([
                {
                    $match: {
                        _id: ObjectId(req.params.id)
                    }
                },
                {
                    $project: {
                        SKU: "$_id",
                        SKUNo: 1,
                        SKUName: 1,
                        SKUDescription: 1,
                        UOM: "$primaryUnit",
                        productCategory: "$productCategory",
                        _id: 0
                    }
                }
            ]);
        }
        return res.success(existing.length ? existing[0] : {});
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
            {$match: {company: ObjectId(req.user.company), status: OPTIONS.defaultStatus.ACTIVE}},
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
        const SKUOptions = await SKUMasterRepository.filteredSKUMasterList([
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

exports.getBySKUId = async (company, SKUId) => {
    try {
        let rows = await ProductSpecificationRepository.findOneDoc(
            {
                status: OPTIONS.defaultStatus.ACTIVE,
                company: company,
                SKU: SKUId
            },
            {specificationInfo: 1}
        );
        return rows;
    } catch (e) {
        console.error("getAllRM Specification", e);
    }
};
