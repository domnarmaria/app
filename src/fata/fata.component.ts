import { Component, OnInit } from '@angular/core';
import { FataService } from '../serv/fata.service';
import { Fata } from '../shared/component/Fata';
@Component({
  selector: 'app-fata',
  templateUrl: './fata.component.html',
  styleUrls: ['./fata.component.css']
})
export class FataComponent implements OnInit {
 
  Fata:Fata[]=[];
  constructor(private fataService:FataService){
   
    
  }
  
  ngOnInit(): void {
    this.Fata=this.fataService.getAll();
  }
}
