import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule,MatCardModule,MatIconModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';


  constructor(private auth: AuthService, private router: Router) {}

 
  
  login() {
    this.error = '';
    this.auth.login(this.username, this.password).subscribe({
      next: (menus) => {
      //next: res => { 
        debugger
        const role = this.auth.role;
        if (role === 'Admin') {
          this.router.navigate(['/admin']);
        }else if (role === 'Doctor') {
          this.router.navigate(['/doctor']);
        }else if (role === 'Advertisers') {
          this.router.navigate(['/advertiser']);
        } else if (role === 'Promoters') {
          this.router.navigate(['/promoter']);
        } else if (role === 'User') {
          this.router.navigate(['/user']);
        } else {
          this.router.navigate(['/']);
        }
      },
      error: err => {
        this.error = 'Login failed. Please check your credentials.';
      }
  });
  }
  goToHome() {
    this.router.navigate(['/home']);
  }
} 
