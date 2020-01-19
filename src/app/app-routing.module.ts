import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ShopicComponent } from './shopic/shopic.component';
import { ItemComponent } from './shopic/item/item.component';
import { CartComponent } from './shopic/item/cart/cart.component';


const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"about",component: AboutComponent},
  {path:"contact",component: ContactComponent},
  {path:"shop",component:ShopicComponent},
  {path:"item",component:ItemComponent},
  {path:"cart", component:CartComponent},
  {path:"shop/item/:id" ,component:ItemComponent},
  {path:"", redirectTo: "/home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
