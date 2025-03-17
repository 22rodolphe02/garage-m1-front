import { Routes } from '@angular/router';
import {adminRoutes} from './features/admin/admin.routes';


const loadLayoutComponent = () =>
  import('./shared/components/layout/layout.component').then(m => m.LayoutComponent);

export const routes: Routes = [
  { path: '', redirectTo: 'user-space', pathMatch: 'full' },
  {
    path: 'sign-in', loadComponent: () =>
      import('./features/authentication/components/sign-in/sign-in.component').then(c => c.SignInComponent)
  },
  {
    path: 'user-space',
    loadComponent: loadLayoutComponent,
    children: [
      {
        path: 'admin',
        loadChildren: () => adminRoutes
      }
    ]
  }
];
