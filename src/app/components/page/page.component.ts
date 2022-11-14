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

  startLine: number
  finishLine: number

  range: {
    start: number;
    end: number
  }

  constructor(private parallaxService: ParallaxService, private el: ElementRef) {

    this.parallaxService.$scrollAmount.subscribe((scrollY: number) => {
      this.setRange()
      if (scrollY <= this.range.start) {
        this.titleTop = `${this.startLine}px`
      }

      else if (scrollY >= this.range.end) {
        this.titleTop = `${this.finishLine}px`
      }
      else  {
        this.titleTop = `${this.startLine + scrollY}px`
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
    this.startLine = (this.el.nativeElement.offsetWidth / (16 / 9)) /2 + this.range.start
    this.finishLine
  }


}
