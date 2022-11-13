import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  activeTab: 'portfolio' | 'contact' = 'portfolio';

  constructor() {}

  selectTab(tabName: 'portfolio' | 'contact') {
    this.activeTab = tabName;
  }
}
