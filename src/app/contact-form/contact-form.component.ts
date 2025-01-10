import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppComponent } from '../app.component';
import { log } from 'node:console';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'] // Corrected
})


export class ContactFormComponent {
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
