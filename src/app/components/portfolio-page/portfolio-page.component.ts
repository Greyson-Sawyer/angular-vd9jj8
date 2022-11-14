import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../services/pages.service';

@Component({
  selector: 'portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css'],
})
export class PortfolioPageComponent implements OnInit {
  constructor(public pagesService: PagesService) {}

  ngOnInit() {}

  get pages() {
    return this.pagesService.pages;
  }
}
