import { Fata } from "./Fata";



export class cart{
    constructor(fprod:Fata){
        this.fprod=fprod;
    }
    fprod:Fata;
   
    
    cantitate: number=1;

    get pretf():number{
        return this.fprod.price*this.cantitate;
        
    }
   

}