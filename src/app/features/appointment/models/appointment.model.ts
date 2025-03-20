export interface Appointment{
  id: number,
  name?: string,
  clientName?: string,
  description?:string,
  start: Date,
  end: Date,
  status: AppointmentStatus,
  mechanical?: string
}

export enum AppointmentStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  CANCELLED = 'CANCELLED',
}
