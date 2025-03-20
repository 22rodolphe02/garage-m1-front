import { Component } from '@angular/core';
import {PlanningComponent} from '../../components/planning/planning.component';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {AppointmentDetailsComponent} from '../../components/appointment-details/appointment-details.component';
import {AppointmentListComponent} from '../../components/appointment-list/appointment-list.component';
import {PaginationComponent} from '../../../../shared/components/pagination/pagination.component';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-planning-page',
  imports: [
    PlanningComponent,
    AppointmentListComponent,
    PaginationComponent,
    Button
  ],
  providers: [DialogService],
  templateUrl: './planning-page.component.html',
  styleUrl: './planning-page.component.scss'
})
export class PlanningPageComponent {
  ref: DynamicDialogRef | undefined;

  constructor(private dialogService: DialogService) {
  }
}
