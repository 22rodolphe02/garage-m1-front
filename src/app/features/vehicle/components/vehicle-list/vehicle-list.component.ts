import {Component, Input} from '@angular/core';
import {Vehicle} from '../../models/vehicle.model';

@Component({
  selector: 'g-vehicle-list',
  imports: [
  ],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.scss'
})
export class VehicleListComponent {
  vehicles: number[] = [];

  @Input({alias: 'data'}) data: Vehicle[] | null = []

  constructor() {
    this.vehicles = Array.from(Array(6).keys()).map(i => i + 1);
  }
}
