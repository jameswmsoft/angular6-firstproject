import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';

const appRoutes: Routes = [
  {
    path: 'admin',
    redirectTo: 'pages/user',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'login',
      pathMatch: 'full'
  },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    }
];

export const routing = RouterModule.forRoot(appRoutes);
