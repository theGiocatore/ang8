import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  constructor() { }

  sakrij() {
    var naziv = document.getElementById("togler");
     var chat = document.getElementById("skriveni");
     if(chat.style.display == "block"){
        chat.style.display = "none";
        naziv.innerHTML = "Chat with us"
     } else {
      chat.style.display = "block";
      naziv.innerHTML = "Close chat"
     }
    }


  ngOnInit() {
  }
  
}
