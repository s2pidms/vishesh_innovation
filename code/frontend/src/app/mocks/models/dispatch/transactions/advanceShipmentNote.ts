export interface AdvanceShipmentNote {
    _id: string;
    ASNNumber: number;
    stateOfSupply: string;
    invoiceValue: number;
    totalNoOfBoxes: number;
    totalGrossWeight: number;
    ASNStatus: string;
    transporter: string;
    createdAt: string;
    salesInvoiceDate: string;
    salesInvoiceNumber: string;
    customerName: string;
}
