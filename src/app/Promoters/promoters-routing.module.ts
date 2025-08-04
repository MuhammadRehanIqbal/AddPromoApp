import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth.guard';
import { RoleGuard } from '../core/role.guard';

// Import your components 
import { PromoterdashboardComponent } from './promoterdashboard/promoterdashboard.component'; 
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { LayoutComponent } from '../shared/layout/layout/layout.component';
import { TaskFormComponent } from './tasks/task-form/task-form.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['Promoters'] },
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: PromoterdashboardComponent }, 
      { path: 'tasks', component: TasksListComponent },
      { path: 'tasks/create', component: TaskFormComponent },
      { path: 'tasks/edit/:id', component: TaskFormComponent },
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
export class PromotersRoutingModule {}
