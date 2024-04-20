export interface TaxInvoiceSummary {
    _id: string
    company: string
    salesInvoiceNumber: string
    salesInvoiceDate: string
    salesInvoiceTotalAmount: number
    salesInvoiceTotalCGSTAmount: number
    salesInvoiceTotalSGSTAmount: number
    salesInvoiceTotalIGSTAmount: number
    salesInvoiceTotalUGSTAmount: number
    salesInvoiceTotalTaxAmount: number
    createdAt: string
    salesInvoiceDateS: string
    salesInvoiceTotalAmountWithTax: number
    customerName: string
    GSTIN: string
    customer: string
  }
  