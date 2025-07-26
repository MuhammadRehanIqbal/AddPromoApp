import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  //{ path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth/login', component: LoginComponent },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'promoter',
    loadChildren: () => import('./Promoters/promoters.module').then(m => m.PromotersModule)
  },
  {
    path: 'advertiser',
    loadChildren: () => import('./Advertisers/advertiser.module').then(m => m.AdvertiserModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
   },
  
   { path: '**', redirectTo: '' }
   // { path: '**', redirectTo: 'auth/login' }
];
