import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ViewChild,
  AfterViewInit,
  AfterContentInit,
} from '@angular/core';
import { Page } from '../../services/pages.service';

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements AfterViewInit {
  @Input('page') page: Page;
  @ViewChild('heroVideo') heroVideo: ElementRef<HTMLVideoElement>;
  constructor() {}

  ngAfterViewInit() {
    this.heroVideo.nativeElement.muted = true;
  }
}
