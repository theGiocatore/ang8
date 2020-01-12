import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms'


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
private user = {
  ime: '',
  mail:'',
  tema:'',
  poruka:''
}
formular : NgForm;


  constructor() {

   }
   posalji(){

     console.log(JSON.stringify(this.user));
    this.formular.resetForm();
   }
  ngOnInit() {
  }

}
