 

import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { Router, RouterModule } from "@angular/router";
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { LayoutService } from "../../../core/services/layout.service";
import { AuthService } from "../../../core/services/auth.service";
import { MenuService } from "../../../core/services/menu.service";
import { MenuItem } from "../../../core/models/menu-Item.model"; 
@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, RouterModule, MatSidenavModule, MatListModule, MatIconModule, MatTooltipModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  menus: MenuItem[] = []; 
  
  constructor(
    public layoutService: LayoutService,
    private menuService: MenuService,
    private authService: AuthService,
  ) {  }

 
  ngOnInit() {
    const stored = localStorage.getItem('app_menus');
  if (stored) {
    const parsed = JSON.parse(stored);
    this.menus = parsed.menus || []; // ✅ use menus not menue
  }
  }
 
}