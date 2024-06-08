const asyncHandler = require("express-async-handler");
const Model = require("../../../../models/sales/salesOrderModel");
const MESSAGES = require("../../../../helpers/messages.options");
const {outputData, checkDomesticCustomer} = require("../../../../helpers/utility");
const {generateCreateData, getMatchData, OPTIONS} = require("../../../../helpers/global.options");
const {getAllUniquePODetailsByCustomerId, getAllSKUListOnOpenPOByCustomerId} = require("../SKU/SKU");
const {default: mongoose} = require("mongoose");
const {findAppParameterValue} = require("../../settings/appParameter/appParameter");
const {getSalesHSNByCode} = require("../salesHSN/salesHSN");
const {CONSTANTS} = require("../../../../../config/config");
const {getCompanyLocations, getCompanyById} = require("../../settings/company/company");
const {getAllPaymentTerms} = require("../paymentTerms/paymentTerms");
const {getAllSalesOrderAttributes} = require("../../../../models/sales/helpers/salesOrderHelper");
const {dateToAnyFormat} = require("../../../../helpers/dateTime");
// const {getSOMailConfig} = require("./salesOrderMail");
const {LAKH} = require("../../../../mocks/number.constant");
const {JOB_CARD_STAGE} = require("../../../../mocks/constantData");
const {SALES_ORDER} = require("../../../../mocks/schemasConstant/salesConstant");
const {getAndSetAutoIncrementNo} = require("../../settings/autoIncrement/autoIncrement");
const {filteredCustomerList} = require("../../../../models/sales/repository/customerRepository");
const SORepository = require("../../../../models/sales/repository/salesOrderRepository");
const {getAllModuleMaster} = require("../../settings/module-master/module-master");
const {getAllTransporter} = require("../transporter/transporter");
const MailTriggerRepository = require("../../../../models/settings/repository/mailTriggerRepository");
const {SALES_MAIL_CONST} = require("../../../../mocks/mailTriggerConstants");
const {filteredSKUMasterList} = require("../../../../models/sales/repository/SKUMasterRepository");
const {
    filteredCustomerDiscountManagementList
} = require("../../../../models/sales/repository/customerDiscountManagementRepository");

const ObjectId = mongoose.Types.ObjectId;

exports.getAll = asyncHandler(async (req, res) => {
    try {
        const {statusArray = null} = req.query;
        let project = getAllSalesOrderAttributes();
        if (req.query.excel == "true") {
            project = getAllSalesOrderAttributes({
                customerCategory: "$customer.customerCategory",
                billFromLocation: 1,
                SOType: 1,
                PODate: {$dateToString: {format: "%d-%m-%Y", date: "$PODate"}}
            });
        }
        let pipeline = [
            {$match: {company: ObjectId(req.user.company), SOStatus: {$in: statusArray}}},
            {
                $addFields: {
                    SOTotalAmount: {$toString: "$SOTotalAmount"},
                    SODateS: {$dateToString: {format: "%d-%m-%Y", date: "$SODate"}}
                }
            },
            {
                $lookup: {
                    from: "Customer",
                    localField: "customer",
                    foreignField: "_id",
                    as: "customer"
                }
            },
            {$unwind: "$customer"}
        ];
        let rows = await SORepository.getAllPaginate({pipeline, project, queryParams: req.query});
        return res.success(rows);
    } catch (e) {
        console.error("getAllSO", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.create = asyncHandler(async (req, res) => {
    try {
        const {PONumber = null, PODate = null, popupResponse = "No"} = req.body;
        const POExistsInSO = await SORepository.filteredSalesOrderList([
            {
                $addFields: {
                    matchDate: {$dateToString: {format: "%Y-%m-%d", date: "$PODate"}},
                    PONumber: {$trim: {input: "$PONumber"}}
                }
            },
            {
                $match: {
                    PONumber: PONumber.trim(),
                    matchDate: PODate
                }
            }
        ]);
        if (POExistsInSO.length == 0 || popupResponse == "Yes") {
            let createdObj = {
                company: req.user.company,
                createdBy: req.user.sub,
                updatedBy: req.user.sub,
                ...req.body
            };
            await SORepository.createDoc(createdObj);
            return res.success({
                message: MESSAGES.apiSuccessStrings.ADDED("Sales Order")
            });
        } else {
            return res.success({POExists: "Yes"});
        }
    } catch (e) {
        console.error("create Sales Order", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @desc    update Sales Order  Record
exports.update = asyncHandler(async (req, res) => {
    try {
        let itemDetails = await Model.findById(req.params.id).populate("company", "contactInfo companyName");
        if (!itemDetails) {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.preconditionFailed(errors);
        }
        itemDetails.updatedBy = req.user.sub;
        itemDetails = await generateCreateData(itemDetails, req.body);
        if (itemDetails.SOStatus == "Report Generated") {
            let data = JSON.parse(JSON.stringify(itemDetails.SODetails));
            if (data.every(x => !!x.dispatchSchedule && x.dispatchSchedule.length > 0)) {
                itemDetails.SODetails = [];
            }
            for (let i = 0; i < data.length; i++) {
                const ele = data[i];
                if (!!ele.dispatchSchedule && ele.dispatchSchedule.length > 0) {
                    for (let k = 0; k < ele.dispatchSchedule.length; k++) {
                        const dispatch = ele.dispatchSchedule[k];
                        let obj = {
                            ...ele,
                            SOLineNumber: k + 1,
                            orderedQty: dispatch.quantity,
                            balancedQty: dispatch.quantity,
                            SOLineTargetDate: dispatch?.PPICDate ?? dispatch.dispatchDate,
                            dispatchDate: dispatch.dispatchDate,
                            lineValue: +(dispatch.quantity * ele.netRate).toFixed(2)
                        };
                        obj.dispatchSchedule = [];
                        itemDetails.SODetails.push(obj);
                    }
                }
            }
        }
        itemDetails = await itemDetails.save();
        res.success({
            message: `Sales Order has been ${
                itemDetails.SOStatus == "Created" ? "updated" : itemDetails.SOStatus.toLowerCase()
            } successfully`
        });
        if (itemDetails.SOStatus == "Report Generated") {
            // getSOMailConfig(itemDetails);
            let mailTriggerCreateObj = {
                subModuleId: itemDetails._id,
                action: "Report Generated",
                company: req.user.company,
                mailAction: "Report Generated",
                collectionName: SALES_ORDER.COLLECTION_NAME,
                message: `Sales Order Confirmation – ${itemDetails.SONumber}`,
                module: SALES_MAIL_CONST.SALES_ORDER.MODULE,
                subModule: SALES_MAIL_CONST.SALES_ORDER.SUB_MODULE,
                isSent: false
            };
            await MailTriggerRepository.createDoc(mailTriggerCreateObj);
        }
    } catch (e) {
        console.error("update Sales Order", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @desc    deleteById Sales Order Record
exports.deleteById = asyncHandler(async (req, res) => {
    try {
        const deleteItem = await Model.findById(req.params.id);
        if (deleteItem) {
            await deleteItem.remove();
            return res.success({
                message: MESSAGES.apiSuccessStrings.DELETED("Sales Order")
            });
        } else {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Sales Order");
            return res.preconditionFailed(errors);
        }
    } catch (e) {
        console.error("deleteById Sales Order", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getById = asyncHandler(async (req, res) => {
    try {
        let existing = await Model.findById(req.params.id)
            .populate("customer", "customerCurrency customerName customerCategory")
            .populate("SODetails.SKU");
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Sales Order");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        console.error("getById Sales Order", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAllMasterData = asyncHandler(async (req, res) => {
    try {
        const autoIncrementNo = await getAndSetAutoIncrementNo(
            {...SALES_ORDER.AUTO_INCREMENT_DATA()},
            req.user.company
        );
        const customerOptions = await filteredCustomerList([
            {$match: {company: ObjectId(req.user.company), isCustomerActive: "A"}},
            {$sort: {customerName: 1}},
            {
                $addFields: {
                    customerBillingObj: {$arrayElemAt: ["$customerBillingAddress", 0]}
                }
            },
            {
                $project: {
                    customerCode: 1,
                    customerBillingState: "$customerBillingObj.state",
                    customerBillingCity: "$customerBillingObj.city",
                    customerBillingPinCode: "$customerBillingObj.pinCode",
                    customerName: 1,
                    customerCategory: 1,
                    customerPaymentTerms: 1,
                    customerCurrency: 1,
                    customerShippingAddress: 1,
                    customerBillingAddress: 1
                }
            }
        ]);
        const salesCategory = await findAppParameterValue("SALES_CATEGORY", req.user.company);
        const transporter = await getAllTransporter(
            {
                company: ObjectId(req.user.company)
            },
            {label: "$name", value: "$name", _id: 0}
        );
        const freightTermsOptions = await getAllModuleMaster(req.user.company, "FREIGHT_TERMS");
        const modeOfTransport = await findAppParameterValue("MODE_OF_TRANSPORT", req.user.company);
        const billFromLocation = await getCompanyLocations(req.user.company);
        const companyData = await getCompanyById(req.user.company, {placesOfBusiness: 1});
        const paymentTerms = await getAllPaymentTerms(req.user.company);
        return res.success({
            autoIncrementNo,
            customerOptions,
            companyData,
            salesCategoryOptions: salesCategory.split(",").map(x => {
                return {
                    label: x,
                    value: x
                };
            }),
            paymentTermsOptions: paymentTerms.map(x => {
                return {
                    label: x.paymentDescription,
                    value: x.paymentDescription
                };
            }),
            billFromLocationOptions: billFromLocation.split(",").map(x => {
                return {
                    label: x,
                    value: x
                };
            }),
            transporterOptions: transporter,
            freightTermsOptions,
            modeOfTransportOptions: modeOfTransport.split(",").map(x => {
                return {
                    label: x,
                    value: x
                };
            })
        });
    } catch (error) {
        console.error("getAllMasterData Sales Order", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAllSObyCustomerID = asyncHandler(async (customerId, company) => {
    try {
        let rows = await Model.aggregate([
            {
                $match: {
                    customer: ObjectId(customerId),
                    company: ObjectId(company),
                    SOStatus: OPTIONS.defaultStatus.REPORT_GENERATED
                }
            },
            {
                $unwind: "$SODetails"
            },
            {
                $lookup: {
                    from: "SKUMaster",
                    localField: "SODetails.SKU",
                    foreignField: "_id",
                    pipeline: [{$project: {SKUNo: 1, SKUName: 1, SKUDescription: 1, standardRate: 1, hsn: 1}}],
                    as: "SODetails.SKU"
                }
            },
            {
                $unwind: "$SODetails.SKU"
            },
            {
                $match: {
                    "SODetails.balancedQty": {$gt: 0}
                }
            },
            {
                $project: {
                    _id: 1,
                    SONumber: 1,
                    SODate: 1,
                    SOType: 1,
                    currency: 1,
                    modeOfTransport: 1,
                    frightTerms: 1,
                    transporter: 1,
                    destination: 1,
                    paymentTerms: 1,
                    "SODetails.SKU": 1,
                    "SODetails.UOM": 1,
                    "SODetails.balancedQty": 1,
                    "SODetails.standardRate": 1,
                    "SODetails.netRate": 1,
                    "SODetails.SOLineTargetDate": 1,
                    "SODetails.SOLineNumber": 1
                }
            }
        ]).sort({createdAt: -1});
        return rows;
    } catch (e) {
        console.error("getAllCustomers", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @desc    Update Balance Qty
exports.updateSOQtyOnDRN = asyncHandler(async (updatedBy, SOId, updateSKUId, Qty, status, DRNLineNumber) => {
    try {
        const salesOrder = await Model.findById(SOId);
        if (salesOrder) {
            const newSODetails = salesOrder.SODetails.map(ele => {
                if (
                    status == OPTIONS.defaultStatus.CREATED &&
                    ele.SKU.toString() === updateSKUId.toString() &&
                    ele.SOLineNumber == DRNLineNumber
                ) {
                    ele.balancedQty = +ele.balancedQty - +Qty;
                    ele.previousDRNQty = Qty;
                } else {
                    if (
                        [OPTIONS.defaultStatus.REJECTED, OPTIONS.defaultStatus.CANCELLED].includes(status) &&
                        ele.SKU.toString() === updateSKUId.toString() &&
                        ele.SOLineNumber == DRNLineNumber
                    ) {
                        ele.balancedQty = +ele.balancedQty + +Qty;
                        ele.previousDRNQty = 0;
                    } else if (ele.SKU.toString() === updateSKUId.toString() && ele.SOLineNumber == DRNLineNumber) {
                        ele.balancedQty = +ele.balancedQty + +ele.previousDRNQty - +Qty;
                        ele.previousDRNQty = Qty;
                    }
                }

                return ele;
            });
            salesOrder.updatedBy = updatedBy;
            salesOrder.SODetails = newSODetails;
            const updatedNewSODetails = await salesOrder.save();
            return updatedNewSODetails;
        }
    } catch (error) {
        console.error("updateSOQtyOnDRNCreate::::: Error in updating Sale Order ======= ", error);
    }
});
exports.createSO = asyncHandler(async obj => {
    try {
        obj = JSON.parse(JSON.stringify(obj));
        let PIId = obj._id;
        delete obj._id;
        delete obj._v;
        const autoIncrementedNo = await getAndSetAutoIncrementNo(SALES_ORDER.AUTO_INCREMENT_DATA(), obj.company);
        let createdObj = {
            ...obj,
            SONumber: autoIncrementedNo,
            PIId: PIId,
            SODate: new Date(),
            SOTotalAmount: obj.PITotalAmount,
            SODetails: obj.PIDetails.map(x => {
                x.SOLineNumber = x.PILineNumber;
                x.dispatchSchedule = [
                    {
                        scheduleNo: 1,
                        quantity: x.orderedQty,
                        dispatchDate: new Date(),
                        PPICDate: new Date()
                    }
                ];
                return x;
            }),
            SOStatus: OPTIONS.defaultStatus.CREATED
        };
        let newSO = await Model.create(createdObj);
        return {
            _id: newSO._id,
            SONumber: newSO.SONumber
        };
    } catch (error) {
        console.error("Create Sales Order On PI Updated::::: Error in creating Sale Order ======= ", error);
    }
});
exports.getSOConfirmationById = asyncHandler(async (req, res) => {
    try {
        let existing = await Model.findById(req.params.id)
            .populate({
                path: "company",
                model: "Company",
                select: {
                    companyName: 1,
                    GSTIN: 1,
                    companyBillingAddress: 1,
                    contactInfo: 1,
                    placesOfBusiness: 1,
                    swiftCode: 1,
                    companyBankMICRCode: 1,
                    intermediaryBank: 1,
                    companyBefName: 1,
                    companyBankName: 1,
                    companyAccountNumber: 1,
                    companyBankIFSCCode: 1,
                    companyBankBranch: 1,
                    intermediaryBankSwiftCode: 1,
                    SOSignatureUrl: {$concat: [`${CONSTANTS.domainUrl}company/`, "$SOSignature"]},
                    SOPdfHeaderUrl: {$concat: [`${CONSTANTS.domainUrl}company/`, "$SOPdfHeader"]}
                }
            })
            .populate("SODetails.SKU")
            .populate("customer")
            .lean();
        let data = JSON.parse(JSON.stringify(existing.SODetails));
        if (data.every(x => !!x.dispatchSchedule && x.dispatchSchedule.length > 0)) {
            existing.SODetails = [];
        }
        for (let i = 0; i < data.length; i++) {
            const ele = data[i];
            if (!!ele.dispatchSchedule && ele.dispatchSchedule.length > 0) {
                for (let k = 0; k < ele.dispatchSchedule.length; k++) {
                    const dispatch = ele.dispatchSchedule[k];
                    existing.SODetails.push({
                        ...ele,
                        orderedQty: dispatch.quantity,
                        balancedQty: dispatch.quantity,
                        SOLineTargetDate: dispatch?.PPICDate ?? dispatch.dispatchDate,
                        lineValue: +(dispatch.quantity * ele.netRate).toFixed(2)
                    });
                }
            }
        }
        existing.SODetails = existing.SODetails.sort((a, b) => a.SKU.SKUNo.localeCompare(b.SKU.SKUNo));
        if (existing && existing.company.placesOfBusiness.length > 0) {
            for (const e of existing.company.placesOfBusiness) {
                if (e.locationID == existing.billFromLocation && e.SOPdfHeader) {
                    existing.company.SOPdfHeaderUrl = `${CONSTANTS.domainUrl}company/` + e.SOPdfHeader;
                }
                if (e.locationID == existing.billFromLocation && e.SOSignature) {
                    existing.company.SOSignatureUrl = `${CONSTANTS.domainUrl}company/` + e.SOSignature;
                }
            }
        }
        existing = await getDataPDF(existing);
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Sales Order");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        console.error("getAllSOConfirmationReports", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
async function getDataPDF(existing) {
    try {
        if (existing.customer.customerContactInfo.length) {
            existing.customer.customerContactInfo = existing.customer.customerContactInfo[0];
        }
        if (existing.customer.customerBillingAddress.length) {
            existing.customer.customerBillingAddress = existing.customer.customerBillingAddress[0];
        }
        if (existing.customer.customerShippingAddress.length) {
            existing.customer.customerShippingAddress = existing.customer.customerShippingAddress[0];
        }
        if (existing.SODetails.length) {
            let arr = [];
            for await (const x of existing?.SODetails) {
                let HSN = await getSalesHSNByCode(x.SKU.hsn);
                x.SKU.HSNCode = HSN?.hsnCode;
                x.SKU.HSN = HSN?._id;
                x.SKU.igst = HSN?.igstRate;
                x.SKU.cgst = HSN?.cgstRate;
                x.SKU.sgst = HSN?.sgstRate;
                x.SKU.ugst = HSN?.ugstRate;
                arr.push(x);
            }
            existing.SODetails = arr;
        }
        let hsnArr = [...new Set(existing?.SODetails?.map(x => x.SKU.hsn))];
        existing.GSTDetails = [];
        let customerCategoryCondition = await checkDomesticCustomer(existing.customer.customerCategory);
        let condition = false;
        if (existing.company && existing.company.placesOfBusiness.length > 0 && customerCategoryCondition) {
            for (const ele of existing.company.placesOfBusiness) {
                if (existing.billFromLocation == ele.locationID) {
                    condition = existing.customer.GSTIN.substring(0, 2) != ele.GSTINForAdditionalPlace.substring(0, 2);
                }
            }
        }
        for (let i = 0; i < hsnArr.length; i++) {
            const element = hsnArr[i];
            let arr = existing?.SODetails?.filter(m => m.SKU.HSNCode == element);
            let lineValue = Number(arr.map(y => +y.lineValue).reduce((a, c) => a + c, 0)).toFixed(2);
            let igstRate = 0;
            let igstAmount = 0;
            let cgstRate = 0;
            let cgstAmount = 0;
            let sgstRate = 0;
            let sgstAmount = 0;
            let ugstRate = 0;
            let ugstAmount = 0;
            if (customerCategoryCondition) {
                if (condition) {
                    igstRate = arr[0].SKU.igst;
                    igstAmount = (+igstRate * +lineValue) / 100;
                } else {
                    cgstRate = arr[0].SKU.cgst;
                    cgstAmount = (+cgstRate * +lineValue) / 100;
                    sgstRate = arr[0].SKU.sgst;
                    sgstAmount = (+sgstRate * +lineValue) / 100;
                }
            }
            existing.GSTDetails.push({
                hsn: arr[0].SKU.hsn,
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
        if (existing.otherCharges && existing.otherCharges.totalAmount && customerCategoryCondition) {
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
                igstRate = 18;
                igstAmount = (+igstRate * +lineValue) / 100;
            } else {
                cgstRate = 9;
                sgstRate = 9;
                cgstAmount = (+cgstRate * +lineValue) / 100;
                sgstAmount = (+sgstRate * +lineValue) / 100;
            }
            existing.GSTDetails.push({
                hsn: "996511",
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
        existing.totalTaxableAmount = existing.GSTDetails.map(x => +x.taxableValue).reduce((a, c) => a + c, 0);
        existing.totalCGSTAmount = existing?.GSTDetails.map(y => +y.cgstAmount).reduce((a, c) => a + c, 0);
        existing.totalSGSTAmount = existing?.GSTDetails.map(y => +y.sgstAmount).reduce((a, c) => a + c, 0);
        existing.totalIGSTAmount = existing?.GSTDetails.map(y => +y.igstAmount).reduce((a, c) => a + c, 0);
        existing.totalUGSTAmount = existing?.GSTDetails.map(y => +y.ugstAmount).reduce((a, c) => a + c, 0);
        existing.totalTaxAmount =
            +existing.totalCGSTAmount +
            +existing.totalSGSTAmount +
            +existing.totalIGSTAmount +
            +existing.totalUGSTAmount;
        existing.totalAmountWithTax = existing?.GSTDetails.map(y => +y.totalTaxableValue).reduce((a, c) => a + c, 0);
        existing.roundedOff = 0;
        existing.roundedOff += Math.round(existing.totalAmountWithTax) - +existing.totalAmountWithTax;
        existing.totalAmountWithTax = Math.round(+existing.totalAmountWithTax);
        existing.EWayBillApplicable = "No";
        if (condition && existing.totalAmountWithTax > 50000) {
            existing.EWayBillApplicable = "Yes";
        } else if (!condition && existing.totalAmountWithTax > LAKH) {
            existing.EWayBillApplicable = "Yes";
        }
        return existing;
    } catch (error) {
        console.error(error);
    }
}
exports.getAllShortSOForClosing = asyncHandler(async (req, res) => {
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
        let project = {
            SODate: {$dateToString: {format: "%d-%m-%Y", date: "$SODate"}},
            SONumber: 1,
            SOLineNumber: "$SODetails.SOLineNumber",
            SKUNo: "$SODetails.SKU.SKUNo",
            SKUDescription: "$SODetails.SKU.SKUDescription",
            SKUName: "$SODetails.SKU.SKUName",
            balancedQty: "$SODetails.balancedQty",
            orderedQty: "$SODetails.orderedQty",
            lineValue: "$SODetails.lineValue",
            customer: "$customer.customerName",
            SODetailsId: "$SODetails._id",
            createdAt: 1
        };
        let match = await getMatchData(project, search);
        let pagination = [];
        if (excel == "false") {
            pagination = [{$skip: +skip}, {$limit: +pageSize}];
        }
        let rows = await Model.aggregate([
            {$unwind: "$SODetails"},
            {
                $match: {
                    company: ObjectId(req.user.company),
                    "SODetails.balancedQty": {$gt: 0},
                    $expr: {$ne: ["$SODetails.orderedQty", "$SODetails.balancedQty"]}
                }
            },
            {
                $lookup: {
                    from: "SKUMaster",
                    localField: "SODetails.SKU",
                    foreignField: "_id",
                    pipeline: [{$project: {SKUNo: 1, SKUDescription: 1, SKUName: 1}}],
                    as: "SODetails.SKU"
                }
            },
            {$unwind: "$SODetails.SKU"},
            {
                $lookup: {
                    from: "Customer",
                    localField: "customer",
                    foreignField: "_id",
                    pipeline: [{$project: {customerName: 1}}],
                    as: "customer"
                }
            },
            {$unwind: "$customer"},
            {
                $project: project
            },
            {$match: match},
            {$sort: {[column]: +direction}},
            {
                $facet: {
                    metadata: [{$count: "total"}],
                    data: pagination
                }
            }
        ]);
        return res.success({
            ...outputData(rows)
        });
    } catch (e) {
        console.error("getAllShortSOForClosing", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.updateSODetailsLineStatusById = asyncHandler(async (req, res) => {
    try {
        let query = req.body;
        await Model.findOneAndUpdate(
            {
                _id: req.params.id,
                "SODetails._id": query.SODetailsId,
                SOStatus: {$nin: ["Created", "Cancelled", "Closed"]}
            },
            {
                $set: {
                    "SODetails.$[s].balancedQty": +query.balancedQty,
                    "SODetails.$[s].canceledQty": +query.canceledQty,
                    "SODetails.$[s].lineStatus": "Cancelled",
                    "SODetails.$[s].canceledReason": query.canceledReason
                }
            },
            {arrayFilters: [{"s._id": query.SODetailsId}]}
        );
        res.success({
            message: `Sales Order has been updated successfully`
        });
        let existing = await Model.findById(req.params.id);
        if (existing && existing.SODetails.length > 0) {
            let SODetails = existing.SODetails.every(x => x.balancedQty == 0);
            if (SODetails) {
                await Model.findOneAndUpdate(
                    {
                        _id: existing._id
                    },
                    {
                        $set: {
                            SOStatus: OPTIONS.defaultStatus.CLOSED
                        }
                    }
                );
            }
        }
    } catch (e) {
        console.error("update Sales Order", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAllSalesSKUList = asyncHandler(async (req, res) => {
    try {
        let SKUList = await filteredSKUMasterList([
            {
                $match: {
                    isActive: "A",
                    SKUStage: {$ne: JOB_CARD_STAGE.PROTOTYPE}
                }
            },
            {$unwind: {path: "$customerInfo", preserveNullAndEmptyArrays: true}},
            {$match: {"customerInfo.customer": ObjectId(req.query.customerId)}},
            {
                $project: {
                    SKU: "$_id",
                    customerCurrency: "$customerCurrency",
                    SKUNo: 1,
                    SKUName: 1,
                    UOM: "$primaryUnit",
                    SKUDescription: 1,
                    customerPartNo: "$customerInfo.customerPartNo",
                    productCategory: 1,
                    SOLineTargetDate: dateToAnyFormat(new Date(), "YYYY-MM-DD"),
                    discount: {$literal: 0},
                    netRate: "$customerInfo.standardSellingRate",
                    orderedQty: {$literal: 0},
                    invoicedQty: {$literal: 0},
                    canceledQty: {$literal: 0},
                    balancedQty: {$literal: 0},
                    productCode: 1,
                    lineValue: {$literal: 0},
                    standardRate: "$customerInfo.standardSellingRate",
                    customer: "$customerInfo.customer",
                    customerName: "$customerInfo.customerName"
                }
            }
        ]);
        SKUList = await this.getCustomerDiscount(SKUList, req.user.company);
        let PODetails = await getAllUniquePODetailsByCustomerId(req.query.customerId);
        return res.success({
            SKUList,
            PODetails
        });
    } catch (e) {
        console.error("getAllSalesSKUList", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
exports.getCustomerDiscount = async (SKUList, company) => {
    try {
        let customerDiscountList = await filteredCustomerDiscountManagementList([
            {
                $match: {company: ObjectId(company)}
            },
            {
                $project: {
                    customer: 1,
                    globalDiscount: 1,
                    customerDiscountInfo: 1,
                    _id: 0
                }
            }
        ]);
        SKUList = SKUList.map(x => {
            for (const ele of customerDiscountList) {
                if (ele.customer?.valueOf() == x.customer?.valueOf()) {
                    if (ele.globalDiscount) {
                        x.discount = ele?.globalDiscount;
                        x.netRate = +(x.standardRate - (x.standardRate * ele?.globalDiscount) / 100).toFixed(2);
                    } else {
                        let customerDiscountInfo = ele.customerDiscountInfo.find(
                            y => y.SKU?.valueOf() == x.SKU?.valueOf()
                        );
                        if (customerDiscountInfo && customerDiscountInfo.discountInfo.discountValue) {
                            x.discount = customerDiscountInfo.discountInfo.discountValue;
                            x.netRate = +(
                                x.standardRate -
                                (x.standardRate * customerDiscountInfo.discountInfo.discountValue) / 100
                            ).toFixed(2);
                        }
                    }
                }
            }
            return x;
        });
        return SKUList;
    } catch (error) {
        console.error(error);
    }
};
exports.getAllSalesSKUListOnOpenPO = asyncHandler(async (req, res) => {
    try {
        let SKUList = await getAllSKUListOnOpenPOByCustomerId(req.query);
        return res.success({
            SKUList
        });
    } catch (e) {
        console.error("getAllSalesSKUListOnOpenPO", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAllSObyCustomerIdForJobCard = async (customerId, company) => {
    try {
        let rows = await Model.aggregate([
            {
                $match: {
                    customer: ObjectId(customerId),
                    company: ObjectId(company),
                    SOStatus: {
                        $nin: [
                            OPTIONS.defaultStatus.CANCELLED,
                            OPTIONS.defaultStatus.AWAITING_APPROVAL,
                            OPTIONS.defaultStatus.CREATED,
                            OPTIONS.defaultStatus.CLOSED
                        ]
                    }
                }
            },
            {
                $unwind: "$SODetails"
            },
            {
                $match: {
                    "SODetails.JCCQty": {$gt: 0}
                }
            },
            {
                $lookup: {
                    from: "FGIN",
                    localField: "SODetails.SKU",
                    foreignField: "SKUId",
                    pipeline: [
                        {
                            $match: {
                                FGINQuantity: {$gt: 0},
                                $or: [{expiryDate: {$gt: new Date()}}, {expiryDate: null}]
                            }
                        },
                        {
                            $project: {
                                _id: 0,
                                batchNo: 1,
                                batchDate: "$manufacturingDate",
                                UOM: 1,
                                FGQty: "$FGINQuantity",
                                aging: {
                                    $cond: {
                                        if: {
                                            $or: [
                                                {$eq: ["$expiryDate", null]},
                                                {$gte: ["$expiryDate", {$add: [new Date(), 30 * 24 * 60 * 60 * 1000]}]}
                                            ]
                                        },
                                        then: "green",
                                        else: {
                                            $cond: {
                                                if: {
                                                    $gt: ["$expiryDate", new Date()]
                                                },
                                                then: "yellow",
                                                else: "red"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    ],
                    as: "inventory"
                }
            },
            {
                $lookup: {
                    from: "SKUMaster",
                    localField: "SODetails.SKU",
                    foreignField: "_id",
                    pipeline: [
                        {
                            $project: {
                                SKUNo: 1,
                                SKUName: 1,
                                SKUDescription: 1,
                                drawing: "$artWorkHyperLink",
                                primaryUnit: 1,
                                internalPartNo: 1
                            }
                        }
                    ],
                    as: "SKU"
                }
            },
            {$unwind: "$SKU"},
            {
                $lookup: {
                    from: "MapCategoryHSN",
                    localField: "salesCategory",
                    foreignField: "productCategory",
                    pipeline: [{$project: {_id: 0, colourName: 1}}],
                    as: "mapCategory"
                }
            },
            {$unwind: {path: "$mapCategory", preserveNullAndEmptyArrays: true}},
            {
                $project: {
                    _id: 0,
                    lineNumber: "$SODetails.SOLineNumber",
                    reference: "$_id",
                    referenceModel: "SalesOrder",
                    SO_FCNumber: "$SONumber",
                    SO_FCDate: "$SODate",
                    code: {$ifNull: ["$mapCategory.colourName", "#007daf"]},
                    SKU: "$SKU._id",
                    SKUNo: "$SKU.SKUNo",
                    SKUName: "$SKU.SKUName",
                    SKUDescription: "$SKU.SKUDescription",
                    drawing: "$SKU.drawing",
                    UOM: "$SKU.primaryUnit",
                    internalPartNo: "$SKU.internalPartNo",
                    balQty: {$ifNull: ["$SODetails.JCCQty", 0]},
                    totalFGQty: {
                        $reduce: {
                            input: "$inventory",
                            initialValue: 0,
                            in: {$add: ["$$value", "$$this.FGQty"]}
                        }
                    },
                    batchQty: {$literal: 0},
                    FGInventoryInfo: "$inventory",
                    dispatchSchedule: {
                        $cond: {
                            if: {
                                $and: [
                                    {$ne: [{$type: "$SODetails.dispatchSchedule"}, "missing"]},
                                    {$gt: [{$size: {$ifNull: ["$SODetails.dispatchSchedule", []]}}, 0]}
                                ]
                            },
                            then: "$SODetails.dispatchSchedule",
                            else: [
                                {
                                    scheduleNo: 1,
                                    quantity: "$SODetails.orderedQty",
                                    dispatchDate: {$ifNull: ["$SODetails.dispatchDate", "$SODetails.SOLineTargetDate"]},
                                    PPICDate: "$SODetails.SOLineTargetDate"
                                }
                            ]
                        }
                    },
                    SO_FCLineTargetDate: "$SODetails.SOLineTargetDate"
                }
            }
        ]);
        return rows;
    } catch (e) {
        console.error("getAllSObyCustomerIdForJobCard", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
};
exports.updateBalanceJCCQtyOfSO = async () => {
    try {
        let so = await SORepository.filteredSalesOrderList([
            {
                $match: {
                    "SODetails.balancedQty": {$gt: 0}
                }
            },
            {
                $unwind: "$SODetails"
            },
            {
                $project: {
                    _id: 1,
                    "SODetails._id": 1,
                    "SODetails.balancedQty": 1
                }
            }
        ]);
        for await (const ele of so) {
            let SOUpdate = await SORepository.findAndUpdateDoc(
                {_id: ele._id, "SODetails._id": ele.SODetails._id},
                {
                    $set: {
                        "SODetails.$.JCCQty": ele.SODetails.balancedQty,
                        "SODetails.$.previousJCCQty": 0
                    }
                }
            );
            console.log("SOUpdate", SOUpdate);
        }
    } catch (error) {
        console.error("error", error);
    }
};

exports.updateSOQtyOnJCC = async (updatedBy, SOId, updateSKUId, qty, status, lineNumber) => {
    try {
        const salesOrder = await Model.findById(SOId);
        if (salesOrder) {
            const newSODetails = salesOrder.SODetails.map(ele => {
                if (
                    [OPTIONS.defaultStatus.CANCELLED].includes(status) &&
                    ele.SKU.toString() === updateSKUId.toString() &&
                    ele.SOLineNumber == lineNumber
                ) {
                    ele.JCCQty = +ele.JCCQty + +qty;
                    ele.previousJCCQty = 0;
                } else if (ele.SKU.toString() === updateSKUId.toString() && ele.SOLineNumber == lineNumber) {
                    ele.JCCQty = +ele.JCCQty + +ele.previousJCCQty - +qty;
                    ele.previousJCCQty = qty;
                }
                return ele;
            });
            salesOrder.updatedBy = updatedBy;
            salesOrder.SODetails = newSODetails;
            const updatedNewSODetails = await salesOrder.save();
            return updatedNewSODetails;
        }
    } catch (error) {
        console.error("updateSOQtyOnJCC::::: Error in updating Sale Order ======= ", error);
    }
};
