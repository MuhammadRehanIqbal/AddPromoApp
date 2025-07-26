import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth.guard';
import { RoleGuard } from '../core/role.guard';

// Import your components  
import { AdvertiserdashboardComponent } from './advertiserdashboard/advertiserdashboard.component';
// import { AdminUserComponent } from './user/admin-user.component';
// import { AdminProductComponent } from './product/admin-product.component';
// import { AdminOrderComponent } from './order/admin-order.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'advertiser' },
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: AdvertiserdashboardComponent },
      // { path: 'user', component: AdminUserComponent },
      // { path: 'product', component: AdminProductComponent },
      // { path: 'order', component: AdminOrderComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvertisersRoutingModule {}
