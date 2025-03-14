export interface Appointment{
  id: number,
  name: string,
  start: Date,
  end: Date,
  status: AppointmentStatus
}

export enum AppointmentStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  CANCELLED = 'CANCELLED',
}
