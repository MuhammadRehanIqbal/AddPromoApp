
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-promoterdashboard',
  standalone: true,
  imports: [CommonModule, RouterModule], // if needed
  templateUrl: './promoterdashboard.component.html',
  styleUrl: './promoterdashboard.component.scss'
})
export class PromoterdashboardComponent {
  constructor(private auth: AuthService, private router: Router) {}

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
} 