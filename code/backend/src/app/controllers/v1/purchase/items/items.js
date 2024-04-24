const asyncHandler = require("express-async-handler");
const Model = require("../../../../models/purchase/itemModel");
const MESSAGES = require("../../../../helpers/messages.options");
const {
    getIncrementNumWithPrefix,
    outputData,
    getAllAggregationFooter,
    removeFilesInError,
    removeFile
} = require("../../../../helpers/utility");
const {getMatchData, OPTIONS} = require("../../../../helpers/global.options");
const {getAllSuppliers} = require("../suppliers/suppliers");
const {getHSNByCode} = require("../HSN/HSN");
const {default: mongoose} = require("mongoose");
const {getAllItemCategory} = require("../itemCategoryMaster/itemCategoryMaster");
const {getCurrentDate} = require("../../../../helpers/dateTime");
const {readExcel} = require("../../../../middleware/readExcel");
const column = require("../../../../mocks/excelUploadColumn/itemKeys.json");
const updateColumn = require("../../../../mocks/excelUploadColumn/itemQCLevelKeys.json");
const ObjectId = mongoose.Types.ObjectId;
const {itemsUpload} = require("../../../../middleware/itemsUpload");
const {
    getAllItemAttributes,
    getAllItemExcelAttributes,
    getAllItemReportsAttributes
} = require("../../../../models/purchase/helpers/itemHelper");
const {filteredSupplierList} = require("../../../../models/purchase/repository/supplierRepository");
const {filteredHSNList} = require("../../../../models/purchase/repository/hsnRepository");
const ItemRepository = require("../../../../models/purchase/repository/itemRepository");
const {getAllModuleMaster} = require("../../settings/module-master/module-master");
const validationJson = require("../../../../mocks/excelUploadColumn/validation.json");
const {filteredChannelPartnerList} = require("../../../../models/purchase/repository/channelPartnerRepository");
const {findAppParameterValue} = require("../../settings/appParameter/appParameter");
const {INK_MIXING_UOM} = require("../../../../mocks/constantData");
// @desc    getAll Items Record

exports.getAll = asyncHandler(async (req, res) => {
    try {
        let project = getAllItemAttributes();
        if (req.query.excel == "true") {
            project = getAllItemExcelAttributes();
        }
        let pipeline = [
            {$match: {company: ObjectId(req.user.company)}},
            {
                $addFields: {
                    itemAMU: {$toString: "$itemAMU"},
                    itemROL: {$toString: "$itemROL"},
                    supplierDetails: {$first: "$supplierDetails"},
                    channelDetails: {$first: "$channelDetails"}
                }
            },
            {$unwind: {path: "$supplierDetails", preserveNullAndEmptyArrays: true}},
            {$unwind: {path: "$channelDetails", preserveNullAndEmptyArrays: true}}
        ];
        let rows = await ItemRepository.getAllPaginate({pipeline, project, queryParams: req.query});
        return res.success(rows);
    } catch (e) {
        console.error("getAll items", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @desc    create Items new Record
exports.create = asyncHandler(async (req, res) => {
    try {
        let createdObj = {
            company: req.user.company,
            createdBy: req.user.sub,
            updatedBy: req.user.sub,
            ...req.body
        };
        if (createdObj.supplierDetails) {
            createdObj.supplierDetails = JSON.parse(createdObj.supplierDetails);
        }
        if (createdObj.channelDetails) {
            createdObj.channelDetails = JSON.parse(createdObj.channelDetails);
        }
        if (createdObj.supplierDetailsForm) {
            createdObj.supplierDetailsForm = JSON.parse(createdObj.supplierDetailsForm);
        }
        if (createdObj.rmSpecifications) {
            createdObj.rmSpecifications = JSON.parse(createdObj.rmSpecifications);
        }
        if (createdObj.inventoryStockLevels) {
            createdObj.inventoryStockLevels = JSON.parse(createdObj.inventoryStockLevels);
        }
        if (createdObj.dualUnitsDimensionsDetails) {
            createdObj.dualUnitsDimensionsDetails = JSON.parse(createdObj.dualUnitsDimensionsDetails);
        }
        // if (createdObj.specificationInfo) {
        //     createdObj.specificationInfo = JSON.parse(createdObj.specificationInfo);
        // }
        if (req.files) {
            if (req.files.tdsFile && req.files.tdsFile.length > 0) {
                createdObj["tdsFile"] = req.files.tdsFile[0].filename;
            }
            if (req.files.msdsFile && req.files.msdsFile.length > 0) {
                createdObj["msdsFile"] = req.files.msdsFile[0].filename;
            }
            if (req.files.drawing && req.files.drawing.length > 0) {
                createdObj["drawing"] = req.files.drawing[0].filename;
            }
        }
        if (createdObj.unitConversionFlag == 1) {
            createdObj.secondaryToPrimaryConversion = null;
        } else {
            createdObj.primaryToSecondaryConversion = null;
        }
        const itemDetails = await ItemRepository.createDoc(createdObj);
        if (itemDetails) {
            return res.success({
                message: MESSAGES.apiSuccessStrings.ADDED("Items")
            });
        } else {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.serverError(errors);
        }
    } catch (e) {
        console.error("create Items", e);
        if (req.files) {
            removeFilesInError(req.files.tdsFile);
            removeFilesInError(req.files.msdsFile);
            removeFilesInError(req.files.drawing);
        }
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @desc    update Items  Record
exports.update = asyncHandler(async (req, res) => {
    try {
        let itemDetails = await Model.findById(req.params.id);
        itemDetails.updatedBy = req.user.sub;
        if (!itemDetails) {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.preconditionFailed(errors);
        }
        if (req.body.supplierDetails) {
            req.body.supplierDetails = JSON.parse(req.body.supplierDetails);
        }
        if (req.body.channelDetails) {
            req.body.channelDetails = JSON.parse(req.body.channelDetails);
        }
        if (req.body.rmSpecifications) {
            req.body.rmSpecifications = JSON.parse(req.body.rmSpecifications);
        }
        if (req.body.inventoryStockLevels) {
            req.body.inventoryStockLevels = JSON.parse(req.body.inventoryStockLevels);
        }
        if (req.body.dualUnitsDimensionsDetails) {
            req.body.dualUnitsDimensionsDetails = JSON.parse(req.body.dualUnitsDimensionsDetails);
        }
        // if (req.body.specificationInfo) {
        //     req.body.specificationInfo = JSON.parse(req.body.specificationInfo);
        // }
        if (req.files) {
            if (req.files["tdsFile"] && req.files["tdsFile"].length > 0) {
                if (itemDetails.tdsFile) {
                    removeFile(`${req.files.tdsFile[0].destination}/${itemDetails.tdsFile}`);
                }
                itemDetails["tdsFile"] = req.files["tdsFile"][0].filename;
            }

            if (req.files["msdsFile"] && req.files["msdsFile"].length > 0) {
                if (itemDetails.msdsFile) {
                    removeFile(`${req.files.msdsFile[0].destination}/${itemDetails.msdsFile}`);
                }
                itemDetails["msdsFile"] = req.files["msdsFile"][0].filename;
            }
            if (req.files["drawing"] && req.files["drawing"].length > 0) {
                if (itemDetails.drawing) {
                    removeFile(`${req.files.drawing[0].destination}/${itemDetails.drawing}`);
                }
                itemDetails["drawing"] = req.files["drawing"][0].filename;
            }
        }
        if (req.body.unitConversionFlag == 1) {
            req.body.secondaryToPrimaryConversion = null;
        } else {
            req.body.primaryToSecondaryConversion = null;
        }
        itemDetails = await ItemRepository.updateDoc(itemDetails, req.body);
        return res.success({
            message: MESSAGES.apiSuccessStrings.UPDATE("Items has been")
        });
    } catch (e) {
        console.error("update Items", e);
        if (req.files) {
            removeFilesInError(req.files.tdsFile);
            removeFilesInError(req.files.msdsFile);
            removeFilesInError(req.files.drawing);
        }
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @desc    deleteById Items Record
exports.deleteById = asyncHandler(async (req, res) => {
    try {
        const deleteItem = await Model.findById(req.params.id);
        if (deleteItem) {
            await deleteItem.remove();
            return res.success({
                message: MESSAGES.apiSuccessStrings.DELETED("Items")
            });
        } else {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Items");
            return res.preconditionFailed(errors);
        }
    } catch (e) {
        console.error("deleteById Items", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @desc    getById Items Record
exports.getById = asyncHandler(async (req, res) => {
    try {
        let existing = await Model.findById(req.params.id);
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Items");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        console.error("getById Items", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @desc    getAllMasterData Items Record
exports.getAllMasterData = asyncHandler(async (req, res) => {
    try {
        const options = await dropDownOptions(req.user.company);
        let autoIncValues = {};
        if (options.itemCategories.length > 0) {
            for (const ele of options.itemCategories) {
                autoIncValues[ele.category] = getIncrementNumWithPrefix({
                    modulePrefix: ele.prefix,
                    autoIncrementValue: ele.nextAutoIncrement,
                    digit: ele.digit
                });
            }
        }
        options.itemCategories = options.itemCategories.map(x => x.category);
        let WXLDimensionsUnit = await findAppParameterValue("WXL_DIMENSIONS_UNIT", req.user.company);
        return res.success({
            autoIncValues,
            WXLDimensionsUnit: WXLDimensionsUnit.split(",").map(x => x),
            ...options
        });
    } catch (error) {
        console.error("getAllMasterData Items", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
const dropDownOptions = async company => {
    try {
        const suppliersOptions = await filteredSupplierList([
            {$match: {company: ObjectId(company), isSupplierActive: "A"}},
            {$sort: {supplierName: 1}},
            {
                $addFields: {
                    supplierBillingAddress: {$arrayElemAt: ["$supplierBillingAddress", 0]}
                }
            },
            {
                $project: {
                    label: "$supplierName",
                    value: "$_id",
                    currency: "$supplierCurrency",
                    supplierCode: 1,
                    supplierBillingState: "$supplierBillingAddress.state",
                    supplierBillingCity: "$supplierBillingAddress.city",
                    supplierBillingPinCode: "$supplierBillingAddress.pinCode"
                }
            }
        ]);
        const channelPartnerOptions = await filteredChannelPartnerList([
            {$match: {company: ObjectId(company), isCPActive: "Active"}},
            {$sort: {channelPartnerName: 1}},
            {
                $addFields: {
                    billingAddress: {$arrayElemAt: ["$billingAddress", 0]}
                }
            },
            {
                $project: {
                    label: "$channelPartnerName",
                    value: "$_id",
                    channelPartnerName: 1,
                    CPCode: 1,
                    currency: 1,
                    channelPartnerCategory: 1,
                    channelBillingState: "$billingAddress.state",
                    channelBillingCity: "$billingAddress.city",
                    channelBillingPinCode: "$billingAddress.pinCode",
                    paymentTerms: 1
                }
            }
        ]);
        const QCLevelsOptions = await getAllModuleMaster(company, "QUALITY_CONTROL_LEVEL");
        const HSNCodesList = await filteredHSNList([
            {$match: {company: ObjectId(company), isActive: "Y"}},
            {$sort: {createdAt: -1}},
            {
                $project: {
                    label: {$concat: ["$hsnCode", "$goodsDescription"]},
                    value: "$hsnCode",
                    hsnCode: 1,
                    goodsDescription: 1,
                    gstRate: 1,
                    igstRate: 1,
                    cgstRate: 1,
                    sgstRate: 1,
                    ugstRate: 1
                }
            }
        ]);
        const itemCategories = await getAllItemCategory(company);
        return {
            HSNCodesList,
            suppliersOptions,
            channelPartnerOptions,
            itemCategories,
            QCLevelsOptions
        };
    } catch (error) {
        console.error(error);
    }
};
// @desc    getAllItems Items Record
exports.getAllItems = async (company, project = {}) => {
    try {
        let rows = await Model.find(
            {
                isActive: "A",
                company: company
            },
            project
        )
            .sort({itemCode: -1})
            .populate(
                "supplierDetails.supplierId",
                "supplierCode supplierName supplierDescription supplierPurchaseType supplierCurrency itemCode itemName itemDescription"
            );
        return rows;
    } catch (e) {
        console.error("getAllItems", e);
    }
};
exports.getAllItemsCount = async company => {
    try {
        const count = await Model.countDocuments({
            isActive: "A",
            company: company
        });
        return count;
    } catch (error) {
        console.error("getAllItemsCount", error);
    }
};

exports.getAllReports = asyncHandler(async (req, res) => {
    try {
        const suppliers = await getAllSuppliers(req.user.company, {supplierName: 1});
        const itemCategoryList = await getAllItemCategory(req.user.company);
        const {
            search = null,
            excel = "false",
            page = 1,
            pageSize = 10,
            column = "createdAt",
            direction = -1,
            supplier = null,
            itemType = null
        } = req.query;
        let skip = Math.max(0, page - 1) * pageSize;
        let query = {
            company: ObjectId(req.user.company),
            ...(!!itemType && {
                itemType: itemType
            })
        };
        let project = getAllItemReportsAttributes();
        let match = await getMatchData(project, search);
        let pagination = [];
        if (excel == "false") {
            pagination = [{$skip: +skip}, {$limit: +pageSize}];
        }
        let rows = await Model.aggregate([
            {
                $match: query
            },
            {$unwind: "$supplierDetails"},
            {
                $lookup: {
                    from: "Supplier",
                    localField: "supplierDetails.supplierId",
                    foreignField: "_id",
                    pipeline: [{$project: {_id: 1, supplierName: 1}}],
                    as: "supplierDetails.supplierId"
                }
            },
            {$unwind: "$supplierDetails.supplierId"},
            {
                $addFields: {
                    itemAMU: {$toString: "$itemAMU"},
                    itemROL: {$toString: "$itemROL"},
                    unitPrice: {$toString: "$supplierDetails.stdCostUom1"}
                }
            },
            {
                $match: {
                    ...(!!supplier && {
                        "supplierDetails.supplierId._id": ObjectId(supplier)
                    })
                }
            },
            ...getAllAggregationFooter(project, match, column, direction, pagination)
        ]);
        return res.success({
            suppliers,
            itemCategories: itemCategoryList.map(x => x.category),
            ...outputData(rows)
        });
    } catch (e) {
        console.error("getAllReports", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// exports.uploadItemFile = asyncHandler(async (req, res) => {
//     try {
//         let fname = req.file.filename;
//         let jsonData = await readExcel(fname, column);
//         const missingHSNCode = [];
//         const missingSupplierName = [];
//         const supplierList = await getAllSuppliers(req.user.company);
//         for (const ele of jsonData) {
//             const HSNObj = await getHSNByCode(ele.hsn);
//             if (HSNObj) {
//                 ele.gst = HSNObj.gstRate;
//                 ele.igst = HSNObj.igstRate;
//                 ele.sgst = HSNObj.cgstRate;
//                 ele.cgst = HSNObj.sgstRate;
//                 ele.ugst = HSNObj.ugstRate;
//                 ele.supplierId = null;
//                 for (const supp of supplierList) {
//                     if (supp.supplierName == ele.supplierName.trim()) {
//                         ele.supplierId = supp._id.valueOf();
//                     }
//                 }
//             } else {
//                 missingHSNCode.push(ele.hsn);
//             }
//             if (!ele.supplierName || !ele.supplierId) {
//                 missingSupplierName.push(ele.supplierName ? ele.supplierName : ele.itemName);
//             }
//         }
//         console.log("missingHSNCode", JSON.stringify(missingHSNCode));
//         console.log("missingSupplierName", JSON.stringify(missingSupplierName));
//         const arr = [];
//         let itemData = jsonData.map(x => {
//             const {supplierName, spin, supplierCurrency, stdCostUom1, supplierId, ...rest} = x;
//             let details = {
//                 supplierName,
//                 spin,
//                 supplierCurrency,
//                 stdCostUom1,
//                 supplierId
//             };
//             rest.supplierDetails = [details];
//             return rest;
//         });
//         let {itemArr, exitsItemArr} = await itemsUpload(itemData);
//         return res.success({message: "Uploaded successfully!", itemArr, exitsItemArr});
//     } catch (e) {
//         const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
//         res.serverError(errors);
//         throw new Error(e);
//     }
// });

exports.getAllItemsForBOM = async (company, categories, project = null) => {
    try {
        let projectObj = {
            reference: "$_id",
            referenceModel: "Items",
            itemCode: 1,
            itemName: 1,
            itemDescription: 1,
            supplierCode: "$supplierDetails.supplierId.supplierCode",
            supplier: "$supplierDetails.supplierId._id",
            UOM: "$orderInfoUOM",
            unitCost: "$supplierDetails.stdCostUom1",
            partCount: {$literal: 0},
            itemCost: {$literal: 0},
            qtyPerSKUUnit: {$literal: 0},
            wastePercentage: {$literal: 0},
            BOM: "NA",
            type: "items",
            _id: 0
        };
        if (project) {
            projectObj = project;
        }
        let rows = await Model.aggregate([
            {
                $match: {
                    isActive: "A",
                    company: ObjectId(company),
                    itemType: {$in: categories}
                }
            },
            {
                $addFields: {
                    supplierDetails: {$first: "$supplierDetails"}
                }
            },
            {
                $unwind: {
                    path: "$supplierDetails",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: "Supplier",
                    localField: "supplierDetails.supplierId",
                    foreignField: "_id",
                    pipeline: [{$project: {_id: 1, supplierCode: 1}}],
                    as: "supplierDetails.supplierId"
                }
            },
            {$unwind: "$supplierDetails.supplierId"},
            {
                $project: projectObj
            },
            {$sort: {itemCode: 1}}
        ]);
        return rows;
    } catch (e) {
        console.error("getAllItemsForBOM", e);
    }
};

exports.getAllItemsBySupplierId = asyncHandler(async (company, supplierId) => {
    try {
        let rows = await Model.aggregate([
            {
                $match: {
                    isActive: "A",
                    company: ObjectId(company)
                }
            },
            {
                $addFields: {
                    POQty: 0,
                    balancedQty: 0,
                    lineValue: 0,
                    linePPV: 0
                }
            },
            {
                $unwind: {
                    path: "$supplierDetails",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $match: {
                    "supplierDetails.supplierId": ObjectId(supplierId)
                }
            },
            {
                $lookup: {
                    from: "Supplier",
                    localField: "supplierDetails.supplierId",
                    foreignField: "_id",
                    pipeline: [
                        {
                            $project: {
                                _id: 1,
                                supplierName: 1,
                                supplierPurchaseType: 1,
                                supplierCurrency: 1,
                                supplierLeadTimeInDays: 1,
                                supplierPaymentTerms: 1
                            }
                        }
                    ],
                    as: "supplierDetails.supplierId"
                }
            },
            {$unwind: "$supplierDetails.supplierId"},
            {
                $project: {
                    unitConversion: "$conversionOfUnits",
                    item: "$_id",
                    POLineNumber: "$POLineNumber",
                    itemCode: 1,
                    name: "$itemName",
                    description: "$itemDescription",
                    UOM: {$ifNull: ["$orderInfoUOM", "$primaryUnit"]},
                    POQty: 1,
                    balancedQty: 1,
                    standardRate: "$supplierDetails.stdCostUom1",
                    purchaseRate: "$supplierDetails.stdCostUom1",
                    stdCostUom1: "$supplierDetails.stdCostUom1",
                    stdCostUom2: "$supplierDetails.stdCostUom2",
                    primaryUnit: 1,
                    secondaryUnit: 1,
                    primaryToSecondaryConversion: {
                        $cond: [{$eq: ["$unitConversionFlag", 1]}, "$primaryToSecondaryConversion", null]
                    },
                    secondaryToPrimaryConversion: {
                        $cond: [{$eq: ["$unitConversionFlag", 2]}, "$secondaryToPrimaryConversion", null]
                    },
                    lineValue: 1,
                    linePPV: 1,
                    deliveryDate: getCurrentDate("YYYY-MM-DD"),
                    leadDeliveryDate: {
                        $dateToString: {
                            format: "%Y-%m-%d",
                            date: {
                                $cond: [
                                    {$not: ["$supplierDetails.supplierId.supplierLeadTimeInDays"]},
                                    new Date(),
                                    {
                                        $dateAdd: {
                                            startDate: new Date(),
                                            unit: "day",
                                            amount: {$toInt: "$supplierDetails.supplierId.supplierLeadTimeInDays"}
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    gst: 1,
                    igst: 1,
                    cgst: 1,
                    sgst: 1,
                    ugst: 1,
                    _id: 0
                }
            }
        ]);
        return rows;
    } catch (e) {
        console.error("getAllItemsBySupplierId", e);
    }
});

exports.getAllFilteredItems = async (company, itemCategoriesList, project = {}) => {
    try {
        let rows = await Model.find(
            {
                isActive: "A",
                company: company,
                itemType: {$in: itemCategoriesList}
            },
            project
        ).sort({itemCode: 1});
        return rows;
    } catch (e) {
        console.error("getAllFilteredItems", e);
    }
};

exports.updateItemByFile = asyncHandler(async (req, res) => {
    try {
        let fname = req.file.filename;
        let jsonData = await readExcel(fname, updateColumn);
        let nonUpdatedItemCode = [];
        for (const ele of jsonData) {
            let existing = await Model.findOne({itemCode: ele.itemCode, itemType: ele.itemType});
            if (existing && ["L1", "L2", "L3", "L4"].includes(ele.QCLevels)) {
                existing.QCLevels = ele.QCLevels;
                await existing.save();
            } else {
                nonUpdatedItemCode.push(ele.itemCode);
            }
        }
        return res.success({message: "Updated successfully!", nonUpdatedItemCode});
    } catch (e) {
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        res.serverError(errors);
        throw new Error(e);
    }
});

exports.getAllItemsForFormulationInk = async (company, itemCategoriesList) => {
    try {
        let rows = await Model.aggregate([
            {
                $match: {
                    isActive: "A",
                    company: ObjectId(company),
                    itemType: {$in: itemCategoriesList},
                    orderInfoUOM: {$in: INK_MIXING_UOM.getInkMixingUOM()}
                }
            },
            {
                $addFields: {
                    supplierDetails: {$arrayElemAt: ["$supplierDetails", 0]}
                }
            },
            {
                $project: {
                    seq: null,
                    item: "$_id",
                    itemCode: 1,
                    itemName: 1,
                    itemDescription: 1,
                    ratePerUnit: {
                        $cond: [
                            {
                                $and: [
                                    {
                                        $eq: ["$supplierDetails.uom2", INK_MIXING_UOM.GRAM]
                                    },
                                    {$ne: [{$type: "$supplierDetails.stdCostUom2"}, "missing"]}
                                ]
                            },
                            "$supplierDetails.stdCostUom2",
                            {
                                $cond: [
                                    {
                                        $in: ["$orderInfoUOM", [INK_MIXING_UOM.LTR, INK_MIXING_UOM.KG]]
                                    },
                                    {$divide: ["$supplierDetails.stdCostUom1", 1000]},
                                    "$supplierDetails.stdCostUom1"
                                ]
                            }
                        ]
                    },

                    UoM: "g",
                    referenceModel: "Items",
                    qtyPerKgInitial: {$literal: 0},
                    percentageLoading: {$literal: 0},
                    qtyPerKgFinal: {$literal: 0},
                    itemCost: {$literal: 0}
                }
            },
            {$sort: {itemCode: 1}}
        ]);
        return rows;
    } catch (e) {
        console.error("getAllFilteredItems", e);
    }
};

exports.checkItemsValidation = async (itemsData, column, company) => {
    try {
        const requiredFields = [
            "itemType",
            "itemCode",
            "itemName",
            "itemDescription",
            "isActive",
            "orderInfoUOM",
            "primaryUnit",
            "hsn",
            "shelfLife",
            "QCLevels",
            "supplierName"
        ];
        const falseArr = OPTIONS.falsyArray;
        let {HSNCodesList, QCLevelsOptions, suppliersOptions, UOMOptions, itemCategories} = await dropDownOptions(
            company
        );
        let dropdownCheck = [
            {
                key: "itemType",
                options: itemCategories.map(x => {
                    return {
                        label: x.category,
                        value: x.category
                    };
                })
            },
            {
                key: "orderInfoUOM",
                options: UOMOptions
            },
            {
                key: "hsn",
                options: HSNCodesList.map(x => {
                    return {
                        label: x.label,
                        value: x.value
                    };
                })
            },
            {
                key: "QCLevels",
                options: QCLevelsOptions
            },
            {
                key: "supplierName",
                options: suppliersOptions.map(x => {
                    return {
                        label: x.label,
                        value: x.label
                    };
                })
            }
        ];
        for await (const x of itemsData) {
            x.isValid = true;
            x.message = null;
            for (const ele of Object.values(column)) {
                if (requiredFields.includes(ele) && falseArr.includes(x[ele])) {
                    x.isValid = false;
                    x.message = validationJson[ele] ?? `${ele} is Required`;
                    break;
                }
                for (const dd of dropdownCheck) {
                    if (ele == dd.key && !dd.options.map(values => values.value).includes(x[ele])) {
                        x.isValid = false;
                        x.message = `${ele} is Invalid Value & Value Must be ${dd.options.map(values => values.value)}`;
                        break;
                    }
                }
                if (
                    await ItemRepository.findOneDoc(
                        {itemName: x["itemName"], itemDescription: x["itemDescription"]},
                        {
                            _id: 1
                        }
                    )
                ) {
                    x.isValid = false;
                    x.message = `${ele} is already exists`;
                    break;
                }
            }
        }
        const inValidRecords = itemsData.filter(x => !x.isValid);
        const validRecords = itemsData.filter(x => x.isValid);
        return {inValidRecords, validRecords};
    } catch (error) {
        console.error(error);
    }
};
exports.bulkInsertItemsByCSV = async (jsonData, {company, createdBy, updatedBy}) => {
    try {
        const supplierList = await getAllSuppliers(company);
        let missingHSNCode = [];
        let missingSupplierName = [];
        for (const ele of jsonData) {
            const HSNObj = await getHSNByCode(ele.hsn);
            if (HSNObj) {
                ele.gst = HSNObj.gstRate;
                ele.igst = HSNObj.igstRate;
                ele.sgst = HSNObj.cgstRate;
                ele.cgst = HSNObj.sgstRate;
                ele.ugst = HSNObj.ugstRate;
                ele.supplierId = null;
                for (const supp of supplierList) {
                    if (supp.supplierName == ele.supplierName.trim()) {
                        ele.supplierId = supp._id.valueOf();
                    }
                }
            } else {
                missingHSNCode.push(ele.hsn);
            }
            if (!ele.supplierName || !ele.supplierId) {
                missingSupplierName.push(ele.supplierName ? ele.supplierName : ele.itemName);
            }
        }

        let itemData = jsonData.map(x => {
            const {
                supplierName,
                spin,
                supplierCurrency,
                stdCostUom1,
                supplierId,
                maxConsumptionPerDay,
                minConsumptionPerDay,
                avgConsumptionPerDay,
                supplyLeadTime,
                inventoryTurnoverCycle,
                noOfOrdersPerCycle,
                ...rest
            } = x;
            let details = {
                supplierName,
                spin,
                supplierCurrency,
                stdCostUom1,
                supplierId
            };
            rest.supplierDetails = [details];
            rest.inventoryStockLevels = {
                maxConsumptionPerDay,
                minConsumptionPerDay,
                avgConsumptionPerDay,
                supplyLeadTime,
                inventoryTurnoverCycle,
                noOfOrdersPerCycle
            };

            rest.company = company;
            rest.createdBy = createdBy;
            rest.updatedBy = updatedBy;
            return rest;
        });
        for await (const item of itemData) {
            await ItemRepository.createDoc(item);
        }
        return {message: "Uploaded successfully!"};
    } catch (error) {
        console.error(error);
    }
};
