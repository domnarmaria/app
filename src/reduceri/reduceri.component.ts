import { Component, OnInit } from '@angular/core';
import { ReduceriService } from '../servicii/reduceri.service';
import { Reduceri } from '../shared/component/Reduceri';

@Component({
  selector: 'app-reduceri',
  templateUrl: './reduceri.component.html',
  styleUrls: ['./reduceri.component.css']
})
export class ReduceriComponent implements OnInit {
  Reduceri:Reduceri[]=[];
  constructor(private reduceriService:ReduceriService){}
  ngOnInit(): void {
    
    this.Reduceri=this.reduceriService.getAll();
    
  }
}
