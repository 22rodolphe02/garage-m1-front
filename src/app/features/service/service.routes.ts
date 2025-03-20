import {Routes} from '@angular/router';

const ServiceListComponent = () =>
  import('../service/pages/service-list-page/service-list-page.component').then(m => m.ServiceListPageComponent);

export const serviceRoutes: Routes = [
  {
    path: '',
    loadComponent: ServiceListComponent
  }
]
