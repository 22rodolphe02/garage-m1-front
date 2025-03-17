export interface Intervention{
  id: number,
  clientName: string,
  mechanicName: string,
  status: InterventionStatus,
  estimateTime: Date
}

export enum InterventionStatus {
  PENDING = 'En attente',
  DONE = 'Terminé',
  IN_PROGRESS = 'En cours',
}
