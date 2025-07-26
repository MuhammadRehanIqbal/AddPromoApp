import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,            // ✅ for template-driven forms like ngModel
    ReactiveFormsModule,    // ✅ for reactive forms with FormGroup
    AuthRoutingModule,
    
  ]
})
export class AuthModule { }
