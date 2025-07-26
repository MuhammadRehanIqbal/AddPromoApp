import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './core/jwt.interceptor';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  
  imports: [
    SharedModule,
    BrowserAnimationsModule
    // other imports...
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ]
})
export class AppModule {}
