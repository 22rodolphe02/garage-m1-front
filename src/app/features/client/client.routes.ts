import {Routes} from '@angular/router';
import {invoiceRoutes} from '../invoice/invoice.routes';

const ClientDetailComponent = () =>
  import('./pages/client-details-page/client-details-page.component').then(m => m.ClientDetailsPageComponent);

const VehicleListComponent = () =>
  import('../vehicle/pages/vehicle-list-page/vehicle-list-page.component').then(m => m.VehicleListPageComponent);

const InterventionHistory = () =>
  import('../interventions/pages/intervention-history/intervention-history.component').then(m => m.InterventionHistoryComponent);


export const clientRoutes: Routes = [
  {
    path: '', loadComponent: () =>
      import('./pages/client-list-page/client-list-page.component').then(c => c.ClientListPageComponent),
  },
  {
    path: ':id',
    children: [
      {
        path: '',
        loadComponent: ClientDetailComponent,
        children: [
          {
            path: 'vehicles',
            loadComponent: VehicleListComponent
          },
          {
            path: 'interventions-history',
            loadComponent: InterventionHistory
          },
          {
            path: 'invoices',
            children: invoiceRoutes
          },
          {
            path: '',
            pathMatch: "full",
            redirectTo: 'vehicles'
          }
        ]
      }
    ]
  }
];
