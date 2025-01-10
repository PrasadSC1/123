import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { log } from 'node:console';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  constructor(public http: HttpClient, public app: AppComponent) {
  }
  enquiry: any={};
  addEnquiry() {
    const url = this.app.baseUrl + 'buyer/addEnquiry';
    console.log(this.enquiry);

    this.http.post(url, this.enquiry).subscribe((data: any) => {
      if (!data) {
        window.alert('All fields are manditory')
      }
      else {
        window.alert('Success')
      }
    });
  }
}
