import { NgModule } from "@angular/core"; 
import { CommonModule } from "@angular/common"; 
import { SharedModule } from "../shared/shared.module";
import { PromoterdashboardComponent } from "./promoterdashboard/promoterdashboard.component";

@NgModule({
    declarations: [
      PromoterdashboardComponent,
    //   AdminUserComponent,
    //   AdminProductComponent,
    //   AdminOrderComponent
    ],
    imports: [
      CommonModule,
      PromotersModule,
      SharedModule
    ]
  })
  export class PromotersModule { }
  