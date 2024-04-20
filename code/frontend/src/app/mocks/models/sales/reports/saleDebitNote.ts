export interface SaleDebitNote {
    _id: string;
    DNNumber: string;
    salesCategory: string;
    invoiceNo?: string;
    currency: string;
    netDNValue?: string;
    DNStatus: string;
    createdAt?: string;
    DNDateS: string;
    invoiceDateS: string;
    customerName: string;
}
