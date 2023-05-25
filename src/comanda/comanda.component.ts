import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Firestore,collection,addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  comandaForm!:FormGroup;
   
  
  isSubmit=true;
  submitMessage='';

  constructor(private formbuilder:FormBuilder,private  firestore:Firestore){}
    

   ngOnInit(): void {
    this.comandaForm=this.formbuilder.group({
      Nume:[null,Validators.required],
      Prenume:[null,Validators.required],
      Numardetelefon:[null,Validators.required],
      Adresa:[null,Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(400)])],
      Numeproduse:[null,Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(400)])]

     });
 }

 submitData(value:any){
    let $comandaRef=collection(this.firestore,"comanda");
  
 addDoc($comandaRef,value).then(()=>{
   this.submitMessage='Trmis cu succes';
 })
 .catch(err=>{
  console.log(err);
 })

  this.isSubmit=true;
 
  setTimeout(()=>{
    this.isSubmit=false;
  },8000);
 
  

 }

}
