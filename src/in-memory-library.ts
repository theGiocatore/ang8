import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryLibrary implements InMemoryDbService {
    createDb() {
        const varijabla = [
            {
                id:1,
                ime:"Living Room Furniture",
                cena:"350.000,00",
                opis:"Nice piece of furniture, that will make your living room looks awesome! Buy it at special price during promotional period until the end of the month.",
                slika:"../../assets/livingRoomFurniture.jpg",
                vrsta:"Livingroom"
              },
              {
                id:2,
                ime: "Kitchen Table",
                cena:"15.000,00",
                opis:"Oak wood, fantastic family table, where you can eat, gamble, make love or do whatever you want. Perfectly fit in every kitchen, smaller size won't take too much space.",
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
                opis:"An amazing chair to have it in your house where you can enjoy in comfortable sitting until you pass out of alcohol. You can also use it for haircutting or just regular everyday chillin'.",
                slika:"../../assets/BarStools.jpg",
                vrsta:"Kitchen"
              },
              {
                id:5,
                ime: "King size bed",
                cena:"130.000,00",
                opis:"Sleep like a king! For symbolic price you can afford this amazing piece of furniture. To share it with your wife and girlfriends. From now on, you won't have problems with your spine.",
                slika:"../../assets/bedRoom.jpg",
                vrsta:"Bedroom"
              },
              {
                id:6,
                ime: "Night table",
                cena:"9.000,00",
                opis:" Lorem ipsum dolores amanet something like tihs, i don't know how it goes. Anyway some block of text should stay here. Sorry for my bad english, i'll try to improve it. ",
                slika:"../../assets/nighttable.jpg",
                vrsta:"Bedroom"
              },
              {
                id:7,
                ime: "Desk",
                cena:"10.000,00",
                opis:"Some text about how this desk looks awesome! And some sweet talks to convince you to buy this piece of furniture, which is not actually cool at all. That's all folks.",
                slika:"../../assets/radniSto.jpg",
                vrsta:"Livingroom"
              }
        ];
        return {varijabla};
    }



}