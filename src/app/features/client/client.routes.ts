import {Routes} from '@angular/router';
import {invoiceRoutes} from '../invoice/invoice.routes';
import {vehicleRoutes} from '../vehicle/vehicle.routes';

const ClientDetailComponent = () =>
  import('./pages/client-details-page/client-details-page.component').then(m => m.ClientDetailsPageComponent);

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
            children: vehicleRoutes
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
