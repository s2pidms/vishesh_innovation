const asyncHandler = require("express-async-handler");
const Model = require("../../../../models/stores/goodInwardEntryModel");
const MESSAGES = require("../../../../helpers/messages.options");
const {generateCreateData} = require("../../../../helpers/global.options");
const {getAllSuppliers} = require("../../purchase/suppliers/suppliers");
const {updateMRNStatusOnGIN, getAllMRNs} = require("../../quality/Mrn/Mrn");
const {default: mongoose} = require("mongoose");
const {getFirstDateOfCurrentFiscalYear, getLastDateOfCurrentFiscalYear} = require("../../../../utilities/utility");
const {dateToAnyFormat} = require("../../../../helpers/dateTime");
// const {getGINMailConfig} = require("./goodsInwardEntryMail");
const {getAndSetAutoIncrementNo} = require("../../settings/autoIncrement/autoIncrement");
const {GOOD_INWARD_ENTRY} = require("../../../../mocks/schemasConstant/storesConstant");
const {getAllGoodInwardEntryAttributes} = require("../../../../models/stores/helpers/goodInwardEntryHelper");
const GINRepository = require("../../../../models/stores/repository/goodInwardEntryRepository");
const ObjectId = mongoose.Types.ObjectId;
const MailTriggerRepository = require("../../../../models/settings/repository/mailTriggerRepository");
const {STORES_MAIL_CONST} = require("../../../../mocks/mailTriggerConstants");
const {GOODS_TRANSFER_REQUEST_DEPT} = require("../../../../mocks/constantData");
const InventoryRepository = require("../../../../models/stores/repository/inventoryCorrectionRepository");

// @desc    getAll GoodsInwardEntry Record
exports.getAll = asyncHandler(async (req, res) => {
    try {
        let project = getAllGoodInwardEntryAttributes();
        if (req.query.excel == "true") {
            project = getAllGoodInwardEntryAttributes();
        }
        let pipeline = [
            {$match: {company: ObjectId(req.user.company)}},
            {
                $lookup: {
                    from: "Supplier",
                    localField: "supplier",
                    foreignField: "_id",
                    pipeline: [{$project: {supplierName: 1}}],
                    as: "supplier"
                }
            },
            {
                $lookup: {
                    from: "Items",
                    localField: "GINDetails.item",
                    foreignField: "_id",
                    pipeline: [
                        {
                            $project: {
                                supplierName: 1,
                                itemCode: 1,
                                itemName: 1,
                                itemPacking: 1,
                                primaryUnit: 1,
                                spin: 1,
                                hsn: 1,
                                gst: 1,
                                igst: 1,
                                sgst: 1,
                                cgst: 1,
                                ugst: 1
                            }
                        }
                    ],
                    as: "item"
                }
            }
        ];
        let rows = await GINRepository.getAllPaginate({pipeline, project, queryParams: req.query});
        return res.success(rows);
    } catch (e) {
        console.error("getAllServicePurchaseOrder", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @desc    create GoodsInwardEntry new Record
exports.create = asyncHandler(async (req, res) => {
    try {
        let existing = await Model.findOne(
            {
                MRNNumber: req.body.MRNNumber
            },
            {_id: 1}
        );
        if (existing) {
            let errors = MESSAGES.apiErrorStrings.Data_EXISTS("Goods Inward Entry");
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
            await this.insertInventory(itemDetails._id, itemDetails.MRNNumber.valueOf(), req.user);
            res.success({
                message: MESSAGES.apiSuccessStrings.ADDED("Goods Inward Entry")
            });
            // let mailCreateObj = {
            //     ginId: itemDetails._id,
            //     company: req.user.company,
            //     mailAction: "Create"
            // };
            // getGINMailConfig(mailCreateObj);
            let mailTriggerCreateObj = {
                subModuleId: itemDetails._id,
                action: "created",
                company: req.user.company,
                mailAction: "Create",
                collectionName: GOOD_INWARD_ENTRY.COLLECTION_NAME,
                message: `Goods Inward Entry Created - ${itemDetails?.GINNumber}`,
                module: STORES_MAIL_CONST.GIN.MODULE,
                subModule: STORES_MAIL_CONST.GIN.SUB_MODULE,
                isSent: false
            };
            await MailTriggerRepository.createDoc(mailTriggerCreateObj);
        } else {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.serverError(errors);
        }
    } catch (e) {
        console.error("create Goods Inward Entry", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
exports.insertInventory = async (GINId, MRNId, user) => {
    try {
        let MRNData = await updateMRNStatusOnGIN(MRNId);
        let inventoryInsertArray = await GINRepository.filteredGINList([
            {
                $match: {_id: ObjectId(GINId)}
            },
            {
                $unwind: {
                    path: "$GINDetails",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: "Items",
                    localField: "GINDetails.item",
                    foreignField: "_id",
                    pipeline: [
                        {
                            $project: {
                                itemCode: 1,
                                itemName: 1,
                                itemDescription: 1,
                                width: "$dualUnitsDimensionsDetails.widthInMM",
                                length: {
                                    $round: [{$multiply: ["$dualUnitsDimensionsDetails.lengthInM", 1000]}, 2]
                                },
                                SQM: "$dualUnitsDimensionsDetails.sqmPerRoll",
                                shelfLife: 1
                            }
                        }
                    ],
                    as: "GINDetails.item"
                }
            },
            {
                $unwind: {
                    path: "$GINDetails.item",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $addFields: {
                    expiryDate: {
                        $dateAdd: {
                            startDate: "$GINDate",
                            unit: "month",
                            amount: "$GINDetails.item.shelfLife"
                        }
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    company: user.company,
                    createdBy: user.sub,
                    updatedBy: user.sub,
                    GIN: "$_id",
                    GINDate: 1,
                    MRN: "$MRNNumber",
                    supplier: 1,
                    MRNNumber: MRNData?.MRNNumber,
                    MRNDate: MRNData?.MRNDate,
                    ICStatus: "IC Created",
                    // GINLineNumber: ele.GINLineNumber,
                    UOM: "$GINDetails.UOM",
                    primaryToSecondaryConversion: "$GINDetails.primaryToSecondaryConversion",
                    secondaryToPrimaryConversion: "$GINDetails.secondaryToPrimaryConversion",
                    primaryUnit: "$GINDetails.primaryUnit",
                    secondaryUnit: "$GINDetails.secondaryUnit",
                    conversionOfUnits: "$GINDetails.conversionOfUnits",
                    item: "$GINDetails.item._id",
                    referenceModel: "Items",
                    itemCode: "$GINDetails.item.itemCode",
                    itemName: "$GINDetails.item.itemName",
                    itemDescription: "$GINDetails.item.itemDescription",
                    width: "$GINDetails.item.width",
                    length: "$GINDetails.item.length",
                    SQM: "$GINDetails.item.SQM",
                    expiryDate: {$ifNull: ["$expiryDate", null]},
                    itemType: "$GINDetails.itemType",
                    itemSubCategory: "$GINDetails.itemSubCategory",
                    // openIRQty: "$GINDetails.GINQty",
                    updatedQty: {$literal: 0},
                    closedIRQty: "$GINDetails.GINQty",
                    standardRate: "$GINDetails.standardRate",
                    purchaseRate: "$GINDetails.purchaseRate",
                    purchaseRateUSD: "$GINDetails.purchaseRateUSD",
                    purchaseRatINR: "$GINDetails.purchaseRatINR",
                    lineValueINR: "$GINDetails.lineValueINR",
                    // releasedQty: "$GINDetails.releasedQty",
                    // rejectedQty: "$GINDetails.rejectedQty",
                    batchDate: "$GINDetails.batchDate",
                    deliveryLocation: 1,
                    storageLocationMapping: 1,
                    department: GOODS_TRANSFER_REQUEST_DEPT.STORES,
                    type: "InventoryCorrection"
                }
            }
        ]);
        if (inventoryInsertArray.length) {
            await InventoryRepository.insertManyDoc(inventoryInsertArray);
        }
    } catch (error) {
        console.error("error", error);
    }
};
// @desc    update GoodsInwardEntry  Record
exports.update = asyncHandler(async (req, res) => {
    try {
        let itemDetails = await Model.findById(req.params.id);
        if (!itemDetails) {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.preconditionFailed(errors);
        }
        itemDetails.updatedBy = req.user.sub;
        itemDetails = await generateCreateData(itemDetails, req.body);

        itemDetails = await itemDetails.save();
        if (itemDetails.GINStatus == "Report Generated") {
            await updateMRNStatusOnGIN(itemDetails.MRNNumber.valueOf());
        }
        return res.success({
            message: MESSAGES.apiSuccessStrings.UPDATE("Goods Inward Entry has been")
        });
    } catch (e) {
        console.error("update Goods Inward Entry", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @desc    deleteById GoodsInwardEntry Record
exports.deleteById = asyncHandler(async (req, res) => {
    try {
        const deleteItem = await Model.findById(req.params.id);
        if (deleteItem) {
            await deleteItem.remove();
            return res.success({
                message: MESSAGES.apiSuccessStrings.DELETED("Goods Inward Entry")
            });
        } else {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Goods Inward Entry");
            return res.preconditionFailed(errors);
        }
    } catch (e) {
        console.error("deleteById Goods Inward Entry", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @desc    getById GoodsInwardEntry Record
exports.getById = asyncHandler(async (req, res) => {
    try {
        let existing = await Model.findById(req.params.id)
            .populate("GINDetails.item", "itemName itemCode")
            .populate("supplier", "supplierName")
            .populate("MRNNumber", "MRNNumber");
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("GoodsInwardEntry");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        console.error("getById Goods Inward Entry", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @desc    getAllMasterData GoodsInwardEntry Record
exports.getAllMasterData = asyncHandler(async (req, res) => {
    try {
        let mrnList = await getAllMRNs(req.user.company);
        let suppliers = await getAllSuppliers(req.user.company);
        const autoIncrementNo = await getAndSetAutoIncrementNo(
            {...GOOD_INWARD_ENTRY.AUTO_INCREMENT_DATA()},
            req.user.company
        );
        return res.success({suppliers, mrnList, autoIncrementNo});
    } catch (error) {
        console.error("getAllMasterData Goods Inward Entry", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @desc    getAllServicePurchaseOrders GoodsInwardEntry Record
exports.getAllServicePurchaseOrders = asyncHandler(async company => {
    try {
        let rows = await Model.find({
            company: company,
            GINStatus: {$nin: ["Closed"]}
        })
            .populate(
                "MRNNumber",
                "_id supplierCode supplierName supplierCurrency supplierPurchaseType  supplierGST supplierAddress supplierContactMatrix supplierBillingAddress supplierShipingAddress"
            )
            .populate(
                "GINDetails.item",
                "_id itemCode itemName itemDescription spin hsn gst igst sgst cgst ugst itemType itemSubCategory"
            )
            .sort({createdAt: -1});
        return rows;
    } catch (e) {
        console.error("getAllServicePurchaseOrders", e);
    }
});
/** Dashboard Function - End */
exports.getGINCounts = async company => {
    try {
        const result = await Model.aggregate([
            {
                $addFields: {
                    matchDate: {$dateToString: {format: "%Y-%m-%d", date: "$GINDate"}}
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
                    _id: "$GINStatus",
                    counts: {$sum: 1}
                }
            }
        ]);
        return result[0]?.counts || 0;
    } catch (error) {
        console.error("Not able to get record ", error);
    }
};

exports.getTotalGINCreatedPerDay = async company => {
    const currentDate = dateToAnyFormat(new Date(), "YYYY-MM-DD");
    const rows = await Model.aggregate([
        {
            $addFields: {
                matchDate: {$dateToString: {format: "%Y-%m-%d", date: "$GINDate"}}
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
    return rows[0]?.count || 0;
};
