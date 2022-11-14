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

  titleTop = '0px'

  range: {
    start: number;
    end: number
  }

  constructor(private parallaxService: ParallaxService, private el: ElementRef) {

    this.parallaxService.$scrollAmount.subscribe((scrollY: number) => {
      this.setRange()
      if (scrollY <= this.range.start) {
        this.titleTop = `${this.range.start-500}px`
      }

      if (scrollY >= this.range.end) {
        this.titleTop = `${this.range.end}px`
      }
      if (scrollY >= this.range.start && scrollY <= this.range.end) {
        this.titleTop = '50%'
      }
    })
  }

  ngAfterViewInit() {
    this.setRange()
    this.heroVideo.nativeElement.muted = true;

  }

  setRange(){
    this.range = {
      start: this.el.nativeElement.offsetTop,
      end: this.el.nativeElement.offsetTop + this.el.nativeElement.offsetHeight
    }
  }


}
