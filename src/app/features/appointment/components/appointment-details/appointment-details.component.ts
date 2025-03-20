import { Component } from '@angular/core';
import {Avatar} from 'primeng/avatar';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'g-appointment-details',
  imports: [
    Avatar,
    DatePipe
  ],
  templateUrl: './appointment-details.component.html',
  styleUrl: './appointment-details.component.scss'
})
export class AppointmentDetailsComponent {
  dateTest: Date = new Date();
}
