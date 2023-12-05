import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {



  user: any = {
    nome: "",
    cognome: "",
    psw: "",
    pswConfirm: "",
    genere: "",
    immagineProfilo:"",
    biografia: "",
    username: ""
  }

  generi = [
    {
      label: "uomo",
      value: "uomo"
    },
    {
      label: "donna",
      value: "donna"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  submit(form: NgForm){
    console.log("Form inviato!", form.form.value)

  }

}
