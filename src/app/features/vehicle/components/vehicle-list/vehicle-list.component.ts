import { Component } from '@angular/core';
import {Card} from 'primeng/card';
import {Button} from 'primeng/button';

@Component({
  selector: 'g-vehicle-list',
  imports: [
    Card,
    Button
  ],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.scss'
})
export class VehicleListComponent {
  vehicles: number[] = [];

  constructor() {
    this.vehicles = Array.from(Array(6).keys()).map(i => i + 1);
  }
}
