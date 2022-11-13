import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { PagesService } from './services/pages.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  constructor(public pagesService: PagesService) {}

  get pages() {
    return this.pagesService.pages;
  }
}
