import { Item } from './item';

export class Lista{
    proizvodi: Item[];

    constructor(obj?:any){
        this.proizvodi = obj.proizvodi;
        
    }
}
