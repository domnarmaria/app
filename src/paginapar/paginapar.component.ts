import { Component, OnInit } from '@angular/core';
import { Par } from '../shared/component/Par';
import { ActivatedRoute } from '@angular/router';
import { ParService } from '../service/par.service';
import { CartService } from '../serviciu/cart.service';

@Component({
  selector: 'app-paginapar',
  templateUrl: './paginapar.component.html',
  styleUrls: ['./paginapar.component.css']
})
export class PaginaparComponent implements OnInit{
  par!:Par;
  constructor(private activatedroute:ActivatedRoute,private parservice:ParService,private cartservice:CartService){
     activatedroute.params.subscribe((params)=>{
       if(params['id'])
       this.par=parservice.getprodbyid(params['id']);
     })
  }
  ngOnInit(): void {
    
  }
  addTocart(){
    this.cartservice.addTocart(this.par);
  }
}
