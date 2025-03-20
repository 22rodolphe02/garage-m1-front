import {Routes} from '@angular/router';

const InvoiceListComponent = () =>
  import('../invoice/pages/invoice-list-page/invoice-list-page.component').then(m => m.InvoiceListPageComponent);

export const invoiceRoutes: Routes = [
  {
    path: '',
    loadComponent: InvoiceListComponent
  },
]
