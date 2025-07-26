// import { Routes, RouterModule } from '@angular/router'; 
// import { provideRouter, withPreloading, PreloadAllModules } from '@angular/router';

// import { LoginComponent } from './auth/login/login.component'; 

// import { AuthGuard } from './core/auth.guard';
// import { RoleGuard } from './core/role.guard';
// import { AdminDashboardComponent } from './admin/dashboard/dashboard.component';
// import { UserDashboardComponent } from './user/dashboard/dashboard.component';

// const routes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' },

//   { path: 'login', component: LoginComponent },

//   { 
//     path: 'admin', 
//     component: AdminDashboardComponent, 
//     canActivate: [AuthGuard, RoleGuard],
//     data: { roles: ['Admin'] }
//   },

//   { 
//     path: 'user', 
//     component: UserDashboardComponent, 
//     canActivate: [AuthGuard, RoleGuard],
//     data: { roles: ['User'] }
//   },

//   { path: '**', redirectTo: 'login' }
// ];

// export const appRoutingProviders = [];

// export const appRouter = provideRouter(
//   routes,
//   withPreloading(PreloadAllModules)
// );
import { Routes } from '@angular/router';
import { provideRouter, withPreloading, PreloadAllModules } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './core/auth.guard';
import { RoleGuard } from './core/role.guard';
import { AdminDashboardComponent } from './admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './user/dashboard/dashboard.component';
import { LayoutComponent } from '../app/shared/layout/layout/layout.component';
import { HomeComponent } from './publicportal/home/home.component';
import { AboutComponent } from './publicportal/about/about.component';
import { ContactComponent } from './publicportal/contact/contact.component';
import { RegisterComponent } from './publicportal/register/register.component'; 
import { PromoterdashboardComponent } from './Promoters/promoterdashboard/promoterdashboard.component';
import { AdvertiserdashboardComponent } from './Advertisers/advertiserdashboard/advertiserdashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  //{ path: '', redirectTo: 'login', pathMatch: 'full' },
   
  // Public routes
  { path: '', component: HomeComponent }, // homepage
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Authenticated routes
  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],  
    children: [
      {
        path: 'admin',
        component: AdminDashboardComponent,
        canActivate: [RoleGuard],
        data: { roles: ['Admin'] }
      },
      {
        path: 'advertiser',
        component: AdvertiserdashboardComponent,
        canActivate: [RoleGuard],
        data: { roles: ['Advertisers'] }
      },
      {
        path: 'promoter',
        component: PromoterdashboardComponent,
        canActivate: [RoleGuard],
        data: { roles: ['Promoters'] }
      },
      {
        path: 'user',
        component: UserDashboardComponent,
        canActivate: [RoleGuard],
        data: { roles: ['User'] }
      }
    ]
  },

  { path: '**', redirectTo: '' }
  // { path: '**', redirectTo: 'login' }
];

export const appRoutingProviders = [];

export const appRouter = provideRouter(
  routes,
  withPreloading(PreloadAllModules)
);
