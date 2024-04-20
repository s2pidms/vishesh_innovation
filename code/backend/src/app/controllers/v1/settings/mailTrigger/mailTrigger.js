const asyncHandler = require("express-async-handler");
const MailTriggerRepository = require("../../../../models/settings/repository/mailTriggerRepository");
const {sendLeaveApplicationMail} = require("../../HR/LeavesApplication/LeavesApplicationMail");
const {sendOnDutyMail} = require("../../HR/OnDutyApplication/OnDutyApplicationMail");
const {sendNPDRequestMail} = require("../../businessLeads/NPDRequest/NPDRequestMail");
const {sendNPDReviewMail} = require("../../businessLeads/NPDReview/NPDReviewMail");
const {sendASNMail} = require("../../dispatch/advanceShipmentNotice/advanceShipmentNoticeMail");
const {sendSalesInvMail} = require("../../dispatch/salesInvoice/salesInvoiceMail");
const {sendDebitNoteMail} = require("../../purchase/debitNote/debitNoteMail");
const {sendPOMail} = require("../../purchase/purchaseOrder/purchaseOrderMail");
const {sendMRNMail} = require("../../quality/Mrn/MrnMail");
const {sendCreditNoteMail} = require("../../sales/creditNote/creditNoteMail");
const {sendDirectTaxInvMail} = require("../../sales/directTaxInvoice/directTaxInvoiceMail");
const {sendProformaInvMail} = require("../../sales/proformaInvoice/proformaInvoiceMail");
const {sendSalesDNMail} = require("../../sales/salesDebitNote/salesDebitNoteMail");
const {sendSalesMail} = require("../../sales/salesOrder/salesOrderMail");
const {sendServiceInvMail} = require("../../sales/serviceInvoice/serviceInvoiceMail");
const {sendUserMail} = require("../../settings/user/userMail");
const {sendGINMail} = require("../../stores/goodsInwardEntry/goodsInwardEntryMail");
const {sendGRNMail} = require("../../stores/goodsReceiptNote/goodsReceiptNoteMail");
const {getAllMailTriggerAttributes} = require("../../../../models/settings/helpers/mailTriggerHelper");
const MESSAGES = require("../../../../helpers/messages.options");
const MailConfig = require("../../../../utilities/mailConfigHandler");
const {CONSTANTS} = require("../../../../../config/config");
const mailer = new MailConfig(CONSTANTS.nodeMailerTransporterOptions);

const mailTriggerFunctions = {
    //Business Leads
    NPD: sendNPDRequestMail,
    NPDReview: sendNPDReviewMail,

    // Sales
    CreditNote: sendCreditNoteMail,
    DirectTaxInvoice: sendDirectTaxInvMail,
    ProformaInvoice: sendProformaInvMail,
    SalesDebitNote: sendSalesDNMail,
    SalesOrder: sendSalesMail,
    ServiceInvoice: sendServiceInvMail,

    // Purchase Order
    DebitNote: sendDebitNoteMail,
    PurchaseOrder: sendPOMail,

    // Store
    GoodInwardEntry: sendGINMail,
    GRN: sendGRNMail,

    // Quality
    MRN: sendMRNMail,

    //  Dispatch
    AdvanceShipmentNotice: sendASNMail,
    SalesInvoice: sendSalesInvMail,

    // HR
    LeavesApplication: sendLeaveApplicationMail,
    OnDutyApplication: sendOnDutyMail,

    // Setting
    User: sendUserMail
};

exports.mailTriggerCycle = async () => {
    try {
        const mailTriggerList = await MailTriggerRepository.filteredMailTriggerList([
            {
                $match: {isSent: false}
            }
        ]);
        await Promise.all(
            mailTriggerList.map(async ele => {
                let mailData = await mailTriggerFunctions[ele.collectionName](ele);
                mailer.sendMail(mailData);
                await MailTriggerRepository.findAndUpdateDoc({_id: ele._id}, {isSent: true});
            })
        );
    } catch (error) {
        console.error("mailTriggerCycle", error);
    }
};

exports.getAll = asyncHandler(async (req, res) => {
    try {
        let project = getAllMailTriggerAttributes();
        let pipeline = [{$match: {company: req.user.company}}];
        let rows = await MailTriggerRepository.getAllPaginate({
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
exports.update = asyncHandler(async (req, res) => {
    try {
        let itemDetails = await MailTriggerRepository.getDocById(req.params.id);
        if (!itemDetails) {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.preconditionFailed(errors);
        }
        itemDetails.updatedBy = req.user.sub;
        itemDetails = await MailTriggerRepository.updateDoc(itemDetails, req.body);
        return res.success({
            message: MESSAGES.apiSuccessStrings.UPDATE("Mail Trigger has been")
        });
    } catch (e) {
        console.error("update Mail Trigger", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
