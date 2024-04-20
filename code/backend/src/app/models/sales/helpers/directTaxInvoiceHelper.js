exports.getAllDirectTaxInvoiceAttributes = () => {
    return {
        DTINumber: 1,
        salesInvoiceDate: 1,
        salesCategory: 1,
        customerName: "$customer.customerName",
        DTIStatus: 1,
        salesInvoiceDateS: 1,
        createdAt: 1,
        DTIValue: 1
    };
};
exports.getAllDirectTaxInvoiceExcelAttributes = () => {
    return {
        DTINumber: 1,
        salesInvoiceDate: 1,
        salesCategory: 1,
        customerCategory: "$customer.customerCategory",
        customerName: "$customer.customerName",
        DTITotalAmount: 1,
        DTIValue: 1,
        DTIStatus: 1,
        salesInvoiceDateS: 1
    };
};
