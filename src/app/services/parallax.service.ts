import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ParallaxService {
  renderer: Renderer2;
  scrollAmount = 0;
  screenHeight = window.innerHeight;
  $scrollAmount = new BehaviorSubject<number>(0);
  constructor(private rendererFactory2: RendererFactory2) {
    this.renderer = this.rendererFactory2.createRenderer(null, null);
    this.renderer.listen('window', 'scroll', (e) => {
      this.scrollAmount = window.scrollY;

      this.$scrollAmount.next(window.scrollY);
    });
    this.renderer.listen('window', 'resize', (e) => {
      this.screenHeight = window.innerHeight;
    });
  }
}
