import {Routes} from '@angular/router';

const VehicleListComponent = () =>
  import('../vehicle/pages/vehicle-list-page/vehicle-list-page.component').then(m => m.VehicleListPageComponent);

export const vehicleRoutes: Routes = [
  {
    path: '',
    loadComponent: VehicleListComponent
  }
]
