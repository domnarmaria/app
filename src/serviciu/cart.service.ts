import { Injectable } from '@angular/core';
import { Fata } from '../shared/component/Fata';

import { carucior } from '../shared/component/carucior';
import { cart } from '../shared/component/cart';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  
  private cart:carucior=new carucior();
  addTocart(prodf:Fata):void{
         let cartitem=this.cart.produse.find(item=>item.fprod.id===prodf.id);
         if(cartitem){
           this.changecantitate(prodf.id,cartitem.cantitate+1);
           return;
         }
         this.cart.produse.push(new cart(prodf));
  }
  removeFromcart(prodid:number):void{
   this.cart.produse=
   this.cart.produse.filter(item=>item.fprod.id!=prodid);

  }
  changecantitate(prodid:number,cantitate:number){
      let cartitem=this.cart.produse.find(item=>item.fprod.id===prodid);
      if(!cartitem) return;
      cartitem.cantitate=cantitate;
  }
  getcart():carucior{
   return this.cart;
  }
}
