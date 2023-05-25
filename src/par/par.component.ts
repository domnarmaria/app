import { Component, OnInit } from '@angular/core';
import { ParService } from '../service/par.service';
import { Par } from '../shared/component/Par';
@Component({
  selector: 'app-par',
  templateUrl: './par.component.html',
  styleUrls: ['./par.component.css']
})
export class ParComponent implements OnInit {
  Par:Par[]=[];
  constructor(private parService:ParService){}
  ngOnInit(): void {
     this.Par=this.parService.getAll();
   }
}
