
export interface PurchasePaymentTerms {
  _id: string
  paymentTermCode: string
  paymentDescription: string
  status: string
  createdAt?: string
  order: number
}
