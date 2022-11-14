import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ViewChild,
  AfterViewInit,
  AfterContentInit,
  Renderer2,
} from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { Page } from '../../services/pages.service';
import { ParallaxService } from '../../services/parallax.service';

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements AfterViewInit {
  @Input('page') page: Page;
  @ViewChild('heroVideo') heroVideo: ElementRef<HTMLVideoElement>;

  titleTop = 'calc(((100vw - 6px) / (16 / 9) / 2 ))'

  startLine: number


  range: {
    start: number;
    end: number
  }

  constructor(private parallaxService: ParallaxService, private el: ElementRef) {

    // this.parallaxService.$scrollAmount.subscribe((scrollY: number) => {
      
    // })
  }

  ngAfterViewInit() {

    this.heroVideo.nativeElement.muted = true;

  }

 


}
