// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { MenuService } from './menu.service';
import { environment } from '../../../environments/environment'; // Import environment variables


const apiUrl = environment.apiUrl;

export interface LoginResponse {
  token: string;
  refreshToken: string;
  role: string;  // e.g. 'Admin' or 'User'
}

@Injectable({ providedIn: 'root' })
export class AuthService {
   
  private readonly LOGIN_URL = apiUrl;
  //'https://localhost:7153/auth/GenerateToken';
  private readonly TOKEN_KEY = 'token';
  private readonly ROLE_KEY = 'role';

  private tokenSubject = new BehaviorSubject<string | null>(localStorage.getItem(this.TOKEN_KEY));
  private roleSubject = new BehaviorSubject<string | null>(localStorage.getItem(this.ROLE_KEY));

  constructor(
    private http: HttpClient,
    private menuService: MenuService
  ) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<LoginResponse>(this.LOGIN_URL +'/auth/GenerateToken', { username, password }).pipe(
      tap(({ token, role }) => {
        localStorage.setItem(this.TOKEN_KEY, token);
        localStorage.setItem(this.ROLE_KEY, role);
        this.tokenSubject.next(token);
        this.roleSubject.next(role);
      }),
      switchMap(() => this.menuService.loadMenusByRole())  // now loads menus from API
    );
  }
  

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.ROLE_KEY);
    this.tokenSubject.next(null);
    this.roleSubject.next(null);
    this.menuService.clearMenus();
  }

  get token(): string | null {
    return this.tokenSubject.value;
  }

  get role(): string | null {
    return this.roleSubject.value;
  }

  get token$(): Observable<string | null> {
    return this.tokenSubject.asObservable();
  }

  get role$(): Observable<string | null> {
    return this.roleSubject.asObservable();
  }

  isLoggedIn(): boolean {
    return !!this.token;
  }
}
