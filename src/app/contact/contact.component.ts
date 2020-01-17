import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms'
import { isNgContainer } from '@angular/compiler';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';


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

     console.log("treba ovo da odradim, nije zavrseno :)");
  
   }
upozorenje(){
    let mejl = (<HTMLInputElement>document.getElementById("inputMail"));
    let poruka = document.getElementById("text1");
    poruka.style.display="block";
    if(mejl.value.includes("@")){
      poruka.style.display="none";
    }

}


subscribe(){
  let dgm = document.getElementById("sub");
  let inp = (<HTMLInputElement> document.getElementById("subInput"));

  if((inp.value.length > 7) && (inp.value.includes("@"))){
  console.log("You will start receiving our newsletters at your Email address: " + inp.value);
  inp.value = "";  
  }else{
    console.log("Please enter valid email address.");
  }
}
  



  ngOnInit() {
  }

}
