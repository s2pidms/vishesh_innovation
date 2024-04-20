const asyncHandler = require("express-async-handler");
const Model = require("../../../../models/sales/directTaxInvoiceModel");
const MESSAGES = require("../../../../helpers/messages.options");
const {generateCreateData, OPTIONS} = require("../../../../helpers/global.options");
const {findAppParameterValue} = require("../../settings/appParameter/appParameter");
const {getAllSObyCustomerID, updateSOQtyOnDRN} = require("../salesOrder/salesOrder");
const {createSalesInvoiceFromDTI} = require("../../dispatch/salesInvoice/salesInvoice");
const {getSalesHSNByCode} = require("../salesHSN/salesHSN");
const {
    getAllDirectTaxInvoiceAttributes,
    getAllDirectTaxInvoiceExcelAttributes
} = require("../../../../models/sales/helpers/directTaxInvoiceHelper");
// const {getDTIMailConfig} = require("./directTaxInvoiceMail");
const {default: mongoose} = require("mongoose");
const {DIRECT_TAX_INVOICE} = require("../../../../mocks/schemasConstant/salesConstant");
const {getAndSetAutoIncrementNo} = require("../../settings/autoIncrement/autoIncrement");
const {filteredCustomerList} = require("../../../../models/sales/repository/customerRepository");
const {getAllDirectTaxInvoiceAggregate} = require("../../../../models/sales/repository/directTaxInvoiceRepository");
const ObjectId = mongoose.Types.ObjectId;
const MailTriggerRepository = require("../../../../models/settings/repository/mailTriggerRepository");
const {SALES_MAIL_CONST} = require("../../../../mocks/mailTriggerConstants");

exports.getAll = asyncHandler(async (req, res) => {
    try {
        let project = getAllDirectTaxInvoiceAttributes();
        if (req.query.excel == "true") {
            project = getAllDirectTaxInvoiceExcelAttributes();
        }
        let pipeline = [
            {$match: {company: ObjectId(req.user.company)}},
            {
                $addFields: {
                    salesInvoiceDateS: {$dateToString: {format: "%d-%m-%Y", date: "$salesInvoiceDate"}}
                }
            },
            {
                $match: {
                    DTIStatus: {
                        $nin: OPTIONS.defaultStatus.getAllFilterStatusArray(["CLOSED", "REPORT_GENERATED", "REJECTED"])
                    }
                }
            },
            {
                $lookup: {
                    from: "Customer",
                    localField: "customer",
                    foreignField: "_id",
                    pipeline: [{$project: {customerName: 1, customerCategory: 1}}],
                    as: "customer"
                }
            },
            {$unwind: "$customer"}
        ];
        let rows = await getAllDirectTaxInvoiceAggregate({pipeline, project, queryParams: req.query});
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
        const saveObj = new Model(createdObj);
        const itemDetails = await saveObj.save();
        if (itemDetails) {
            for (let n of itemDetails.DTIDetails) {
                await updateSOQtyOnDRN(
                    req.user.sub,
                    n.SOId.valueOf(),
                    n.SKU.valueOf(),
                    n.dispatchQty,
                    itemDetails.DTIStatus,
                    n.DTILineNumber
                );
            }
            res.success({
                message: MESSAGES.apiSuccessStrings.ADDED("Direct Tax Invoice")
            });
            // let mailCreateObj = {
            //     DTIId: itemDetails._id,
            //     action: "created",
            //     company: req.user.company,
            //     mailAction: "Generate"
            // };
            // getDTIMailConfig(mailCreateObj);
            let mailTriggerCreateObj = {
                subModuleId: itemDetails._id,
                action: "created",
                company: req.user.company,
                mailAction: "Generate",
                collectionName: DIRECT_TAX_INVOICE.COLLECTION_NAME,
                message: `Direct Tax Invoice created - ${itemDetails?.DTINumber}`,
                module: SALES_MAIL_CONST.DIRECT_TAX_INV.MODULE,
                subModule: SALES_MAIL_CONST.DIRECT_TAX_INV.SUB_MODULE,
                isSent: false
            };
            await MailTriggerRepository.createDoc(mailTriggerCreateObj);
        } else {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.serverError(errors);
        }
    } catch (e) {
        console.error("create Direct Tax Invoice", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.update = asyncHandler(async (req, res) => {
    try {
        let itemDetails = await Model.findById(req.params.id).populate("DTIDetails.SOId").populate("DTIDetails.SKU");
        if (!itemDetails) {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.preconditionFailed(errors);
        }
        itemDetails.updatedBy = req.user.sub;
        itemDetails = await generateCreateData(itemDetails, req.body);

        itemDetails = await itemDetails.save();
        for (let n of itemDetails.DTIDetails) {
            await updateSOQtyOnDRN(
                req.user.sub,
                n.SOId.valueOf(),
                n.SKU.valueOf(),
                n.dispatchQty,
                itemDetails.DTIStatus,
                n.DTILineNumber
            );
        }
        let salesInvoice = {};
        if (itemDetails.DTIStatus == OPTIONS.defaultStatus.REPORT_GENERATED) {
            let arr = [];
            if (itemDetails?.DTIDetails.length) {
                itemDetails = JSON.parse(JSON.stringify(itemDetails));
                for await (const x of itemDetails?.DTIDetails) {
                    let HSN = await getSalesHSNByCode(x.SKU.hsn);
                    x.SKU.HSNCode = HSN?.hsnCode;
                    x.SKU.HSN = HSN?._id;
                    x.SKU.igst = HSN?.igstRate;
                    x.SKU.cgst = HSN?.cgstRate;
                    x.SKU.sgst = HSN?.sgstRate;
                    x.SKU.ugst = HSN?.ugstRate;
                    arr.push(x);
                }
                itemDetails.DTIDetails = arr;
            }
            salesInvoice = await createSalesInvoiceFromDTI(itemDetails);
        }
        if (itemDetails) {
            res.success({
                message: `Direct Tax Invoice has been ${
                    itemDetails.DTIStatus == "Awaiting Approval" ? "updated" : itemDetails.DTIStatus.toLowerCase()
                } successfully`
            });
            // let mailUpdateObj = {
            //     DTIId: itemDetails._id,
            //     action: "modified",
            //     company: req.user.company,
            //     mailAction: itemDetails.DTIStatus,
            //     SIId: salesInvoice._id
            // };
            // getDTIMailConfig(mailUpdateObj);
            if (["Awaiting Approval", "Report Generated"].includes(itemDetails.DTIStatus)) {
                let actions = {
                    "Awaiting Approval": "Modified",
                    "Report Generated": "Report Generated"
                };
                let mailTriggerCreateObj = {
                    subModuleId: itemDetails._id,
                    action: actions[actions.DTIStatus],
                    company: req.user.company,
                    mailAction: actions[actions.DTIStatus],
                    collectionName: DIRECT_TAX_INVOICE.COLLECTION_NAME,
                    message: `Direct Tax Invoice ${itemDetails.DTIStatus} - ${itemDetails?.DTINumber}`,
                    module: SALES_MAIL_CONST.DIRECT_TAX_INV.MODULE,
                    subModule: SALES_MAIL_CONST.DIRECT_TAX_INV.SUB_MODULE,
                    isSent: false
                };
                await MailTriggerRepository.createDoc(mailTriggerCreateObj);
            }
        }
    } catch (e) {
        console.error("update Direct Tax Invoice", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @route   PUT /sales/Direct Tax Invoice/delete/:id
exports.deleteById = asyncHandler(async (req, res) => {
    try {
        const deleteItem = await Model.findById(req.params.id);
        if (deleteItem) {
            await deleteItem.remove();
            return res.success({
                message: MESSAGES.apiSuccessStrings.DELETED("Direct Tax Invoice")
            });
        } else {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Direct Tax Invoice");
            return res.preconditionFailed(errors);
        }
    } catch (e) {
        console.error("deleteById Direct Tax Invoice", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @route   GET /sales/Direct Tax Invoice/getById/:id
exports.getById = asyncHandler(async (req, res) => {
    try {
        let existing = await Model.findById(req.params.id).populate("customer", "customerName customerCategory");
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Direct Tax Invoice");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        console.error("getById Direct Tax Invoice", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
exports.DTIDetailsByCustomerId = asyncHandler(async (req, res) => {
    try {
        let salesOrder = await getAllSObyCustomerID(req.params.id, req.user.company);
        let DTIDetails = [];
        let index = 1;
        for await (const ele of salesOrder) {
            DTIDetails.push({
                DTILineNumber: index,
                SOId: ele?._id,
                SONumber: ele?.SONumber,
                currency: ele?.currency,
                SODate: ele?.SODate,
                SKU: ele?.SODetails?.SKU?._id,
                SKUNo: ele?.SODetails?.SKU?.SKUNo,
                SKUName: ele?.SODetails?.SKU?.SKUName,
                SKUDescription: ele?.SODetails?.SKU?.SKUDescription,
                UOM: ele?.SODetails?.UOM,
                standardRate: ele?.SODetails?.standardRate,
                purchaseRate: ele?.SODetails?.standardRate,
                SOBalancedQty: ele?.SODetails?.balancedQty,
                dispatchQty: 0,
                invoicedQty: 0,
                discount: 0,
                netRate: 0,
                lineValue: 0,
                SPVLine: 0
            });
            index++;
        }
        return res.success(DTIDetails);
    } catch (e) {
        console.error("getById Direct Tax Invoice", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
// @route   GET /sales/Direct Tax Invoice/getAllMasterData
exports.getAllMasterData = asyncHandler(async (req, res) => {
    try {
        const autoIncrementNo = await getAndSetAutoIncrementNo(
            {...DIRECT_TAX_INVOICE.AUTO_INCREMENT_DATA()},
            req.user.company
        );
        const customersOptions = await filteredCustomerList([
            {$match: {company: ObjectId(req.user.company), isCustomerActive: "A"}},
            {$sort: {customerName: 1}},
            {
                $addFields: {
                    customerBillingAddress: {$arrayElemAt: ["$customerBillingAddress", 0]}
                }
            },
            {
                $project: {
                    customerName: 1,
                    customerCategory: 1,
                    customerCode: 1,
                    customerBillingState: "$customerBillingAddress.state",
                    customerBillingCity: "$customerBillingAddress.city",
                    customerBillingPinCode: "$customerBillingAddress.pinCode"
                }
            }
        ]);
        let salesCategory = await findAppParameterValue("SALES_CATEGORY", req.user.company);
        return res.success({
            autoIncrementNo,
            customersOptions,
            salesCategoryOptions: salesCategory.split(",").map(x => {
                return {
                    label: x,
                    value: x
                };
            })
        });
    } catch (error) {
        console.error("getAllMasterData Direct Tax Invoice", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
