import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { PageComponent } from './components/page/page.component';
import { ParallaxDirective } from './directives/parallax.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ParallaxDirective,
    HeaderComponent,
    PageComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
