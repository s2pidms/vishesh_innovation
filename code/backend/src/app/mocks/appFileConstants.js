const PATHS = [
    "/api/v1/settings/user/login",
    "/api/v1/settings/company/getCompanyURLs",
    "/api/v1/settings/autoIncrement/updateTicketAutoIncrement",
    "/api/v1/settings/mailConfig/getAllMailConfigListForSupport",
    /^\/api\/v1\/purchase\/po\/getPODetailsById\/.*/,
    /^\/api\/v1\/settings\/appParameter\/getAppParameterValueByCode\/.*/,
    /^\/api\/v1\/stores\/grn\/getGRNDetailsById\/.*/,
    /^\/api\/v1\/stores\/gin\/getById\/.*/,
    /^\/api\/v1\/dispatch\/advanceShipmentNotice\/getANSDetailsById\/.*/,
    /^\/api\/v1\/sales\/proformaInvoice\/getProInvDetailsById\/.*/,
    /^\/api\/v1\/sales\/serviceInvoice\/getSIDetailsById\/.*/,
    /^\/api\/v1\/purchase\/spo\/getSPODetailsById\/.*/,
    /^\/api\/v1\/quality\/mrn\/getMRNDetailsById\/.*/,
    /^\/api\/v1\/purchase\/debitNote\/getDNDetailsById\/.*/,
    /^\/api\/v1\/sales\/creditNote\/getCNDetailsById\/.*/,
    /^\/api\/v1\/sales\/salesOrder\/getSOConfirmationById\/.*/,
    /^\/api\/v1\/supports\/issue\/getAllSubModuleListByMenuIdSupport\/.*/,
    /^\/api\/v1\/supports\/issue\/getAllMenuItemsListSupport\/.*/,
    /^\/api\/v1\/dispatch\/salesInvoice\/getSalesInvoiceByIdForPDF\/.*/,
    /^\/api\/v1\/settings\/appParameter\/getAppParameterValueByCodeSupport\/.*/,
    /^\/api\/v1\/sales\/salesDebitNote\/getDNDetailsById\/.*/,
    /^\/assets\/.*/,
    "/index.html",
    "/*.js",
    "/*.css",
    "/api/v1/settings/user/set-password"
];
const DIR = [
    "./src/assets/images",
    "./src/assets/excel",
    "./src/assets/issueAttachment",
    "./src/assets/employee",
    "./src/assets/items",
    "./src/assets/supplier",
    "./src/assets/Sku",
    "./src/assets/company",
    "./src/assets/technicalSheet",
    "./src/assets/image",
    "./src/assets/documentFile",
    "./src/assets/NPDRequest"
];

module.exports = {
    PATHS,
    DIR
};
