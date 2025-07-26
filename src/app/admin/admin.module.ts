import { NgModule } from "@angular/core";
import { AdminDashboardComponent } from '../admin/dashboard/dashboard.component';
import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from "./admin-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
      AdminDashboardComponent,
    //   AdminUserComponent,
    //   AdminProductComponent,
    //   AdminOrderComponent
    ],
    imports: [
      CommonModule,
      AdminRoutingModule,
      SharedModule
    ]
  })
  export class AdminModule { }
  