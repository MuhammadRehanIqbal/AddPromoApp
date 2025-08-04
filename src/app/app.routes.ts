import { Routes } from '@angular/router';
import { provideRouter, withPreloading, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './publicportal/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './publicportal/register/register.component';
import { AuthGuard } from './core/auth.guard';
import { RoleGuard } from './core/role.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: 'promoter',
    loadChildren: () =>
      import('./Promoters/promoters.module').then(m => m.PromotersModule),
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['Promoters'] }
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['Admin'] }
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then(m => m.UserModule),
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['User'] }
  },
  // {
  //   path: 'advertiser',
  //   loadChildren: () =>
  //     import('./Advertisers/advertiser.module').then(m => m.AdvertisersModule),
  //   canActivate: [AuthGuard, RoleGuard],
  //   data: { roles: ['Advertisers'] }
  // },

  { path: '**', redirectTo: '' }
];

// ✅ This is now your appRouter to use in main.ts
export const appRouter = provideRouter(routes, withPreloading(PreloadAllModules));
