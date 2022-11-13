import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Directives
import { ParallaxDirective } from './directives/parallax.directive';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PageComponent } from './components/page/page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { PortfolioPageComponent } from './components/portfolio-page/portfolio-page.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    ParallaxDirective,
    HeaderComponent,
    PageComponent,
    ContactPageComponent,
    PortfolioPageComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
