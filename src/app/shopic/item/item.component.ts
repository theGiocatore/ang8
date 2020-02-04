import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';
import { ShopService } from 'src/app/shop.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  artikal : Item;
  varijabla: Item[];
  kolicina = {value:1}
  id:number;

  constructor(private servis:ShopService, private route: ActivatedRoute) { }

  dovuciObjekte(){
    this.servis.getAll().subscribe(
      (data:any[])=> this.varijabla = data,
      
      (error) => console.log(error)
    );
    }

  izvuciId(){
      this.route.paramMap.subscribe(params=>
        this.id = Number(params.get("id"))
      );
      return this.id;
    }
  pronadjiArtikal(){
      for (let i in this.varijabla){
        if(this.varijabla[i].id === this.id){
          this.artikal = this.varijabla[i];
        }
      }
        }
              
  vratiItem(){
    this.dovuciObjekte();
    this.izvuciId();
    setTimeout(() => {
    this.pronadjiArtikal();     
    },500);
  }
    
  resetuj(broj: number) {
    if (broj == 0) {
      this.id = 7;
    } else if (broj > 7) {
      this.id = 1;
    }
  }
    
    umanjiId(){
      this.kolicina.value = 1;
      this.id = this.id -1;
      this.resetuj(this.id);
      this.pronadjiArtikal()
      
    }
    uvecajId(){
      this.kolicina.value = 1;
      this.id = this.id +1;
      this.resetuj(this.id);
      this.pronadjiArtikal()
      
    }
  
  
  ngOnInit() {
    
  this.vratiItem();
        

}
  

}