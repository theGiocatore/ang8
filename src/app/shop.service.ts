import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from} from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from './model/item';
import {HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ShopService {
  
  constructor(private http: HttpClient) { } 
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  getAll() {
    return this.http.get('api/varijabla',{
      headers:this.headers
    })
  }
 filtriraj(p):Observable <Item[]>{
  return this.http.get<Array<Item>>('api/varijabla',{
    headers:this.headers
  }).pipe(map(response =>{
    let a = new Array <Item>();
    response.forEach(element => {
      a.push(new Item(element));
    });
    let b = new Array <Item>();
    a.forEach(item =>{
      if (item.vrsta === p){
        b.push(item);
      }
    })
    return b;
  }))
}


}

// const url = "http://localhost:3000/rezultati";
// @Injectable({
//   providedIn: 'root'
// })
// export class ShopService {
  
//   constructor(private http: HttpClient) { }
 
// getAll():Observable <Item[]>{
//   return this.http.get<Array<Item>>(url).pipe(map(response =>{
//   let a = new Array <Item>();
//   response.forEach(element => {
//     a.push(new Item(element));
  
//   });
//     return a;
    
//   }))
// }
// filtriraj(p):Observable <Item[]>{
//   return this.http.get<Array<Item>>(url).pipe(map(response =>{
//     let a = new Array <Item>();
//     response.forEach(element => {
//       a.push(new Item(element));
//     });
//     let b = new Array <Item>();
//     a.forEach(item =>{
//       if (item.vrsta === p){
//         b.push(item);
//       }
//     })
//     return b;
//   }))
// }

// getItem(id):Observable <Item> {
//   return this.http.get(url + "/" + id).pipe(map(response =>{
//     return new Item(response);
//   }))
// }
