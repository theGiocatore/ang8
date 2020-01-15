import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item';
import { Lista } from '../model/listItem';
import { stringify } from 'querystring';

const proizvodi = [
  {
    id:1,
    ime: "Living Room Furniture",
    cena:"350.000,00",
    opis:"Nice piece of furniture. Make your living room look awesome!",
    slika:"../../assets/livingRoomFurniture.jpg",
    vrsta:"Livingroom"
  },
  {
    id:2,
    ime: "Kitchen Table",
    cena:"15.000,00",
    opis:"Oak wood, fantastic family table, where you can eat, gamble, make love or do whatever you want.",
    slika:"../../assets/kitchenTable.png",
    vrsta:"Kitchen"
  },
  {
    id:3,
    ime: "Bathroom chair",
    cena:"35.000,00",
    opis:"An amazing chair to have it in your house. While waiting someone to finish it's job, you can enjoy in comfortable sitting and not so comfortable oddors inside your bathroom.",
    slika:"../../assets/chair1.jpg",
    vrsta:"Bathroom"
  },
  {
    id:4,
    ime: "Bar chair",
    cena:"25.000,00",
    opis:"An amazing chair to have it in your house where you can enjoy in comfortable sitting until you pass out of alcohol.",
    slika:"../../assets/BarStools.jpg",
    vrsta:"Kitchen"
  },
  {
    id:5,
    ime: "King size bed",
    cena:"130.000,00",
    opis:"Sleep like a king! For symbolic price you can afford this amazing piece of furniture. To share it with your wife and girlfriends",
    slika:"../../assets/bedRoom.jpg",
    vrsta:"Bedroom"
  },
  {
    id:6,
    ime: "Night table",
    cena:"9.000,00",
    opis:" Lorem, lorem.... ",
    slika:"../../assets/nighttable.jpg",
    vrsta:"Bedroom"
  },
  {
    id:7,
    ime: "Desk",
    cena:"10.000,00",
    opis:"Some text about how this desk looks awesome!",
    slika:"../../assets/radniSto.jpg",
    vrsta:"Livingroom"
  }
]


@Component({
  selector: 'app-shopic',
  templateUrl: './shopic.component.html',
  styleUrls: ['./shopic.component.css']
})


export class ShopicComponent implements OnInit {
  // private namestaj: Item[] = [];
  
  private varijabla: Item[] = [];

  constructor() { 
    for (let i of proizvodi){
      this.varijabla.push(new Item(i));
    }
  }
    

  myFunction(p): void {
    this.varijabla = [];
    for(let i in proizvodi) {
      if(proizvodi[i].vrsta === p ) {
        this.varijabla.push(new Item(proizvodi[i]));
      }
    }
  }
  kujna(){
    this.varijabla=[];
    this.myFunction("Kitchen");
  }
  livinrum(){
    this.varijabla=[];
    this.myFunction("Livingroom");
  }
  slipingrum(){
    this.varijabla=[];
    this.myFunction("Bedroom");
  }
  shitingrum(){
    this.varijabla=[];
    this.myFunction("Bathroom");
  }
  allin(){
    this.varijabla=[];
    for (let i of proizvodi){
      this.varijabla.push(new Item(i));
  }
}


  ngOnInit() {

  }
}


