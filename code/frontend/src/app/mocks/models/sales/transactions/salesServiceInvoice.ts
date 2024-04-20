export interface salesServiceInvoice {
    _id: string
    customerName: string
    PONo: string
    currency: string
    totalAmountWithTax?: number
    status: string
    createdAt?: string
    serviceInvoiceNumber: string
    serviceInvoiceDate: string
    invoiceAmount: number
    customerCategory?: string
    billFromLocation?: string
    totalValue?: number
    remarks?: string
    PODate?: string
  }