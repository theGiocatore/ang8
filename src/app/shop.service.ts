import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from './model/item';


const url = "http://localhost:3000/rezultati";
@Injectable({
  providedIn: 'root'
})
export class ShopService {
  
  constructor(private http: HttpClient) { }
 
getAll():Observable <Item[]>{
  return this.http.get<Array<Item>>(url).pipe(map(response => {
  let a = new Array <Item>();
  response.forEach(element => {
    a.push(new Item(element));
  
  });
    return a;
  }))
}

}

