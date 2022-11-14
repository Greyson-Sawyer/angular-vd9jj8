import { Injectable } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

export type TabName = 'portfolio' | 'contact';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  activeTab: TabName = 'portfolio';

  constructor(private router: Router) {
    this.router.events.subscribe((e: RouterEvent) => {
      if (!e.id) return;
      if (e.url === '/') this.selectTab('portfolio');
      if (e.url !== '/') {
        const name: TabName = e.url.replace('/', '') as TabName;
        this.selectTab(name);
      }
    });
  }

  selectTab(tabName: TabName) {
    this.activeTab = tabName;
  }
}
