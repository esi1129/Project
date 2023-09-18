import { Component } from '@angular/core';
import {form} from "./form.interface";

@Component({
  selector: 'form-component',
  templateUrl: './form.component.html',
  styleUrls: ['form.component.css']
})

export class FormComponent {

  forms: form[] = [
    {
      email: 'x.gmail.com',
      address: ' h.jkl',
      password: '24663938'
    },
    {
      email: 'y.gmail.com',
      address: ' h.jklp',
      password: '124663938'
    }
  ]

  public onAddUser(email: string, address: string, password: string, e: Event) {

   //preventDefault() using for don't refresh page by submit button

    e.preventDefault();

    let f: form = {
      email : email,
      address : address,
      password : password
    };

    this.forms.push(f);
  }


}
