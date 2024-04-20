export interface InvoicePayment {
    _id: string;
    customerName: string;
    projectName: string;
    serviceInvoiceNumber: string;
    totalValue?: number;
    totalAmountWithTax?: number;
    serviceInvoiceDate: string;
    receivedAmount?: number;
    receivedDate?: string;
}
