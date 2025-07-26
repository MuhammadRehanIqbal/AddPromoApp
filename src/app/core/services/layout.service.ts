import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  private _collapsed = signal(false);
  toggle() {
    this._collapsed.set(!this._collapsed());
  }

  isCollapsed = computed(() => this._collapsed());
  sidenavWidth = computed(() => this._collapsed() ? 60 : 240);
}