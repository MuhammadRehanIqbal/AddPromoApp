import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PromotersRoutingModule } from "./promoters-routing.module";
import { SharedModule } from "../shared/shared.module";
import { PromoterdashboardComponent } from "./promoterdashboard/promoterdashboard.component"; 
import { LayoutComponent } from "../shared/layout/layout/layout.component";

@NgModule({
  imports: [
    LayoutComponent,
    CommonModule,
    PromotersRoutingModule,
    SharedModule,
    PromoterdashboardComponent
  ]
})
export class PromotersModule {}
