import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Routing
// import { RouterModule, Routes } from '@angular/router'
// const routes: Routes = []

// Directives
import { ParallaxDirective } from './directives/parallax.directive';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PageComponent } from './components/page/page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule

  ],
  declarations: [
    AppComponent,
    ParallaxDirective,
    HeaderComponent,
    PageComponent,
    ContactPageComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
