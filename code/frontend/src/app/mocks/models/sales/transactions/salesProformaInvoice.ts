export interface salesProformaInvoice {
    _id: string
    salesCategory: string
    PINumber: string
    PIDate: string
    PONumber: string
    currency: string
    PITotalAmount: string
    PIStatus: string
    createdAt?: string
    PIDateS: string
    customer?: string
    billFromLocation?: string
    customerCategory?: string
    customerName?: string
    PODate?: string
    PIValidityDate?: string
  }