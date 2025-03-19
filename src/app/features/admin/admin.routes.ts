import {Routes} from '@angular/router';
import {AdminDashboardPageComponent} from './pages/admin-dashboard-page/admin-dashboard-page.component';

export const adminRoutes: Routes = [
  {
    path: '', loadComponent: () =>
      import('./pages/admin-dashboard-page/admin-dashboard-page.component').then(c => c.AdminDashboardPageComponent)
  }
];
