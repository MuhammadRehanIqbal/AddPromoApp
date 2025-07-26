import { NgModule } from "@angular/core";
import { UserDashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from "@angular/common";
import { UserRoutingModule } from "./user-routing.module";
import { share } from "rxjs";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
      UserDashboardComponent,
    //   UserProfileComponent,
    //   UserProductComponent,
    //   UserOrderComponent
    ],
    imports: [
      CommonModule,
      SharedModule,
      UserRoutingModule
    ]
  })
  export class UserModule { }
  