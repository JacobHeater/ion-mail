import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { Inbox } from '../pages/inbox/inbox';

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/inbox',
    pathMatch: 'full'
  },
  { path: 'inbox', component: Inbox }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
