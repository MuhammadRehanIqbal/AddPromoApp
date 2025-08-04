// src/app/guards/role.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRoles: string[] = route.data['roles'];

    const userRole = this.auth.role;
debugger

console.log('RoleGuard check:', { expectedRoles, userRole });
    if (!userRole || !expectedRoles.includes(userRole)) {
      this.router.navigate(['/']); // or redirect elsewhere
      return false;
    }
    return true;
  }
}
