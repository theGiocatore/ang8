import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
@Input() private artikal = Item;
  constructor() { }

  ngOnInit() {
  }

}
