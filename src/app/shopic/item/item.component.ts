import { Component, OnInit, Input } from '@angular/core';
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

id:number;
  constructor(private servis:ShopService, private route: ActivatedRoute) { }

resetuj(broj:number){
  if(broj == 0){
    this.id = 7;
  }else if(broj > 7){
    this.id = 1;
  }
}

umanjiId(){
  this.id = this.id -1;
  this.resetuj(this.id);
  this.servis.getItem(this.id).subscribe(data =>
    this.artikal = data);
}
uvecajId(){
  this.id = this.id +1;
  this.resetuj(this.id);
  this.servis.getItem(this.id).subscribe(data =>
    this.artikal = data); 
}

konzola(){
  console.log(this.artikal);
}

  ngOnInit() {
    this.route.paramMap.subscribe(params=>
      this.id = Number(params.get("id"))
    );
    console.log(this.id);
      this.servis.getItem(this.id).subscribe(data =>
        this.artikal = data
        );
  }

}

