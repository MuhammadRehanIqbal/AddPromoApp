import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth.guard';
import { RoleGuard } from '../core/role.guard';

// Import user components
import { UserDashboardComponent } from './dashboard/dashboard.component';
// import { UserProfileComponent } from './user/user-profile.component';
// import { UserProductComponent } from './product/user-product.component';
// import { UserOrderComponent } from './order/user-order.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'user' },
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: UserDashboardComponent },
      // { path: 'user', component: UserProfileComponent },
      // { path: 'product', component: UserProductComponent },
      // { path: 'order', component: UserOrderComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
