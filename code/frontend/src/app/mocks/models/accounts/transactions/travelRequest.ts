
export interface TravelRequest {
    _id: string
    travelCode: string
    travelForm: string
    travelDestination: string
    purposeOfTravel: string
    estimatedBudget: number
    costAllocation: string
    paymentMethod: string
    raisedBy: string
    status: string
    createdAt?: string
    requestDate: string
    travelStartDate: string
    travelEndDate: string
    totalDays: number
    supportingDocumentsFileUrl?: string
  }