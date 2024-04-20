export interface Transporter {
    _id: string
    transporterCode: string
    name: string
    transporterType: string
    address: string
    phone: string
    licenseNumber: string
    city?: string
    state?: string
    country?: string
    contactPerson?: string
    status?: string
  }