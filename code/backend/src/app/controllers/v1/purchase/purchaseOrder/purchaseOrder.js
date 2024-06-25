const asyncHandler = require("express-async-handler");
const Model = require("../../../../models/purchase/purchaseOrderModel");
const GRN = require("../../../../models/stores/GRNModel");
const MESSAGES = require("../../../../helpers/messages.options");
const {
    outputData,
    getAllAggregationFooter,
    getAutoIncrementNumber,
    checkDomesticCustomer
} = require("../../../../helpers/utility");
const {generateCreateData, getMatchData, OPTIONS} = require("../../../../helpers/global.options");
const {findAppParameterValue} = require("../../settings/appParameter/appParameter");
const {getAllItemsBySupplierId} = require("../items/items");
const {default: mongoose} = require("mongoose");
const {CONSTANTS} = require("../../../../../config/config");
const {dateToAnyFormat} = require("../../../../helpers/dateTime");
const {getAllPurchaseCategory} = require("../../settings/purchaseCategoryMaster/purchaseCategoryMaster");
const {getAllPaymentTerms} = require("../../sales/paymentTerms/paymentTerms");
const PurchaseOrderHelper = require("../../../../models/purchase/helpers/purchaseOrderHelper");
// const {getPOMailConfig} = require("./purchaseOrderMail");
const {OTHER_CHARGES_SAC_CODE, SALES_CATEGORY} = require("../../../../mocks/constantData");
const {getSACObj} = require("../SAC/SAC");
const {getAndSetAutoIncrementNo} = require("../../settings/autoIncrement/autoIncrement");
const {PURCHASE_ORDER} = require("../../../../mocks/schemasConstant/purchaseConstant");
const PurchaseOrderRepository = require("../../../../models/purchase/repository/purchaseOrderRepository");
const SupplierRepository = require("../../../../models/purchase/repository/supplierRepository");
const {getAllModuleMaster} = require("../../settings/module-master/module-master");
const {getAllTransporter} = require("../../sales/transporter/transporter");
const MailTriggerRepository = require("../../../../models/settings/repository/mailTriggerRepository");
const {PURCHASE_MAIL_CONST} = require("../../../../mocks/mailTriggerConstants");
const {filteredCompanyList} = require("../../../../models/settings/repository/companyRepository");
const {filteredServiceChargesList} = require("../../../../models/settings/repository/serviceChargesRepository");
const {purchaseUOMPipe} = require("../../settings/UOMUnitMaster/UOMUnitMaster");
const ObjectId = mongoose.Types.ObjectId;

exports.getAll = asyncHandler(async (req, res) => {
    try {
        const {statusArray = null} = req.query;
        let project = PurchaseOrderHelper.getAllPurchaseOrderAttributes({});
        if (req.query.excel == "true") {
            project = PurchaseOrderHelper.getAllPurchaseOrderAttributes({
                orderReference: 1,
                totalPPV: 1,
                deliveryLocation: 1,
                PORemarks: 1
            });
        }
        let pipeline = [
            {$match: {company: ObjectId(req.user.company), POStatus: {$nin: statusArray}}},
            {
                $addFields: {
                    netPOValue: {$toString: "$netPOValue"},
                    PODateS: {$dateToString: {format: "%d-%m-%Y", date: "$PODate"}},
                    POValidity: {$dateToString: {format: "%d-%m-%Y", date: "$POValidity"}}
                }
            },
            {
                $lookup: {
                    from: "Supplier",
                    localField: "supplier",
                    foreignField: "_id",
                    pipeline: [{$project: {_id: 0, supplierName: 1}}],
                    as: "supplier"
                }
            },
            {$unwind: "$supplier"}
        ];
        let rows = await PurchaseOrderRepository.getAllPaginate({
            pipeline,
            project,
            queryParams: req.query
        });
        return res.success(rows);
    } catch (e) {
        console.error("getAllPO", e);
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
        const saveObj = new Model(createdObj);
        saveObj.PODetails.map(x => {
            x.balancedQty = x.POQty;
            return x;
        });
        const itemDetails = await saveObj.save();
        if (itemDetails) {
            res.success({
                message: MESSAGES.apiSuccessStrings.ADDED("Purchase Order")
            });
            // let mailCreateObj = {
            //     POId: itemDetails._id,
            //     action: "created",
            //     company: req.user.company,
            //     mailAction: "Create"
            // };
            // getPOMailConfig(mailCreateObj);
            let mailTriggerCreateObj = {
                subModuleId: itemDetails._id,
                action: "created",
                company: req.user.company,
                mailAction: "Create",
                collectionName: PURCHASE_ORDER.COLLECTION_NAME,
                message: `Purchase Order Created - ${itemDetails.PONumber}`,
                module: PURCHASE_MAIL_CONST.GENERATE_PO.MODULE,
                subModule: PURCHASE_MAIL_CONST.GENERATE_PO.SUB_MODULE,
                isSent: false
            };
            await MailTriggerRepository.createDoc(mailTriggerCreateObj);
        }
    } catch (e) {
        console.error("create PurchaseOrder", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.update = asyncHandler(async (req, res) => {
    try {
        let itemDetails = await Model.findById(req.params.id);
        itemDetails.updatedBy = req.user.sub;
        if (!itemDetails) {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.preconditionFailed(errors);
        }
        itemDetails.updatedBy = req.user.sub;
        itemDetails.updatedAt = new Date();
        itemDetails = await generateCreateData(itemDetails, req.body);
        itemDetails = await itemDetails.save();
        if (itemDetails) {
            res.success({
                message: `Purchase Order has been ${
                    itemDetails.POStatus == "Awaiting Approval" ? "updated" : itemDetails.POStatus.toLowerCase()
                } successfully`
            });
            let actions = {
                "Awaiting Approval": "Modified",
                Approved: "Approved",
                Rejected: "Rejected",
                "Report Generated": "Report Generated"
            };
            // let mailUpdateObj = {
            //     POId: itemDetails._id,
            //     action: "modified",
            //     company: req.user.company,
            //     mailAction: itemDetails.POStatus
            // };
            // getPOMailConfig(mailUpdateObj);
            let mailTriggerCreateObj = {
                subModuleId: itemDetails._id,
                action: actions[itemDetails.POStatus],
                company: req.user.company,
                mailAction: actions[itemDetails.POStatus],
                collectionName: PURCHASE_ORDER.COLLECTION_NAME,
                message: `Purchase Order ${actions[itemDetails.POStatus]} - ${itemDetails.PONumber}`,
                module: PURCHASE_MAIL_CONST.GENERATE_PO.MODULE,
                subModule: PURCHASE_MAIL_CONST.GENERATE_PO.SUB_MODULE,
                isSent: false
            };
            await MailTriggerRepository.createDoc(mailTriggerCreateObj);
        }
    } catch (e) {
        console.error("update PurchaseOrder", e);
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
                message: MESSAGES.apiSuccessStrings.DELETED("Purchase Order")
            });
        } else {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Purchase Order");
            return res.preconditionFailed(errors);
        }
    } catch (e) {
        console.error("deleteById PurchaseOrder", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getById = asyncHandler(async (req, res) => {
    try {
        let existing = await Model.findById(req.params.id)
            .populate(
                "supplier",
                "supplierCode supplierName supplierCurrency supplierINCOTerms supplierPurchaseType supplierPaymentTerms supplierGST supplierAddress supplierContactMatrix supplierBillingAddress supplierShippingAddress supplierContactMatrix"
            )
            .populate(
                "PODetails.item",
                "itemCode itemName itemDescription itemPacking spin hsn gst igst sgst cgst ugst supplierDetails primaryUnit primaryToSecondaryConversion secondaryUnit secondaryToPrimaryConversion conversionOfUnits deliveryCount deliverySchedule"
            )
            .lean();
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("PurchaseOrder");
            return res.unprocessableEntity(errors);
        } else {
            existing.PODetails = existing.PODetails.map(ele => {
                let itemData = ele?.item;
                return {
                    POLineNumber: ele.POLineNumber,
                    itemCode: itemData?.itemCode,
                    name: itemData?.itemName,
                    description: itemData?.itemDescription,
                    UOM: ele.UOM ? ele.UOM : ele.primaryUnit,
                    unitConversion: ele.unitConversion,
                    primaryUnit: ele.primaryUnit,
                    secondaryUnit: ele.secondaryUnit,
                    primaryToSecondaryConversion: ele.primaryToSecondaryConversion,
                    secondaryToPrimaryConversion: ele.secondaryToPrimaryConversion,
                    POQty: ele.POQty,
                    balancedQty: ele.balancedQty,
                    standardRate: ele.standardRate,
                    purchaseRate: ele.purchaseRate,
                    lineValue: ele.lineValue,
                    netRate: ele.netRate,
                    discount: ele.discount,
                    linePPV: ele.linePPV,
                    stdCostUom1: ele.stdCostUom1,
                    stdCostUom2: ele.stdCostUom2,
                    deliveryDate: dateToAnyFormat(ele.deliveryDate, "YYYY-MM-DD"),
                    gst: ele.gst,
                    igst: ele.igst,
                    cgst: ele.cgst,
                    sgst: ele.sgst,
                    ugst: ele.ugst,
                    deliveryCount: ele.deliveryCount,
                    deliverySchedule: ele.deliverySchedule,
                    item: itemData?._id
                };
            });

            if (existing.POStatus === OPTIONS.defaultStatus.AWAITING_APPROVAL) {
                let itemsList = await getAllItemsBySupplierId(req.user.company, existing.supplier._id);
                for (const ele of existing.PODetails) {
                    itemsList = itemsList.filter(x => x.item.valueOf() != ele.item.valueOf());
                }
                existing.PODetails = [...existing.PODetails, ...itemsList];
            }
        }
        return res.success(existing);
    } catch (e) {
        console.error("getById PurchaseOrder", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @desc    getById PurchaseOrder Record
exports.getPODetailsById = asyncHandler(async (req, res) => {
    try {
        let existing = await Model.findById(req.params.id)
            .populate(
                "supplier",
                " supplierCode supplierName supplierCurrency supplierINCOTerms supplierPurchaseType supplierPaymentTerms supplierGST supplierAddress supplierContactMatrix supplierBillingAddress supplierShippingAddress supplierContactMatrix"
            )
            .populate(
                "PODetails.item",
                "itemCode itemName itemDescription itemPacking spin hsn gst igst sgst cgst ugst supplierDetails primaryUnit primaryToSecondaryConversion secondaryUnit secondaryToPrimaryConversion"
            )
            .populate({
                path: "company",
                model: "Company",
                select: {
                    companyName: 1,
                    GSTIN: 1,
                    placesOfBusiness: 1,
                    contactInfo: 1,
                    companyBillingAddress: 1,
                    companyContactPersonAltNum: 1,
                    PODomesticTemplates: 1,
                    POImportsTemplates: 1,
                    logoUrl: {$concat: [`${CONSTANTS.domainUrl}company/`, "$logo"]},
                    companySignatureUrl: {$concat: [`${CONSTANTS.domainUrl}company/`, "$companySignature"]},
                    companyPdfHeaderUrl: {$concat: [`${CONSTANTS.domainUrl}company/`, "$companyPdfHeader"]}
                }
            })
            .lean();
        existing = await getDataPDF(existing);
        if (existing && existing.changedPaymentTerms) {
            existing.supplier.supplierPaymentTerms = existing.changedPaymentTerms;
        }
        for await (const x of existing.PODetails) {
            x.item.supplierPartNo =
                x.item.supplierDetails.find(y => String(y.supplierId) == String(existing.supplier._id))?.spin ?? "";
            x.UOM = await purchaseUOMPipe(x.UOM, existing.company._id);
        }
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("PurchaseOrder");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        console.error("getById Purchase Order", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @desc    getAllMasterData PurchaseOrder Record
exports.getAllMasterData = asyncHandler(async (req, res) => {
    try {
        const purchaseCategoryList = await getAllPurchaseCategory(req.user.company, null);
        let autoIncValues = {};
        let purchaseCategoryOptions;
        if (purchaseCategoryList.length > 0) {
            purchaseCategoryOptions = purchaseCategoryList.map(x => {
                return {
                    label: x.category,
                    value: x.category
                };
            });
            for (const ele of purchaseCategoryList) {
                autoIncValues[ele.category] = getAutoIncrementNumber(ele.prefix, "", ele.nextAutoIncrement, ele.digit);
            }
        } else {
            const autoIncrementedNo = await getAndSetAutoIncrementNo(
                {...PURCHASE_ORDER.AUTO_INCREMENT_DATA()},
                req.user.company
            );
            purchaseCategoryOptions = await findAppParameterValue("PURCHASE_TYPE", req.user.company);
            purchaseCategoryOptions = purchaseCategoryOptions.split(",").map(x => {
                return {
                    label: x,
                    value: x
                };
            });
            for (const ele of purchaseCategoryOptions) {
                autoIncValues[ele.label] = autoIncrementedNo;
            }
        }
        // const suppliersOptions = await filteredSupplierList([
        //     {$match: {company: ObjectId(req.user.company), isSupplierActive: "A"}},
        //     {$sort: {supplierName: 1}},
        //     {
        //         $addFields: {
        //             supplierBillingAddress: {$arrayElemAt: ["$supplierBillingAddress", 0]}
        //         }
        //     },
        //     {
        //         $project: {
        //             label: "$supplierName",
        //             value: "$_id",
        //             supplierCode: 1,
        //             supplierPurchaseType: 1,
        //             supplierCurrency: 1,
        //             supplierBillingState: "$supplierBillingAddress.state",
        //             supplierBillingCity: "$supplierBillingAddress.city",
        //             supplierBillingPinCode: "$supplierBillingAddress.pinCode"
        //         }
        //     }
        // ]);
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
        const paymentTerms = await getAllPaymentTerms(req.user.company);
        const freightTermsOptions = await getAllModuleMaster(req.user.company, "FREIGHT_TERMS");
        const transporter = await getAllTransporter(
            {
                company: ObjectId(req.user.company)
            },
            {label: "$name", value: "$name", _id: 0}
        );
        const serviceChargesList = await filteredServiceChargesList([
            {
                $match: {
                    company: ObjectId(req.user.company),
                    status: OPTIONS.defaultStatus.ACTIVE
                }
            },
            {
                $sort: {
                    order: 1
                }
            },
            {
                $project: {
                    order: 1,
                    description: 1,
                    SACCode: 1,
                    GSTRate: 1,
                    IGSTRate: 1,
                    SGSTRate: 1,
                    CGSTRate: 1,
                    UGSTRate: 1,
                    currency: 1,
                    serviceCharges: 1
                }
            }
        ]);
        return res.success({
            // suppliersOptions,
            autoIncValues,
            purchaseCategoryOptions,
            paymentTermsOptions: paymentTerms.map(x => {
                return {
                    label: x.paymentDescription,
                    value: x.paymentDescription
                };
            }),
            freightTermsOptions,
            transporterOptions: transporter,
            locationOptions: locationOptions,
            serviceChargesList
        });
    } catch (error) {
        console.error("getAllMasterData Purchase Order", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getSupplierByCategory = asyncHandler(async (req, res) => {
    try {
        let {purchaseCategory = SALES_CATEGORY.DOMESTIC} = req.query;
        let domesticCheck = await checkDomesticCustomer(purchaseCategory);
        purchaseCategory = domesticCheck ? SALES_CATEGORY.DOMESTIC : SALES_CATEGORY.IMPORTS;
        let queryMatch = {
            company: ObjectId(req.user.company),
            isSupplierActive: "A",
            supplierPurchaseType: purchaseCategory
        };
        let supplierList = await SupplierRepository.filteredSupplierList([
            {
                $match: queryMatch
            },
            {$sort: {supplierName: 1}},
            {
                $addFields: {
                    supplierBillingAddress: {$arrayElemAt: ["$supplierBillingAddress", 0]}
                }
            },
            {
                $lookup: {
                    from: "PurchaseOrder",
                    localField: "_id",
                    foreignField: "supplier",
                    pipeline: [{$sort: {PODate: -1}}, {$limit: 1}, {$project: {transporter: 1}}],
                    as: "lastSupplier"
                }
            },
            {
                $unwind: {
                    path: "$lastSupplier",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $project: {
                    label: "$supplierName",
                    value: "$_id",
                    supplierCode: 1,
                    supplierPurchaseType: 1,
                    supplierCurrency: 1,
                    supplierBillingState: "$supplierBillingAddress.state",
                    supplierBillingCity: "$supplierBillingAddress.city",
                    supplierBillingPinCode: "$supplierBillingAddress.pinCode",
                    supplierPaymentTerms: 1,
                    lastTransporter: "$lastSupplier.transporter"
                }
            }
        ]);
        return res.success(supplierList);
    } catch (error) {
        console.error("getSupplierByCategory", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

//@desc   getAllPurchaseOrders PurchaseOrder Record
exports.getAllPurchaseOrders = asyncHandler(async company => {
    try {
        let rows = await Model.find({
            POStatus: {$in: ["Report Generated", "GRN Partial Created", "GRN Created"]},
            company: company
        })
            .populate(
                "PODetails.item",
                "_id  gst igst cgst sgst ugst itemCode itemName itemDescription hsn conversionOfUnits"
            )
            .sort({PONumber: -1});
        return rows;
    } catch (e) {
        console.error("getAllPurchaseOrders", e);
    }
});

// @desc    Update Balance Qty
exports.updatePOQtyOnGRN = asyncHandler(async (updatedBy, poId, poLineNumber, updateItemId, Qty) => {
    try {
        const purchaseOrder = await Model.findById(poId);
        if (purchaseOrder) {
            const newPoDetails1 = purchaseOrder.PODetails.map((pod, index) => {
                if (pod.POLineNumber === poLineNumber && pod.item.toString() === updateItemId.toString()) {
                    if (pod.balancedQty === Qty) {
                        pod.poLineStatus = "Created";
                    }
                    pod.balancedQty = pod.balancedQty - Qty;
                    pod.receivedQty = Qty;
                    pod.previousGRNQty = Qty;
                }
                return pod;
            });
            purchaseOrder.updatedBy = updatedBy;
            purchaseOrder.PODetails = newPoDetails1;
            const updatedPurchaseOrder = await purchaseOrder.save();
            return updatedPurchaseOrder;
        }
    } catch (error) {
        console.error("updatePOQtyOnGRN::::: Error in updating Purchase Order ======= ", error);
    }
});

// @desc    Update Balance Qty
exports.updatePOQtyOnGRNUpdate = asyncHandler(async (updatedBy, poId, poLineNumber, updateItemId, receivedQty) => {
    try {
        const purchaseOrder = await Model.findById(poId);
        if (purchaseOrder) {
            const newPoDetails1 = purchaseOrder.PODetails.map((pod, index) => {
                if (pod.POLineNumber === poLineNumber && pod.item.toString() === updateItemId.toString()) {
                    if (pod.balancedQty === receivedQty) {
                        pod.poLineStatus = "IN";
                    }
                    pod.balancedQty = pod.balancedQty + pod.previousGRNQty - receivedQty;
                    pod.receivedQty = receivedQty;
                    pod.previousGRNQty = receivedQty;
                }
                return pod;
            });

            purchaseOrder.updatedBy = updatedBy;
            purchaseOrder.PODetails = newPoDetails1;
            const updatedPurchaseOrder = await purchaseOrder.save();
            return updatedPurchaseOrder;
        }
    } catch (error) {
        console.error("updatePOQtyOnGRN::::: Error in updating Purchase Order ======= ", error);
    }
});

// @desc    Update Balance Qty
exports.updatePOStatusOnGRN = asyncHandler(async (poId, grnId) => {
    try {
        const purchaseOrder = await Model.findById(poId);
        if (purchaseOrder) {
            let poFinalStatus = "GRN Partial Created";
            if (purchaseOrder.PODetails.every(x => x.balancedQty == 0)) {
                poFinalStatus = "Closed";
            }
            purchaseOrder.POStatus = poFinalStatus;
            await purchaseOrder.save();
            if (poFinalStatus == "Closed") {
                await GRN.updateOne(
                    {_id: grnId},
                    {
                        $set: {
                            grnStatus: "Report Generated"
                        }
                    },
                    {new: true, useFindAndModify: false}
                );
            }
        }
    } catch (error) {
        console.error("updatePOQtyOnGRN::::: Error in updating Purchase Order ======= ", error);
    }
});

async function getDataPDF(existing) {
    try {
        if (existing && existing.serviceChargesInfo && existing.serviceChargesInfo.length) {
            existing.serviceChargesInfo = existing.serviceChargesInfo.filter(x => x.serviceCharges > 0);
        }
        if (existing && existing.supplier.supplierContactMatrix.length) {
            existing.supplier.supplierContactMatrix = existing.supplier.supplierContactMatrix[0];
        }
        if (existing && existing.supplier.supplierShippingAddress.length) {
            existing.supplier.supplierShippingAddress = existing.supplier.supplierShippingAddress[0];
        }
        if (existing && existing.supplier.supplierBillingAddress.length) {
            existing.supplier.supplierBillingAddress = existing.supplier.supplierBillingAddress[0];
        }

        let hsnArr = [...new Set(existing?.PODetails?.map(x => +x.item.hsn))];
        existing.GSTDetails = [];
        let locationPOB = existing.company.placesOfBusiness.find(ele => ele.locationID == existing.deliveryLocation);
        let condition = false;
        let supplierPurchaseType = existing.supplier.supplierPurchaseType.toLowerCase();
        if (supplierPurchaseType.search(/Domestic/i) !== -1) {
            condition =
                existing?.supplier?.supplierGST.substring(0, 2) !=
                (locationPOB?.GSTINForAdditionalPlace || company.GSTIN).substring(0, 2);
        }
        let SACObj = await getSACObj(OTHER_CHARGES_SAC_CODE);
        for (let i = 0; i < hsnArr.length; i++) {
            const element = hsnArr[i];
            let arr = existing?.PODetails?.filter(m => m.item.hsn == element);
            let lineValue = Number(arr.map(y => +y.lineValue).reduce((a, c) => a + c, 0)).toFixed(2);
            let igstRate = 0;
            let igstAmount = 0;
            let cgstRate = 0;
            let cgstAmount = 0;
            let sgstRate = 0;
            let sgstAmount = 0;
            let ugstRate = 0;
            let ugstAmount = 0;
            if (condition) {
                igstRate = arr[0].igst;
                igstAmount = (+igstRate * +lineValue) / 100;
            } else {
                cgstRate = arr[0].cgst;
                cgstAmount = (+cgstRate * +lineValue) / 100;
                sgstRate = arr[0].sgst;
                sgstAmount = (+sgstRate * +lineValue) / 100;
            }
            existing.GSTDetails.push({
                hsn: arr[0].item.hsn,
                taxableValue: +lineValue,
                igstRate: igstRate,
                igstAmount: igstAmount,
                cgstRate: cgstRate,
                cgstAmount: cgstAmount,
                sgstRate: sgstRate,
                sgstAmount: sgstAmount,
                ugstRate: ugstRate,
                ugstAmount: ugstAmount,
                totalTaxableValue: Number(+lineValue + +cgstAmount + +igstAmount + +sgstAmount + +ugstAmount).toFixed(2)
            });
        }
        if (await checkDomesticCustomer(existing.supplier.supplierPurchaseType)) {
            if (existing.serviceChargesInfo && existing.serviceChargesInfo.length) {
                let igstRate = 0;
                let igstAmount = 0;
                let cgstRate = 0;
                let cgstAmount = 0;
                let sgstRate = 0;
                let sgstAmount = 0;
                let ugstRate = 0;
                let ugstAmount = 0;
                for (const ele of existing.serviceChargesInfo) {
                    if (condition) {
                        igstRate = ele?.IGSTRate ?? 18;
                        // igstRate = 18;
                        igstAmount = (+igstRate * +ele?.serviceCharges) / 100;
                    } else {
                        cgstRate = ele?.CGSTRate ?? 9;
                        sgstRate = ele?.SGSTRate ?? 9;
                        // cgstRate = 9;
                        // sgstRate = 9;
                        cgstAmount = (+cgstRate * +ele?.serviceCharges) / 100;
                        sgstAmount = (+sgstRate * +ele?.serviceCharges) / 100;
                    }
                    existing.GSTDetails.push({
                        hsn: ele?.SACCode,
                        taxableValue: +ele?.serviceCharges,
                        igstRate: igstRate,
                        igstAmount: igstAmount,
                        cgstRate: cgstRate,
                        cgstAmount: cgstAmount,
                        sgstRate: sgstRate,
                        sgstAmount: sgstAmount,
                        ugstRate: ugstRate,
                        ugstAmount: ugstAmount,
                        totalTaxableValue: Number(
                            +ele?.serviceCharges + +cgstAmount + +igstAmount + +sgstAmount + +ugstAmount
                        ).toFixed(2)
                    });
                }
            } else if (existing.otherCharges.totalAmount) {
                let lineValue = +existing?.otherCharges?.totalAmount;
                let igstRate = 0;
                let igstAmount = 0;
                let cgstRate = 0;
                let cgstAmount = 0;
                let sgstRate = 0;
                let sgstAmount = 0;
                let ugstRate = 0;
                let ugstAmount = 0;
                if (condition) {
                    igstRate = SACObj.igstRate ?? 18;
                    igstAmount = (+igstRate * +lineValue) / 100;
                } else {
                    cgstRate = SACObj.cgstRate ?? 9;
                    sgstRate = SACObj.sgstRate ?? 9;
                    cgstAmount = (+cgstRate * +lineValue) / 100;
                    sgstAmount = (+sgstRate * +lineValue) / 100;
                }
                existing.GSTDetails.push({
                    hsn: SACObj.sacCode ?? OTHER_CHARGES_SAC_CODE,
                    taxableValue: +lineValue,
                    igstRate: igstRate,
                    igstAmount: igstAmount,
                    cgstRate: cgstRate,
                    cgstAmount: cgstAmount,
                    sgstRate: sgstRate,
                    sgstAmount: sgstAmount,
                    ugstRate: ugstRate,
                    ugstAmount: ugstAmount,
                    totalTaxableValue: Number(
                        +lineValue + +cgstAmount + +igstAmount + +sgstAmount + +ugstAmount
                    ).toFixed(2)
                });
            }
        }
        existing.totalCGSTAmount = existing?.GSTDetails.map(y => +y.cgstAmount).reduce((a, c) => a + c, 0);
        existing.totalSGSTAmount = existing?.GSTDetails.map(y => +y.sgstAmount).reduce((a, c) => a + c, 0);
        existing.totalIGSTAmount = existing?.GSTDetails.map(y => +y.igstAmount).reduce((a, c) => a + c, 0);
        existing.totalUGSTAmount = existing?.GSTDetails.map(y => +y.ugstAmount).reduce((a, c) => a + c, 0);
        existing.totalTaxAmount = existing?.GSTDetails.map(y => +y.taxableValue).reduce((a, c) => a + c, 0);
        existing.totalAmountWithTax = existing?.GSTDetails.map(y => +y.totalTaxableValue).reduce((a, c) => a + c, 0);
        existing.roundedOff = 0;
        existing.roundedOff += Math.round(existing.totalAmountWithTax) - +existing.totalAmountWithTax;
        existing.totalAmountWithTax = Math.round(+existing.totalAmountWithTax);
        existing.SACDescription = SACObj.serviceDescription;

        return existing;
    } catch (error) {
        console.error(error);
    }
}

exports.getAllShortPOForClosing = asyncHandler(async (req, res) => {
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
        let project = PurchaseOrderHelper.getAllShortPOForClosingAttributes();
        let match = await getMatchData(project, search);
        let pagination = [];
        if (excel == "false") {
            pagination = [{$skip: +skip}, {$limit: +pageSize}];
        }
        let rows = await Model.aggregate([
            {$unwind: "$PODetails"},
            {
                $match: {
                    company: ObjectId(req.user.company),
                    "PODetails.balancedQty": {$gt: 0},
                    $expr: {$ne: ["$PODetails.POQty", "$PODetails.balancedQty"]}
                }
            },
            {
                $lookup: {
                    from: "Items",
                    localField: "PODetails.item",
                    foreignField: "_id",
                    pipeline: [{$project: {itemCode: 1, itemName: 1}}],
                    as: "PODetails.item"
                }
            },
            {$unwind: "$PODetails.item"},
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
            ...getAllAggregationFooter(project, match, column, direction, pagination)
        ]);
        return res.success({
            ...outputData(rows)
        });
    } catch (e) {
        console.error("getAllShortPOForClosing", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.updatePODetailsLineStatusById = asyncHandler(async (req, res) => {
    try {
        let query = req.body;
        await Model.findOneAndUpdate(
            {
                _id: req.params.id,
                SOStatus: {$nin: ["Awaiting Approval", "Rejected", "Closed", "Cancelled"]},
                "PODetails._id": query.PODetailsId
            },
            {
                $set: {
                    "PODetails.$[s].balancedQty": +query.balancedQty,
                    "PODetails.$[s].canceledQty": +query.canceledQty,
                    "PODetails.$[s].lineStatus": "Cancelled",
                    "PODetails.$[s].canceledReason": query.canceledReason
                }
            },
            {arrayFilters: [{"s._id": query.PODetailsId}]}
        );
        res.success({
            message: `Purchase Order has been updated successfully`
        });
        let existing = await Model.findById(req.params.id);
        if (existing && existing.PODetails.length > 0) {
            let PODetails = existing.PODetails.every(x => x.balancedQty == 0);
            if (PODetails) {
                await Model.findOneAndUpdate(
                    {
                        _id: existing._id
                    },
                    {
                        $set: {
                            POStatus: "Closed"
                        }
                    }
                );
            }
        }
    } catch (e) {
        console.error("update Purchase Order", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAllItemsForSupplier = asyncHandler(async (req, res) => {
    try {
        let itemsList = await getAllItemsBySupplierId(req.user.company, req.query.supplierId);
        return res.success(itemsList);
    } catch (error) {
        console.error("getAllItemsForSupplier", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.updatePOQtyOnGRNCancel = async (updatedBy, updatedGRN) => {
    try {
        const purchaseOrder = await Model.findById(updatedGRN.PONumber.valueOf());
        if (purchaseOrder) {
            let newPoDetails1 = [];
            for (let n of updatedGRN.GRNDetails) {
                newPoDetails1 = JSON.parse(JSON.stringify(purchaseOrder.PODetails)).map(pod => {
                    let obj = updatedGRN.GRNDetails.find(
                        n => pod.POLineNumber === n.POLineNumber && pod.item.toString() === n.item.valueOf().toString()
                    );
                    if (!!obj) {
                        pod.balancedQty = pod.balancedQty + obj.GRNQty;
                        pod.receivedQty = 0;
                        pod.previousGRNQty = 0;
                    }
                    return pod;
                });
            }
            purchaseOrder.PODetails = newPoDetails1;
            purchaseOrder.POStatus = OPTIONS.defaultStatus.GRN_PARTIAL_CREATED;
            purchaseOrder.updatedBy = updatedBy;
            await purchaseOrder.save();
        }
    } catch (error) {
        console.error("updatePOQtyOnGRNCancel::::: Error in updating Purchase Order ======= ", error);
    }
};
