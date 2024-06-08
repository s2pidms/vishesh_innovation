const Model = require("../../../../models/stores/FGINModel");
const MESSAGES = require("../../../../helpers/messages.options");
const {generateCreateData, OPTIONS} = require("../../../../helpers/global.options");
const {default: mongoose} = require("mongoose");
const {getAllSKUByProductCategory} = require("../../sales/SKU/SKU");
const {
    getFirstDateOfCurrentFiscalYear,
    getLastDateOfCurrentFiscalYear,
    getFiscalMonthsName
} = require("../../../../utilities/utility");
const {getAllSKUCategory} = require("../../settings/SKUCategoryMaster/SKUCategoryMaster");
const FGINHelper = require("../../../../models/stores/helpers/FGINHelper");
const {getAndSetAutoIncrementNo} = require("../../settings/autoIncrement/autoIncrement");
const {FGIN_SCHEMA} = require("../../../../mocks/schemasConstant/storesConstant");
const {filteredSKUMasterList} = require("../../../../models/sales/repository/SKUMasterRepository");
const FGINRepository = require("../../../../models/stores/repository/FGINRepository");
const {filteredProductCategoryMasterList} = require("../../../../models/settings/repository/productCategoryRepository");
const {dateToAnyFormat} = require("../../../../helpers/dateTime");
const {filteredCompanyList} = require("../../../../models/settings/repository/companyRepository");
const ObjectId = mongoose.Types.ObjectId;

exports.getAll = async (req, res) => {
    try {
        const {productCategory = null} = req.query;
        let project = FGINHelper.getAllFGINAttributes();
        let pipeline = [
            {
                $match: {
                    company: ObjectId(req.user.company),
                    FGINQuantity: {$gt: 0}
                }
            },
            {
                $lookup: {
                    from: "SKUMaster",
                    localField: "SKUId",
                    foreignField: "_id",
                    pipeline: [{$project: {productCategory: 1}}],
                    as: "SKUId"
                }
            },
            {$unwind: "$SKUId"},
            {
                $match: {
                    ...(!!productCategory && {
                        "SKUId.productCategory": productCategory
                    })
                }
            }
        ];
        let rows = await FGINRepository.getAllPaginate({pipeline, project, queryParams: req.query});
        return res.success(rows);
    } catch (e) {
        console.error("getAll", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
};

exports.create = async (req, res) => {
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
                message: MESSAGES.apiSuccessStrings.ADDED("Finished Goods Inward Entry")
            });
        } else {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.serverError(errors);
        }
    } catch (e) {
        console.error("create   Finished Goods Inward Entry", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
};
// @desc    update   FinishedGoodsInwardEntry  Record
exports.update = async (req, res) => {
    try {
        let itemDetails = await Model.findById(req.params.id);
        if (!itemDetails) {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.preconditionFailed(errors);
        }
        itemDetails.updatedBy = req.user.sub;
        itemDetails = await generateCreateData(itemDetails, req.body);

        itemDetails = await itemDetails.save();
        return res.success({
            message: MESSAGES.apiSuccessStrings.UPDATE("Finished Goods Inward Entry")
        });
    } catch (e) {
        console.error("update   Finished Goods Inward Entry", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
};

exports.bulkCreate = async (req, res) => {
    try {
        for await (const element of req.body.FGINEntry) {
            let createdObj = {
                company: req.user.company,
                createdBy: req.user.sub,
                updatedBy: req.user.sub,
                FGINNo: req.body.FGINNo,
                location: req.body.location,
                FGINDate: req.body.FGINDate,
                ...element,
                producedQty: element.FGINQuantity
            };
            const saveObj = new Model(createdObj);
            await saveObj.save();
        }
        res.success({
            message: "Multiple Finished Goods Inward Entries created successfully"
        });
    } catch (e) {
        console.error("update FG Correction", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
};

// @desc    deleteById   FinishedGoodsInwardEntry Record
exports.deleteById = async (req, res) => {
    try {
        const deleteItem = await Model.findById(req.params.id);
        if (deleteItem) {
            await deleteItem.remove();
            return res.success({
                message: MESSAGES.apiSuccessStrings.DELETED("Finished Goods Inward Entry")
            });
        } else {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Finished Goods Inward Entry");
            return res.preconditionFailed(errors);
        }
    } catch (e) {
        console.error("deleteById   Finished Goods Inward Entry", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
};

// @desc    getById   FinishedGoodsInwardEntry Record
exports.getById = async (req, res) => {
    try {
        let existing = await Model.findById(req.params.id);
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Finished Goods Inward Entry");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        console.error("getById   Finished Goods Inward Entry", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
};

// @desc    getAllMasterData   FinishedGoodsInwardEntry Record
exports.getAllMasterData = async (req, res) => {
    try {
        const autoIncrementNo = await getAndSetAutoIncrementNo(
            {...FGIN_SCHEMA.AUTO_INCREMENT_DATA()},
            req.user.company
        );
        const options = await dropDownOptions(req.user.company);
        let SKUCategoryList = await getAllSKUCategory(req.user.company, null);
        if (SKUCategoryList.length > 0) {
            // productCategories = SKUCategoryList.map(x => x.displayProductCategoryName);
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
            // productCategories = productCategories.map(x => x.displayProductCategoryName);
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
        return res.success({
            autoIncrementNo,
            ...options,
            productCategories: [
                {
                    label: "All",
                    value: "All"
                },
                ...productCategories
            ]
        });
    } catch (error) {
        console.error("getAllMasterData   Finished Goods Inward Entry", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
};
const dropDownOptions = async company => {
    try {
        const location = await filteredCompanyList([
            {
                $match: {
                    _id: ObjectId(company)
                }
            },
            {$unwind: "$placesOfBusiness"},
            {$group: {_id: null, locationIDs: {$addToSet: "$placesOfBusiness.locationID"}}},
            {
                $unwind: "$locationIDs"
            },
            {$project: {_id: 0, label: "$locationIDs", value: "$locationIDs"}}
        ]);
        return {
            location: location
        };
    } catch (error) {
        console.error("error", error);
    }
};
exports.getAllFGINMasterData = async (req, res) => {
    try {
        const autoIncrementNo = await getAndSetAutoIncrementNo(
            {...FGIN_SCHEMA.AUTO_INCREMENT_DATA()},
            req.user.company
        );
        const SKUMastersOptions = await filteredSKUMasterList([
            {$match: {company: ObjectId(req.user.company), isActive: "A"}},
            {$sort: {createdAt: -1}},
            {
                $project: {
                    label: "$SKUName",
                    skuNum: "$SKUNo",
                    value: "$_id",
                    skuDescription: "$SKUDescription",
                    uom: "$primaryUnit",
                    shelfLife: "$shelfLife",
                    _id: 0
                }
            }
        ]);
        return res.success({
            autoIncrementNo,
            SKUMastersOptions
        });
    } catch (error) {
        console.error("getAllMasterData   Finished Goods Inward Entry", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
};

exports.getAllFinishedGoodsInwardEntry = async (company, SKUId) => {
    try {
        let rows = await Model.find(
            {
                SKUId: SKUId,
                company: company,
                FGINQuantity: {$gt: 0}
            },
            {manufacturingDate: 1, FGINQuantity: 1}
        ).sort({createdAt: -1});
        return rows;
    } catch (e) {
        console.error("getAllFinishedGoodsInwardEntry", e);
    }
};

exports.getFGINBySKUId = async SKUId => {
    try {
        let existingFGIN = await Model.find(
            {
                SKUId: ObjectId(SKUId),
                FGINQuantity: {$gt: 0}
            },
            {
                _id: 1,
                FGINId: "$_id",
                FGINNo: 1,
                FGINQuantity: 1,
                expiryDate: 1,
                manufacturingDate: 1,
                FGExpiryDate: "$expiryDate",
                FGBatchDate: "$manufacturingDate",
                FGBatchNo: "$batchNo"
                // SKUId: 1,
                // batchNo: 1,
            }
        ).lean();
        return existingFGIN ?? [];
    } catch (e) {
        console.error("getFGINBySKUId   FinishedGoodsInwardEntry", e);
    }
};

exports.updateFGINQtyOnDRN = async (updatedBy, FGINId, Qty, DRNStatus) => {
    try {
        let FGIN = await Model.findById(FGINId);
        if (FGIN) {
            if (DRNStatus == "Created") {
                FGIN.FGINQuantity = +FGIN.FGINQuantity - +Qty;
                FGIN.previousDRNQty = Qty;
            } else {
                if (DRNStatus == OPTIONS.defaultStatus.REJECTED || DRNStatus == OPTIONS.defaultStatus.CANCELLED) {
                    FGIN.FGINQuantity = +FGIN.FGINQuantity + +Qty;
                    FGIN.previousDRNQty = 0;
                } else if (FGIN) {
                    FGIN.FGINQuantity = +FGIN.FGINQuantity + +FGIN.previousDRNQty - +Qty;
                    FGIN.previousDRNQty = Qty;
                }
            }
            FGIN.updatedBy = updatedBy;
            const updatedFGINDetails = await FGIN.save();
            return updatedFGINDetails;
        }
    } catch (error) {
        console.error("updateFGINQtyOnDRNCreate::::: Error in updating Sale Order ======= ", error);
    }
};

exports.getAllFGINEntriesCounts = async company => {
    try {
        const result = await Model.aggregate([
            {
                $addFields: {
                    matchDate: {$dateToString: {format: "%Y-%m-%d", date: "$FGINDate"}}
                }
            },
            {
                $match: {
                    company: ObjectId(company),
                    // status: {$in: ["Created"]},
                    matchDate: {
                        $gte: dateToAnyFormat(getFirstDateOfCurrentFiscalYear(), "YYYY-MM-DD"),
                        $lte: dateToAnyFormat(getLastDateOfCurrentFiscalYear(), "YYYY-MM-DD")
                    }
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
                    _id: 0,
                    count: 1
                }
            }
        ]);
        return result[0]?.count || 0;
    } catch (error) {
        console.error("Not able to get record ", error);
    }
};
exports.getAllMonthlyFGINTrends = async company => {
    try {
        const monthsArray = getFiscalMonthsName();
        let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let result = await Model.aggregate([
            {
                $addFields: {
                    matchDate: {$dateToString: {format: "%Y-%m-%d", date: "$FGINDate"}}
                }
            },
            {
                $match: {
                    company: ObjectId(company),
                    matchDate: {
                        $gte: dateToAnyFormat(getFirstDateOfCurrentFiscalYear(), "YYYY-MM-DD"),
                        $lte: dateToAnyFormat(getLastDateOfCurrentFiscalYear(), "YYYY-MM-DD")
                    }
                }
            },
            {
                $group: {
                    _id: {year_month: {$substrCP: ["$FGINDate", 0, 7]}},
                    count: {
                        $sum: 1
                    }
                }
            },
            {
                $sort: {"_id.year_month": 1}
            },
            {
                $project: {
                    _id: 0,
                    count: 1,
                    month_year: {
                        $concat: [
                            {
                                $arrayElemAt: [
                                    monthsArray,
                                    {
                                        $subtract: [{$toInt: {$substrCP: ["$_id.year_month", 5, 2]}}, 4]
                                    }
                                ]
                            }
                        ]
                    }
                }
            },
            {
                $group: {
                    _id: null,
                    data: {$push: {k: "$month_year", v: "$count"}}
                }
            },
            {
                $project: {
                    data: {$arrayToObject: "$data"},
                    _id: 0
                }
            }
        ]);
        if (result.length > 0) {
            const propertyNames = Object.keys(result[0].data);
            const propertyValues = Object.values(result[0].data);
            let n = 0;
            propertyNames.forEach(elem => {
                let index = monthsArray.indexOf(elem);
                data[index] = propertyValues[n].toFixed(2);
                n++;
            });

            monthlyFGINTrends = {months: monthsArray, orders: data};
        } else {
            monthlyFGINTrends = {months: monthsArray, orders: []};
        }
        return monthlyFGINTrends;
    } catch (error) {
        console.error(error);
    }
};

exports.updateFGINOnRenameBatch = async (SKUId, FGINId, newBatchDate) => {
    try {
        await Model.findOneAndUpdate(
            {
                _id: ObjectId(FGINId),
                SKUId: ObjectId(SKUId)
            },
            {manufacturingDate: new Date(newBatchDate)}
        );
    } catch (error) {
        console.error("updateFGINOnRenameBatch::::: Error in updating FGINData ======= ", error);
    }
};
exports.updateFGINOnQuantityCorrection = async (SKUId, FGINId, newFGINQuantity) => {
    try {
        await Model.findOneAndUpdate(
            {
                _id: ObjectId(FGINId),
                SKUId: ObjectId(SKUId)
            },
            {FGINQuantity: newFGINQuantity}
        );
    } catch (error) {
        console.error("updateFGINOnQuantityCorrection::::: Error in updating FGINData ======= ", error);
    }
};
exports.updateFGINOnBatchTransfer = async (SKUId, fromFGINId, toFGINId, transferQty) => {
    try {
        await Model.findOneAndUpdate(
            {
                _id: ObjectId(fromFGINId),
                SKUId: ObjectId(SKUId)
            },
            {$inc: {FGINQuantity: -transferQty}}
        );
        await Model.findOneAndUpdate(
            {
                _id: ObjectId(toFGINId),
                SKUId: ObjectId(SKUId)
            },
            {$inc: {FGINQuantity: transferQty}}
        );
    } catch (error) {
        console.error("updateFGINOnBatchTransfer::::: Error in updating FGINData ======= ", error);
    }
};
exports.getAllFGINByProductCategory = async (req, res) => {
    try {
        const SKUList = await getAllSKUByProductCategory(req.user.company, req.query.productCategory);
        return res.success(SKUList);
    } catch (e) {
        console.error("getById Finished Goods Inward Entry", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
};

exports.checkFGINValidation = async (FGINData, column, company) => {
    try {
        const SKUOptions = await filteredSKUMasterList([
            {$match: {company: ObjectId(company), isActive: "A"}},
            {$project: {SKUName: 1, SKUDescription: 1}}
        ]);
        const requiredFields = ["FGINDate", "SKUName", "FGINQuantity", "batchNo", "manufacturingDate"];
        const falseArr = OPTIONS.falsyArray;
        let {location} = await dropDownOptions(company);
        let dropdownCheck = [
            {
                key: "location",
                options: location
            }
        ];
        for await (const x of FGINData) {
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
                    await SKUMasterRepository.findOneDoc(
                        {SKUName: x["SKUName"], SKUDescription: x["SKUDescription"]},
                        {
                            _id: 1
                        }
                    )
                ) {
                    x.isValid = false;
                    x.message = `${ele} is already exists`;
                    break;
                }
                for (const ele of SKUOptions) {
                    if (ele.SKUName == x["SKUName"] && ele.SKUDescription == x["SKUDescription"]) {
                        x.isValid = false;
                        x.message = `${x["SKUName"]} already exists`;
                        break;
                    }
                }
            }
        }
        const inValidRecords = FGINData.filter(x => !x.isValid);
        const validRecords = FGINData.filter(x => x.isValid);
        return {inValidRecords, validRecords};
    } catch (error) {
        console.error(error);
    }
};

exports.bulkInsertFGINByCSV = async (jsonData, {company, createdBy, updatedBy}) => {
    try {
        const SKUOptions = await filteredSKUMasterList([
            {$match: {company: ObjectId(company), isActive: "A"}},
            {
                $project: {
                    label: "$SKUName",
                    value: "$_id"
                }
            }
        ]);
        let missingSKUName = [];
        for (const ele of jsonData) {
            for (const SKU of SKUOptions) {
                if (ele.SKUName.trim() == SKU.label) {
                    ele.SKUId = SKU.value.valueOf();
                }
            }
            if (!ele.SKUName || !ele.SKUId) {
                missingSKUName.push(ele.SKUName ? ele.SKUName : ele.SKUDescription);
            }
        }
        let FGINData = jsonData.map(x => {
            x.company = company;
            x.createdBy = createdBy;
            x.updatedBy = updatedBy;
            return x;
        });
        for await (const item of FGINData) {
            await FGINRepository.createDoc(item);
        }
        return {message: "Uploaded successfully!"};
    } catch (error) {
        console.error(error);
    }
};
