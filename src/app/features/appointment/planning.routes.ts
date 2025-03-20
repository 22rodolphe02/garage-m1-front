import {Routes} from '@angular/router';

const PlanningComponent = () =>
  import('../appointment/pages/planning-page/planning-page.component').then(m => m.PlanningPageComponent);

export const planningRoutes: Routes = [
  {
    path: '',
    loadComponent: PlanningComponent
  }
]
