import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { PortfolioPageComponent } from './components/portfolio-page/portfolio-page.component';

const routes: Routes = [
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  { path: '', component: PortfolioPageComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
