
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-advertiserdashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './advertiserdashboard.component.html',
  styleUrl: './advertiserdashboard.component.scss'
})
export class AdvertiserdashboardComponent {
  constructor(private auth: AuthService, private router: Router) {}

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
} 