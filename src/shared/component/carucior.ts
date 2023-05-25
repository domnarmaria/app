import { cart } from "./cart";

export class carucior{
    produse:cart[]=[];
    get prettotal():number{
     let prettotal=0;
   
     this.produse.forEach(item=>{
       prettotal=prettotal+item.pretf;

     });
     return prettotal;
    }
    
  
}