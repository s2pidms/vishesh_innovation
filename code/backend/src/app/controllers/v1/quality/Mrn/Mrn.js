const asyncHandler = require("express-async-handler");
const Model = require("../../../../models/quality/mrnModel");
const RejectQtyModel = require("../../../../models/quality/rejectedQtyMgntModel");
const MESSAGES = require("../../../../helpers/messages.options");
const {generateCreateData} = require("../../../../helpers/global.options");
const {
    getAllGrnList,
    updateGRNStatusOnMRN,
    getMonthlyGeneratedGRNVolume
} = require("../../stores/goodsReceiptNote/goodsReceiptNote");
const {default: mongoose} = require("mongoose");
const {
    getFirstDateOfCurrentFiscalYear,
    getLastDateOfCurrentFiscalYear,
    getFiscalMonthsName
} = require("../../../../utilities/utility");
const {CONSTANTS} = require("../../../../../config/config");
const {dateToAnyFormat} = require("../../../../helpers/dateTime");
const {getAllRMSpecificationByItemId} = require("../rm-specification/rm-specification");
const {getAllMRNAttributes} = require("../../../../models/quality/helpers/mrnHelper");
// const {getMRNMailConfig} = require("./MrnMail");
const {getAndSetAutoIncrementNo} = require("../../settings/autoIncrement/autoIncrement");
const {MATERIAL_RECEIPT_NOTE} = require("../../../../mocks/schemasConstant/qualityConstant");
const {filteredSupplierList} = require("../../../../models/purchase/repository/supplierRepository");
const MRNRepository = require("../../../../models/quality/repository/mrnRepository");

const ItemCategorySpecificationsRepository = require("../../../../models/quality/repository/itemCategorySpecificationsRepository");
const ObjectId = mongoose.Types.ObjectId;
const MailTriggerRepository = require("../../../../models/settings/repository/mailTriggerRepository");
const {QUALITY_MAIL_CONST} = require("../../../../mocks/mailTriggerConstants");
const {getAllModuleMaster} = require("../../settings/module-master/module-master");
const {filteredCompanyList} = require("../../../../models/settings/repository/companyRepository");
const CompanyRepository = require("../../../../models/settings/repository/companyRepository");

exports.getAll = asyncHandler(async (req, res) => {
    try {
        let project = getAllMRNAttributes();
        let pipeline = [
            {
                $match: {
                    company: ObjectId(req.user.company),
                    MRNStatus: {$in: ["Rejected", "Partially Released", "Released"]}
                }
            },
            {
                $addFields: {
                    createdAT: {$dateToString: {format: "%d-%m-%Y", date: "$createdAt"}}
                }
            },
            {
                $lookup: {
                    from: "GRN",
                    localField: "GRNNumber",
                    foreignField: "_id",
                    pipeline: [{$project: {GRNNumber: 1, _id: 1, GRNDate: 1}}],
                    as: "GRNNumber"
                }
            },
            {$unwind: "$GRNNumber"},
            {
                $lookup: {
                    from: "Supplier",
                    localField: "supplier",
                    foreignField: "_id",
                    pipeline: [{$project: {supplierName: 1, _id: 1}}],
                    as: "supplier"
                }
            },
            {$unwind: "$supplier"}
        ];

        let rows = await MRNRepository.getAllPaginate({pipeline, project, queryParams: req.query});
        return res.success(rows);
    } catch (e) {
        console.error("getAllMRN", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.create = asyncHandler(async (req, res) => {
    try {
        let existing = await Model.findOne(
            {
                GRNNumber: req.body.GRNNumber
            },
            {_id: 1}
        );
        if (existing) {
            let errors = MESSAGES.apiErrorStrings.Data_EXISTS("MRN");
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
        await updateGRNStatusOnMRN(itemDetails.GRNNumber);
        if (itemDetails) {
            res.success({
                message: MESSAGES.apiSuccessStrings.ADDED("MRN")
            });
            // let mailCreateObj = {
            //     MRNId: itemDetails._id,
            //     action: "created",
            //     company: req.user.company,
            //     mailAction: itemDetails.MRNStatus
            // };
            // getMRNMailConfig(mailCreateObj);
            let mailTriggerCreateObj = {
                subModuleId: itemDetails._id,
                action: "created",
                company: req.user.company,
                mailAction: itemDetails.MRNStatus,
                collectionName: MATERIAL_RECEIPT_NOTE.COLLECTION_NAME,
                message: `Material Release Note Created - ${itemDetails.MRNNumber}`,
                module: QUALITY_MAIL_CONST.MRN.MODULE,
                subModule: QUALITY_MAIL_CONST.MRN.SUB_MODULE,
                isSent: false
            };
            await MailTriggerRepository.createDoc(mailTriggerCreateObj);
        }
    } catch (e) {
        console.error("create MRN", e);
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

        itemDetails = await itemDetails.save();
        if (itemDetails.MRNStatus == "Report Generated") {
            await updateGRNStatusOnMRN(itemDetails.GRNNumber.valueOf());
            // if (itemDetails.MRNDetails.some(x => x.rejectedQty > 0)) {
            //     await rejectQtyUpdate(itemDetails);
            // }
            await rejectQtyUpdate(itemDetails);
        }
        if (itemDetails) {
            res.success({
                message: `MRN has been ${
                    itemDetails.MRNStatus == "Created" ? "updated" : itemDetails.MRNStatus.toLowerCase()
                } successfully`
            });
            // let mailUpdateObj = {
            //     MRNId: itemDetails._id,
            //     action: "modified",
            //     company: req.user.company,
            //     mailAction: itemDetails.MRNStatus
            // };
            // getMRNMailConfig(mailUpdateObj);
            let mailTriggerCreateObj = {
                subModuleId: itemDetails._id,
                action: itemDetails.MRNStatus,
                company: req.user.company,
                mailAction: itemDetails.MRNStatus,
                collectionName: MATERIAL_RECEIPT_NOTE.COLLECTION_NAME,
                message: `Material Release Note ${itemDetails.MRNStatus} - ${itemDetails.MRNNumber}`,
                module: QUALITY_MAIL_CONST.MRN.MODULE,
                subModule: QUALITY_MAIL_CONST.MRN.SUB_MODULE,
                isSent: false
            };
            await MailTriggerRepository.createDoc(mailTriggerCreateObj);
        }
    } catch (e) {
        console.error("update MRN", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @route   PUT /quality/inventoryCorrection/delete/:id
exports.deleteById = asyncHandler(async (req, res) => {
    try {
        const deleteItem = await Model.findById(req.params.id);
        if (deleteItem) {
            await deleteItem.remove();
            return res.success({
                message: MESSAGES.apiSuccessStrings.DELETED("MRN")
            });
        } else {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("MRN");
            return res.preconditionFailed(errors);
        }
    } catch (e) {
        console.error("deleteById MRN", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @route   GET /quality/inventoryCorrection/getById/:id
exports.getById = asyncHandler(async (req, res) => {
    try {
        let existing = await Model.findById(req.params.id)
            .populate("MRNDetails.item", "_id itemCode itemName itemDescription conversionOfUnits")
            .populate("supplier", "supplierName")

            .populate("GRNNumber", "GRNNumber");
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("MRN");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        console.error("getById MRN", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
exports.getMRNDetailsById = asyncHandler(async (req, res) => {
    try {
        let existing = await Model.findById(req.params.id)
            .populate("MRNDetails.item", "_id itemCode itemName itemDescription conversionOfUnits")
            .populate("supplier", "supplierName")
            .populate("createdBy", "name")
            .populate("GRNNumber", "GRNNumber");
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("MRN");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        console.error("getById MRN", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @route   GET /quality/inventoryCorrection/getAllMasterData
exports.getAllMasterData = asyncHandler(async (req, res) => {
    try {
        const autoIncrementNo = await getAndSetAutoIncrementNo(
            {...MATERIAL_RECEIPT_NOTE.AUTO_INCREMENT_DATA()},
            req.user.company
        );
        const grnList = await getAllGrnList(req.user.company);
        const suppliersOptions = await filteredSupplierList([
            {$match: {company: ObjectId(req.user.company), isSupplierActive: "A"}},
            {$sort: {supplierName: 1}},
            {
                $project: {
                    supplierName: 1,
                    _id: 1
                }
            }
        ]);
        const locationOptions = await filteredCompanyList([
            {
                $match: {
                    _id: ObjectId(req.user.company)
                }
            },
            {$unwind: "$placesOfBusiness"},
            {$group: {_id: null, locationIDs: {$addToSet: "$placesOfBusiness.locationID"}}},
            {
                $unwind: "$locationIDs"
            },
            {$project: {_id: 0, label: "$locationIDs", value: "$locationIDs"}}
        ]);
        const QCLevelsOptions = await getAllModuleMaster(req.user.company, "QUALITY_CONTROL_LEVEL");
        return res.success({
            autoIncrementNo,
            suppliersOptions,
            grnList,
            QCLevelsOptions,
            locationOptions: locationOptions
        });
    } catch (error) {
        console.error("getAllMasterData MRN", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
exports.getAllMRNs = asyncHandler(async company => {
    try {
        let rows = await Model.find({
            MRNStatus: {$in: ["Report Generated"]},
            company: company
        })
            .populate("supplier", "_id supplierName supplierPurchaseType supplierCurrency")
            .populate("GRNNumber", "_id storageLocationMapping")
            .populate(
                "MRNDetails.item",
                "_id  gst igst cgst sgst ugst itemCode itemName itemDescription hsn itemType itemSubCategory"
            )
            .sort({createdAt: -1});
        return rows;
    } catch (e) {
        console.error("MRN", e);
    }
});

exports.updateMRNStatusOnGIN = async mrnId => {
    try {
        let MRN = await Model.findById(mrnId);
        MRN.MRNStatus = "Closed";
        await MRN.save();
        return {MRNNumber: MRN.MRNNumber, MRNDate: MRN.MRNDate};
    } catch (error) {
        console.error("updateMRNStatusOnGIN::::: Error ", error);
    }
};

// RejectQtyModel
async function rejectQtyUpdate(itemDetails) {
    try {
        for (let i = 0; i < itemDetails.MRNDetails.length; i++) {
            const ele = itemDetails.MRNDetails[i];
            // if (ele.rejectedQty > 0) {
            let obj = {
                company: itemDetails.company,
                createdBy: itemDetails.createdBy,
                updatedBy: itemDetails.updatedBy,
                supplier: itemDetails.supplier,
                item: ele.item,
                UOM: ele.UOM,
                standardRate: ele.standardRate,
                purchaseRate: ele.purchaseRate,
                MRNRejectedQty: ele.rejectedQty
            };
            let rejectedQtyObj = await RejectQtyModel.findOne({
                supplier: itemDetails.supplier,
                item: ele.item
            });
            if (rejectedQtyObj && Object.keys(rejectedQtyObj).length) {
                rejectedQtyObj.MRNRejectedQty += +ele.rejectedQty;
                await rejectedQtyObj.save();
            } else {
                new RejectQtyModel(obj).save();
            }
            // }
        }
    } catch (error) {
        console.error(error);
    }
}
exports.getAllMRNCounts = async company => {
    const rows = await Model.aggregate([
        {
            $addFields: {
                matchDate: {$dateToString: {format: "%Y-%m-%d", date: "$createdAt"}}
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
                _id: null,
                rejectCount: {$sum: {$cond: [{$eq: ["$MRNStatus", "Rejected"]}, 1, 0]}},
                partiallyReleaseCount: {$sum: {$cond: [{$eq: ["$MRNStatus", "Partially Released"]}, 1, 0]}},
                releasedCount: {$sum: {$cond: [{$eq: ["$MRNStatus", "Released"]}, 1, 0]}},
                generatedCount: {$sum: {$cond: [{$eq: ["$MRNStatus", "Report Generated"]}, 1, 0]}},
                closedCount: {
                    $sum: {
                        $cond: [{$eq: ["$MRNStatus", "Closed"]}, 1, 0]
                    }
                }
            }
        },
        {
            $project: {
                MRNRejectedCount: "$rejectCount",
                MRNPartiallyReleaseCount: "$partiallyReleaseCount",
                MRNReleasedCount: "$releasedCount",
                MRNPendingForGINCount: "$generatedCount",
                allMRNCount: {$sum: ["$generatedCount", "$closedCount"]}
            }
        }
    ]);
    return rows.length > 0 ? rows[0] : [];
};
exports.getAllMonthlyMRNTrends = async company => {
    try {
        let generatedGRN = await getMonthlyGeneratedGRNVolume(company);
        const monthsArray = getFiscalMonthsName();
        let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let result = await Model.aggregate([
            {
                $addFields: {
                    matchDate: {$dateToString: {format: "%Y-%m-%d", date: "$createdAt"}}
                }
            },
            {
                $match: {
                    company: ObjectId(company),
                    MRNStatus: {$in: ["Report Generated", "Closed"]},
                    matchDate: {
                        $gte: dateToAnyFormat(getFirstDateOfCurrentFiscalYear(), "YYYY-MM-DD"),
                        $lte: dateToAnyFormat(getLastDateOfCurrentFiscalYear(), "YYYY-MM-DD")
                    }
                }
            },
            {
                $group: {
                    _id: {year_month: {$substrCP: ["$createdAt", 0, 7]}},
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
                data[index] = propertyValues[n];
                n++;
            });
            monthlyMRNTrend = {months: monthsArray, orders: data};
        } else {
            monthlyMRNTrend = {months: monthsArray, orders: []};
        }
        return {monthlyMRNTrend, generatedGRN};
    } catch (error) {
        console.error(error);
    }
};

exports.getRMSpecificationByItemId = asyncHandler(async (req, res) => {
    try {
        let RMSpecification = await getAllRMSpecificationByItemId(req.user.company, req.query.itemId);
        if (!RMSpecification) {
            RMSpecification = await ItemCategorySpecificationsRepository.findOneDoc(
                {
                    company: ObjectId(req.user.company),
                    itemCategory: req.query.itemCategory
                },
                {
                    specificationInfo: 1
                }
            );
        }
        return res.success(RMSpecification);
    } catch (e) {
        console.error("getAllMasterData Pre Dispatch Inspection", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getByMRNIdForRMInspection = asyncHandler(async (req, res) => {
    try {
        const MRNData = await Model.aggregate([
            {
                $match: {_id: ObjectId(req.query.MRNId)}
            },
            {
                $lookup: {
                    from: "GRN",
                    localField: "GRNNumber",
                    foreignField: "_id",
                    pipeline: [{$project: {GRNNumber: 1, GRNDate: 1, _id: 1}}],
                    as: "GRNNumber"
                }
            },
            {$unwind: "$GRNNumber"},
            {
                $lookup: {
                    from: "Supplier",
                    localField: "supplier",
                    foreignField: "_id",
                    pipeline: [{$project: {supplierName: 1, id: 1}}],
                    as: "supplier"
                }
            },
            {$unwind: "$supplier"},
            {
                $lookup: {
                    from: "User",
                    localField: "updatedBy",
                    foreignField: "_id",
                    pipeline: [{$project: {name: 1, id: 1}}],
                    as: "updatedBy"
                }
            },
            {$unwind: "$updatedBy"},
            {$unwind: "$MRNDetails"},
            {
                $match: {
                    "MRNDetails.QCLevels": "L3"
                }
            },
            {
                $lookup: {
                    from: "Items",
                    localField: "MRNDetails.item",
                    foreignField: "_id",
                    pipeline: [
                        {
                            $project: {
                                itemName: 1,
                                itemCode: 1,
                                UOM: 1,
                                itemDescription: 1,
                                batchDate: 1,
                                batchNo: 1,
                                GRNQty: 1
                            }
                        }
                    ],
                    as: "MRNDetails.item"
                }
            },
            {$unwind: "$MRNDetails.item"},
            {
                $project: {
                    itemCode: "$MRNDetails.item.itemCode",
                    itemName: "$MRNDetails.item.itemName",
                    itemDescription: "$MRNDetails.item.itemDescription",
                    MRNNumber: 1,
                    MRNDate: {$dateToString: {format: "%d-%m-%Y", date: "$MRNDate"}},
                    supplierName: "$supplier.supplierName",
                    GRNNumber: "$GRNNumber.GRNNumber",
                    MRNStatus: 1,
                    GRNDate: {$dateToString: {format: "%d-%m-%Y", date: "$GRNNumber.GRNDate"}},
                    GRNQty: "$MRNDetails.GRNQty",
                    supplierInvoice: 1,
                    supplierDate: {$dateToString: {format: "%d-%m-%Y", date: "$supplierDate"}},
                    batchNo: "$MRNDetails.batchNo",
                    batchDate: {$dateToString: {format: "%d-%m-%Y", date: "$MRNDetails.batchDate"}},
                    UOM: "$MRNDetails.UOM",
                    QCLevels: "$MRNDetails.QCLevels",
                    QCLevelsDetails: "$MRNDetails.QCLevelsDetails",
                    status: "$MRNDetails.status",
                    deviationApprovedBy: "$MRNDetails.deviationApprovedBy",
                    MRNRemarks: 1,
                    MRNReleasedBy: "$updatedBy.name"
                }
            }
        ]);
        const companyData = await CompanyRepository.getDocById(req.user.company, {
            logo: {$concat: [`${CONSTANTS.domainUrl}company/`, "$logo"]}
        });
        return res.success({MRNData, companyData});
    } catch (e) {
        console.error("getByMRNIdForRMInspection==>", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
exports.getTotalNoOfMRNPerDay = async company => {
    const currentDate = dateToAnyFormat(new Date(), "YYYY-MM-DD");
    const rows = await Model.aggregate([
        {
            $addFields: {
                matchDate: {$dateToString: {format: "%Y-%m-%d", date: "$MRNDate"}}
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
                MRNCreated: {$sum: {$cond: [{$eq: ["$MRNStatus", "Created"]}, 1, 0]}},
                MRNReleased: {$sum: {$cond: [{$eq: ["$MRNStatus", "Released"]}, 1, 0]}},
                MRNRejected: {$sum: {$cond: [{$eq: ["$MRNStatus", "Rejected"]}, 1, 0]}}
            }
        },
        {
            $project: {
                _id: 0,
                MRNCreated: 1,
                MRNReleased: 1,
                MRNRejected: 1
            }
        }
    ]);
    return rows.length > 0 ? rows[0] : [];
};
