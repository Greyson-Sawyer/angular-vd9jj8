import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private nav: NavigationService) {}

  ngOnInit() {}

  isTabActive(tabName: 'portfolio' | 'contact') {
    return tabName === this.nav.activeTab;
  }

  selectTab(tabName: 'portfolio' | 'contact') {
    this.nav.selectTab(tabName);
  }
}
