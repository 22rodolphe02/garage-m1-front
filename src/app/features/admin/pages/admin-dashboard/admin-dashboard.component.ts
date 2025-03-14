import {Component, ViewChild} from '@angular/core';
import {Button} from 'primeng/button';
import {
  ChartComponent,
  NgApexchartsModule, ApexOptions
} from "ng-apexcharts";
import {CommonModule} from '@angular/common';
import {PlanningComponent} from '../../../appointment/components/planning/planning.component';

@Component({
  selector: 'g-admin-dashboard',
  imports: [
    CommonModule,
    Button,
    ChartComponent,
    NgApexchartsModule,
    PlanningComponent,
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {

  @ViewChild("chart") chart!: ChartComponent;
  public interventionStat!: ApexOptions;

  public turnoverStat!: ApexOptions



  constructor() {
    this.setInterventionStat();
    this.setTurnoverStat();
  }

  setTurnoverStat(){
    this.turnoverStat = {
      series: [44, 55, 13, 33],
      labels: ['Reparation complète', 'Mango', 'Orange', 'Watermelon'],
      chart: {
        type: "donut",
        height: 300
      },
      plotOptions: {
        pie: {
          donut: {
            size: '70'
          }
        }
      }
    }
  }

  setInterventionStat(){
    this.interventionStat = {
      series: [
        {
          name: "Interventions",
          data: [44, 55, 57, 56]
        }
      ],
      chart: {
        type: "bar",
        height: 300
      },
      colors: ["var(--p-amber-400)"],
      plotOptions: {
        bar: {
          distributed: true,
          horizontal: true,
          barHeight: "50%"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Frein",
          "Moteur",
          "Vidange",
          "Roue",
        ]
      },
      grid: {
        show: false
      }
    };
  }



}
