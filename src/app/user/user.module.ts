import { NgModule } from "@angular/core";
import { UserDashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from "@angular/common";
import { UserRoutingModule } from "./user-routing.module"; 
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [  
    ],
    imports: [
      UserDashboardComponent,
      CommonModule,
      SharedModule,
      UserRoutingModule
    ]
  })
  export class UserModule { }
  