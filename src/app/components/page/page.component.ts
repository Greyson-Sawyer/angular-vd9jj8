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

  titleTop = '50%'

  range = {
    start: 0,
    end: 0,
  }

  constructor(private parallaxService: ParallaxService, private el: ElementRef) {

    this.parallaxService.$scrollAmount.subscribe((scrollY: number) => {
      this.range = {
        start: this.el.nativeElement.offsetTop,
        end: this.el.nativeElement.offsetTop + this.el.nativeElement.offsetHeight
      }
      console.log(this.range)
    })
  }

  ngAfterViewInit() {

    this.heroVideo.nativeElement.muted = true;

  }


}
