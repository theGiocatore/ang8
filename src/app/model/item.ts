export class Item{
    id:number;
    ime: string;
    cena:number;
    opis:string;
    slika:string;

    constructor(obj?:any){
        this.id = obj.id;
        this.ime = obj.ime;
        this.cena = obj.cena;
        this.opis = obj.opis;
        this.slika = obj.slika;
    }
}