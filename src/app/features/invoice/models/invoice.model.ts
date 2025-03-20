export interface Invoice{
  id: number,
  date: Date,
  status: InvoiceStatus,
  clientId: number,
  clientName: string,
  interventionId: number,
  amount: number,
  items ?: any
}

export enum InvoiceStatus{
  PAID = 'payé',
  PENDING = 'en attente'
}

// export interface Invoice
