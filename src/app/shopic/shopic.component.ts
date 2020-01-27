import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../model/item';
import { ShopService } from '../shop.service';


@Component({
  selector: 'app-shopic',
  templateUrl: './shopic.component.html',
  styleUrls: ['./shopic.component.css']
})


export class ShopicComponent implements OnInit {
  
  private varijabla:Item[];

  constructor(private servis: ShopService) { 
   
}
funkcija(par){
  this.servis.filtriraj(par).subscribe(data=>{
    this.varijabla = data;
  });
}
all(){
  this.servis.getAll().subscribe(
    (data:any[])=>this.varijabla = data,
    (error) => console.log(error)
  );
  }

kujna(){
  this.funkcija("Kitchen");
}
slipingrum(){
  this.funkcija("Bedroom");
}
livinrum(){
  this.funkcija("Livingroom");
}
shhhtingrum(){
  this.funkcija("Bathroom");
}

  ngOnInit() {

    this.all()
    
  
  }


}
