import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  isLoading = true;

  constructor() {
    setTimeout(() => (this.isLoading = false), 2300);
  }
}
