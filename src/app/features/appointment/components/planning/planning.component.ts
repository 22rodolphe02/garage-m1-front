import {Component, Input, ViewChild} from '@angular/core';
import {DatePipe, LowerCasePipe} from "@angular/common";
import {FullCalendarComponent, FullCalendarModule} from "@fullcalendar/angular";
import {CalendarOptions} from '@fullcalendar/core';
import {planningConfig} from '../../../../core/config/planning.config';
import {Planning} from '../../models/planning.model';
import {AppointmentStatus} from '../../models/appointment.model';

@Component({
  selector: 'g-planning',
  imports: [
    DatePipe,
    FullCalendarModule,
    LowerCasePipe
  ],
  templateUrl: './planning.component.html',
  styleUrl: './planning.component.scss'
})
export class PlanningComponent {
  calendarOptions !: CalendarOptions
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;

  @Input({alias: 'plannings', required: false}) plannings: Planning[] = []

  constructor() {
    // this.initCalendarOptions();
    this.initPlannings();
  }


  initCalendarOptions(){
      this.calendarOptions = {
        ...planningConfig,
        headerToolbar: {
          left: 'title,customPrev,customNext,today',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        },
        eventClick: this.handleEventClick.bind(this),
        dateClick: (arg) => this.handleDateClick(arg),
        customButtons: {
          customPrev: {
            click: () => {
              this.calendarApi.prev();
            },
          },
          customNext: {
            click: () => {
              this.calendarApi.next();
            },
          }
        }
      }
  }

  get calendarApi() {
    return this.calendarComponent.getApi();
  }

  handleDateClick(arg: { dateStr: string; }) {
    alert('Date clicked: ' + arg.dateStr);
  }

  handleEventClick(arg: any) {
    console.log(arg.event.extendedProps)
    alert('Event clicked: ' + arg.event.title);
  }

  fakePlannings(){
    this.plannings = [
      {
        id: 1,
        name: 'Michel Sebastien',
        status: AppointmentStatus.CANCELLED,
        start: new Date('2025-03-12 08:30:00'),
        end: new Date('2025-03-12 10:00:00'),
        statusClass: 'danger'
      },
      {
        id: 1,
        name: 'Michel Sebastien',
        status: AppointmentStatus.CONFIRMED,
        start: new Date('2025-03-14 08:30:00'),
        end: new Date('2025-03-14 12:00:00'),
        statusClass: 'success'
      },
      {
        id: 1,
        name: 'Michel Sebastien',
        status: AppointmentStatus.PENDING,
        start: new Date('2025-03-14 15:30:00'),
        end: new Date('2025-03-14 18:00:00'),
        statusClass: 'warning'
      }
    ]
  }

  initPlannings(){
    this.fakePlannings();
    this.initCalendarOptions();
    this.calendarOptions = {
      ...this.calendarOptions,
      events: this.plannings.map(planning => ({
        id: planning.id.toString(),
        title: planning.name, // Nom de la personne
        start: planning.start.toISOString(), // Conversion en format ISO
        end: planning.end.toISOString(),
        allDay: true,
        classNames: [`event-${planning.statusClass}`], // Ajoute une classe CSS pour le style
        extendedProps: {
          content: {
            ...planning
          }
        }
      }))
    }
  }
}
