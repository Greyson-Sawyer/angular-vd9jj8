import {
  Directive,
  Input,
  ElementRef,
  AfterContentChecked,
  AfterViewInit,
  HostBinding,
} from '@angular/core';
import { ParallaxService } from '../services/parallax.service';

@Directive({
  selector: '[parallax]',
})
export class ParallaxDirective implements AfterViewInit {
  @Input('ratio') parallaxRatio: number = 1;
  @HostBinding('style.backgroundPosition') get backgroundPos() {
    // ~~ PRETTY VERSION
    // const top = this.eleRef.nativeElement.getBoundingClientRect().top;
    // const elHeight = this.eleRef.nativeElement.getBoundingClientRect().height;
    // const maxRange = elHeight + this.parallaxService.screenHeight;
    // const offsetY = Math.min(
    //   Math.max(((top + elHeight) / maxRange) * 100, 0),
    //   100
    // );
    // return `0 ${offsetY}%`;

    // ~~ UGLY VERSION
    // console.log('ran');
    return `50% ${Math.min(
      Math.max(
        ((this.eleRef.nativeElement.getBoundingClientRect().top +
          this.eleRef.nativeElement.getBoundingClientRect().height) /
          (this.eleRef.nativeElement.getBoundingClientRect().height +
            this.parallaxService.screenHeight)) *
          100,
        0
      ),
      100
    )}%`;
  }

  constructor(
    private eleRef: ElementRef,
    private parallaxService: ParallaxService
  ) {}

  ngAfterViewInit() {
    // console.log(this.eleRef.nativeElement.getBoundingClientRect());
  }
}
