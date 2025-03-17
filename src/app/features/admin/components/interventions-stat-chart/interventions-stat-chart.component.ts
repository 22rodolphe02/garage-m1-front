import {Component, ViewChild} from '@angular/core';
import {ApexOptions, ChartComponent} from "ng-apexcharts";

@Component({
  selector: 'g-interventions-stat-chart',
    imports: [
        ChartComponent
    ],
  templateUrl: './interventions-stat-chart.component.html',
  styleUrl: './interventions-stat-chart.component.scss'
})
export class InterventionsStatChartComponent {

  @ViewChild("chart") chart!: ChartComponent;
  public interventionStat!: ApexOptions;

  constructor() {
    this.setInterventionStat();
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
