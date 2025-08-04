import { NgModule } from "@angular/core";
import { AdminDashboardComponent } from '../admin/dashboard/dashboard.component';
import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from "./admin-routing.module";
import { SharedModule } from "../shared/shared.module";
import { LayoutComponent } from "../shared/layout/layout/layout.component";

@NgModule({
    declarations: [ 
    ],
    imports: [
      LayoutComponent,
      AdminDashboardComponent,
      CommonModule,
      AdminRoutingModule,
      SharedModule
    ]
  })
  export class AdminModule { }
  