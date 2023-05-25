import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-nimic',
  templateUrl: './nimic.component.html',
  styleUrls: ['./nimic.component.css']
})
export class NimicComponent implements OnInit{
  @Input() visible:boolean=false;
  @Input() notfoundmessage:string="Nothing Found";
 @Input() resetlinktext:string="reset";
 @Input() resetlinkroute:string="/home";
  constructor(){}
   ngOnInit(): void {
     
   }
}
