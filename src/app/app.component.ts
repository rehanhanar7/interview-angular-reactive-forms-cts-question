import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('formref1') formref1object: NgForm;
  @ViewChild('formref2') formref2object: NgForm;
  requiredstatus: boolean = true;
  constructor() {
    // setTimeout(() => {
    //   console.log('this.formref1object', this.formref1object);
    //   console.log('this.formref2object', this.formref2object);
    // }, 1000);
  }
}
