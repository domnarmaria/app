import { Component, OnInit } from '@angular/core';
import { Fata } from '../shared/component/Fata';
import { ActivatedRoute } from '@angular/router';
import { FataService } from '../serv/fata.service';
import { CartService } from '../serviciu/cart.service';

@Component({
  selector: 'app-paginafata',
  templateUrl: './paginafata.component.html',
  styleUrls: ['./paginafata.component.css']
})
export class PaginafataComponent implements OnInit {
  fata!:Fata;
  constructor(private activatedroute:ActivatedRoute,private fataService:FataService,private cartservice:CartService){
     activatedroute.params.subscribe((params)=>{
       if(params['id'])
       this.fata=fataService.getprodbyid(params['id']);
     })
  }
  ngOnInit(): void {
    
  }
  addTocart(){
    this.cartservice.addTocart(this.fata);
  }

}
