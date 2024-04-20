export interface SaleDebitNote {
    _id: string;
    DNNumber: string;
    salesCategory: string;
    invoiceNo: string;
    currency: string;
    reasonForDN?: string;
    netDNValue: string;
    DNStatus: string;
    DNDateS: string;
    invoiceDateS: string;
    customerName: string;
}
