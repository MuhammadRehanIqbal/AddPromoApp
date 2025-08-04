// src/app/services/menu.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface MenuItem {
  label: string;
  route: string;
  icon: string;
  order: number;
}
 
 @Injectable({ providedIn: 'root' })
export class MenuService {
  private readonly STORAGE_KEY = 'app_menus';

  private menusSubject = new BehaviorSubject<MenuItem[]>(this.getMenusFromStorage());
  menus$ = this.menusSubject.asObservable();

  private readonly MENU_URL = environment.apiUrl;
  //'https://localhost:7153/users/get_menu_by_user';

  constructor(private http: HttpClient) {}

  private getMenusFromStorage(): MenuItem[] {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  }

  private saveMenusToStorage(menus: MenuItem[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(menus));
  }

  loadMenusByRole(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${this.MENU_URL +'/users/get_menu_by_user'}`).pipe(
      tap(menus => {
        this.menusSubject.next(menus);
        this.saveMenusToStorage(menus);
      })
    );
  }

  clearMenus() {
    this.menusSubject.next([]);
    localStorage.removeItem(this.STORAGE_KEY);
  }
}
