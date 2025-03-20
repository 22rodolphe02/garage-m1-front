import {Appointment} from './appointment.model';

export interface Planning extends Appointment{
  statusClass: string,
}
