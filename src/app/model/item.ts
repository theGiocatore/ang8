export class Item{
    id:number;
    ime: string;
    cena:string;
    opis:string;
    slika:string;
    vrsta:string;

    constructor(obj?:any){
        this.id = obj.id;
        this.ime = obj.ime;
        this.cena = obj.cena;
        this.opis = obj.opis;
        this.slika = obj.slika;
        this.vrsta = obj.vrsta;
    }
}