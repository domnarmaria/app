import { Component } from '@angular/core';
import { Reduceri } from '../shared/component/Reduceri';
import { ActivatedRoute } from '@angular/router';
import { ReduceriService } from '../servicii/reduceri.service';
import { CartService } from '../serviciu/cart.service';

@Component({
  selector: 'app-paginareduceri',
  templateUrl: './paginareduceri.component.html',
  styleUrls: ['./paginareduceri.component.css']
})
export class PaginareduceriComponent {
  reduceri!:Reduceri;
  constructor(private activatedroute:ActivatedRoute,private reduceriservice:ReduceriService,private cartservice:CartService){
     activatedroute.params.subscribe((params)=>{
       if(params['id'])
       this.reduceri=reduceriservice.getprodbyid(params['id']);
     })

}
addTocart(){
  this.cartservice.addTocart(this.reduceri);
}
}
