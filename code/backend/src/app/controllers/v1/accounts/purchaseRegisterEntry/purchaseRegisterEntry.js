const asyncHandler = require("express-async-handler");
const MESSAGES = require("../../../../helpers/messages.options");
const {
    getAllPurchaseRegistryEntryAttributes,
    getAllPREReportsAttributes
} = require("../../../../models/accounts/helpers/purchaseRegisterEntryHelper");
const {getAndSetAutoIncrementNo} = require("../../settings/autoIncrement/autoIncrement");
const {PURCHASE_REGISTER_ENTRY} = require("../../../../mocks/schemasConstant/accountsConstant");
const PurchaseRegistryEntryRepository = require("../../../../models/accounts/repository/purchaseRegisterEntryRepository");
const {ObjectId} = require("../../../../../config/mongoose");
const {filteredSupplierList} = require("../../../../models/purchase/repository/supplierRepository");
const {getAllModuleMaster} = require("../../settings/module-master/module-master");
const {filteredMRNList} = require("../../../../models/quality/repository/mrnRepository");
const {getAllSuppliers} = require("../../purchase/suppliers/suppliers");
const {getEndDateTime, getStartDateTime} = require("../../../../helpers/dateTime");
const {OPTIONS} = require("../../../../helpers/global.options");

exports.getAll = asyncHandler(async (req, res) => {
    try {
        let project = getAllPurchaseRegistryEntryAttributes();
        let pipeline = [
            {
                $match: {
                    company: ObjectId(req.user.company),
                    status: {
                        $nin: [OPTIONS.defaultStatus.REPORT_GENERATED]
                    }
                }
            }
        ];
        let rows = await PurchaseRegistryEntryRepository.getAllPaginate({
            pipeline,
            project,
            queryParams: req.query
        });
        return res.success(rows);
    } catch (e) {
        console.error("getAll", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.create = asyncHandler(async (req, res) => {
    try {
        let createdObj = {
            company: req.user.company,
            createdBy: req.user.sub,
            updatedBy: req.user.sub,
            ...req.body
        };
        const itemDetails = await PurchaseRegistryEntryRepository.createDoc(createdObj);
        if (itemDetails) {
            res.success({
                message: MESSAGES.apiSuccessStrings.ADDED("Purchase Registry Entry")
            });
        } else {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.serverError(errors);
        }
    } catch (e) {
        console.error("create Purchase Registry Entry", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.update = asyncHandler(async (req, res) => {
    try {
        let itemDetails = await PurchaseRegistryEntryRepository.getDocById(req.params.id);
        if (!itemDetails) {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.preconditionFailed(errors);
        }
        itemDetails.updatedBy = req.user.sub;
        itemDetails = await PurchaseRegistryEntryRepository.updateDoc(itemDetails, req.body);
        return res.success({
            message: MESSAGES.apiSuccessStrings.UPDATE("Purchase Registry Entry has been")
        });
    } catch (e) {
        console.error("update Purchase Registry Entry", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.deleteById = asyncHandler(async (req, res) => {
    try {
        const deleteItem = await PurchaseRegistryEntryRepository.deleteDoc({_id: req.params.id});
        if (deleteItem) {
            return res.success({
                message: MESSAGES.apiSuccessStrings.DELETED("Purchase Registry Entry")
            });
        } else {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Purchase Registry Entry");
            return res.preconditionFailed(errors);
        }
    } catch (e) {
        console.error("deleteById Purchase Registry Entry", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getById = asyncHandler(async (req, res) => {
    try {
        let existing = await PurchaseRegistryEntryRepository.getDocById(req.params.id);
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Purchase Registry Entry");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        console.error("getById Purchase Registry Entry", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAllMasterData = asyncHandler(async (req, res) => {
    try {
        const autoIncrementNo = await getAndSetAutoIncrementNo(
            PURCHASE_REGISTER_ENTRY.AUTO_INCREMENT_DATA(),
            req.user.company,
            false
        );
        const purchaseCategoryOptions = await getAllModuleMaster(req.user.company, "ACCOUNT_PURCHASE_CATEGORY");
        const suppliersOptions = await filteredSupplierList([
            {$match: {company: ObjectId(req.user.company), isSupplierActive: "A"}},
            {$sort: {supplierName: 1}},
            {
                $project: {
                    _id: 0,
                    supplierName: 1,
                    supplier: "$_id",
                    supplierGST: 1,
                    supplierCurrency: 1
                }
            }
        ]);
        return res.success({autoIncrementNo, purchaseCategoryOptions, suppliersOptions});
    } catch (error) {
        console.error("getAllMasterData Purchase Registry Entry", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
exports.getAllMRNBySupplierId = asyncHandler(async (req, res) => {
    try {
        let currentDate = new Date();
        let thirtyDaysAgoDate = new Date(currentDate);
        thirtyDaysAgoDate.setDate(currentDate.getDate() - 30);
        const MRNList = await filteredMRNList([
            {
                $match: {
                    company: ObjectId(req.user.company),
                    supplier: ObjectId(req.params.id),
                    MRNDate: {
                        $gte: thirtyDaysAgoDate
                    }
                }
            },
            {
                $lookup: {
                    from: "Supplier",
                    localField: "supplier",
                    foreignField: "_id",
                    pipeline: [{$project: {supplierName: 1}}],
                    as: "supplier"
                }
            },
            {$unwind: "$supplier"},
            {
                $project: {
                    _id: 1,
                    MRNNumber: 1,
                    MRNDate: {$dateToString: {format: "%d-%m-%Y", date: "$MRNDate"}},
                    supplierName: "$supplier.supplierName",
                    MRNStatus: 1,
                    deliveryLocation: 1
                }
            }
        ]);
        return res.success(MRNList);
    } catch (error) {
        console.error("getAllMasterData Purchase Registry Entry", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
exports.getAllReports = asyncHandler(async (req, res) => {
    try {
        const suppliersOptions = await getAllSuppliers(req.user.company, {supplierName: 1});
        const {supplier = null, toDate = null, fromDate = null} = req.query;
        let query = {
            company: ObjectId(req.user.company),
            status: OPTIONS.defaultStatus.REPORT_GENERATED,
            ...(!!supplier && {
                supplier: ObjectId(supplier)
            }),
            ...(!!toDate &&
                !!fromDate && {
                    PEntryDate: {
                        $lte: getEndDateTime(toDate),
                        $gte: getStartDateTime(fromDate)
                    }
                })
        };
        let project = getAllPREReportsAttributes();
        let pipeline = [
            {
                $match: query
            }
        ];
        let rows = await PurchaseRegistryEntryRepository.getAllReportsPaginate({
            pipeline,
            project,
            queryParams: req.query,
            groupValues: [
                {
                    $group: {
                        _id: null,
                        totalTaxableAmt: {$sum: "$roundOffTotalAmt"}
                    }
                },
                {
                    $project: {
                        totalTaxableAmt: {$round: ["$totalTaxableAmt", 2]},
                        _id: 0
                    }
                }
            ]
        });
        return res.success({
            suppliersOptions,
            ...rows
        });
    } catch (e) {
        console.error("getAllReports", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
