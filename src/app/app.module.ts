import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ContactComponent } from './contact/contact.component';
import { ShopicComponent } from './shopic/shopic.component';
import { FormsModule } from '@angular/forms';
import { ItemComponent } from './shopic/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    ChatBoxComponent,
    ContactComponent,
    ShopicComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class YourAppModule {}