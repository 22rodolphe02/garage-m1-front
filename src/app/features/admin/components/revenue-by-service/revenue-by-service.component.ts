import { Component } from '@angular/core';
import {ApexOptions, ChartComponent} from "ng-apexcharts";

@Component({
  selector: 'g-revenue-by-service',
    imports: [
        ChartComponent
    ],
  templateUrl: './revenue-by-service.component.html',
  styleUrl: './revenue-by-service.component.scss'
})
export class RevenueByServiceComponent {

  public revenueStat!: ApexOptions

  constructor() {
    this.setRevenueStat();
  }

  setRevenueStat(){
    this.revenueStat = {
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
}
