import { Routes } from '@angular/router';
import { CoursesRoutingModule } from './courses/courses-routing.module';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'courses' },
  {
    path: 'courses',
    loadChildren: () =>
      import('./courses/courses-routing.module').then(
        (m) => m.CoursesRoutingModule
      ),
  },
];
