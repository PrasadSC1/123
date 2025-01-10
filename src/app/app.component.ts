import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SENOVA';
  baseUrl = 'http://13.50.138.222:8080/ecommerce-clone/'
  // baseUrl = 'http://localhost:8080/'
  id: number = 0;
  whatToShow: number = 0;
  constructor() {
    console.log(this.id);
  }
}
