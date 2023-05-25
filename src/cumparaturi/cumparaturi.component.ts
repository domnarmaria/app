import { Component,OnInit } from '@angular/core';
import { CartService } from '../serviciu/cart.service';
import { carucior } from '../shared/component/carucior';
import { cart } from '../shared/component/cart';
@Component({
  selector: 'app-cumparaturi',
  templateUrl: './cumparaturi.component.html',
  styleUrls: ['./cumparaturi.component.css']
})
export class CumparaturiComponent implements OnInit {
  cart!:carucior;
  constructor(private cartservice:CartService){
   
    this.setcart();
  }

 
 
  
  removeFromcart(cartitem:cart){
    this.cartservice.removeFromcart(cartitem.fprod.id);
    this.setcart();
  }
 changecantitate(cartitem:cart,cantitatestring:string){
    const cantitate=parseInt(cantitatestring);
    this.cartservice.changecantitate(cartitem.fprod.id,cantitate);
    this.setcart();
  }
  
  
  setcart(){
    this.cart=this.cartservice.getcart();
  }
  ngOnInit():void{

  }
      
}
