import { Component } from '@angular/core';
import {Button} from "primeng/button";
import {KpiCardComponent} from "../../../../shared/components/kpi-card/kpi-card.component";
import {Kpi} from '../../../../core/models/kpi.model';

@Component({
  selector: 'g-stat',
    imports: [
        Button,
        KpiCardComponent
    ],
  templateUrl: './kpi-general.component.html',
  styleUrl: './kpi-general.component.scss'
})
export class KpiGeneralComponent {

  interventionData: Kpi[] = [
    { value: 20, label: 'En cours', color: 'primary' },
    { value: 3, label: 'En attente', color: 'warning' },
    { value: 6, label: 'Terminés', color: 'success' }
  ];

  mechanicData: Kpi[] = [
    { value: 4, label: 'Occupé', color: 'danger' },
    { value: 6, label: 'Libre', color: 'success' }
  ]

  appointmentData: Kpi[] = [
    {
      value: 25, label: ''
    }
  ]
}
