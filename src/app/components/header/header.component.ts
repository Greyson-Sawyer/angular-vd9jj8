import { Component, OnInit } from '@angular/core';

import { NavigationService, TabName } from '../../services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private nav: NavigationService) {}

  ngOnInit() {}

  isTabActive(tabName: TabName) {
    return tabName === this.nav.activeTab;
  }

  selectTab(tabName: TabName) {
    this.nav.selectTab(tabName);
  }

  get useBlackText() {
    return this.nav.activeTab !== 'portfolio';
  }
}
