import { Component,OnInit} from '@angular/core';
import { AbstractControl, FormControl,FormGroup,ValidationErrors,ValidatorFn,Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
export function passwordsMatchValidator():ValidatorFn{
  return (control:AbstractControl): ValidationErrors | null =>{
  const password=control.get('password')?.value;
  const confirmPassword=control.get('condirmPassword')?.value;
  if(password && confirmPassword && password !== confirmPassword){
    return {
      passwordsDontMatch:true
    }
  }
  return null;
  };
}
@Component({
  selector: 'app-inregistrare',
  templateUrl: './inregistrare.component.html',
  styleUrls: ['./inregistrare.component.css']
})
export class InregistrareComponent implements OnInit{
  signUpForm=new FormGroup({
    name: new FormControl('',Validators.required),
    email:new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('',Validators.required),
    confirmPassword:new FormControl('',Validators.required)
   },{validators: passwordsMatchValidator() });
  
  constructor(private authService:AuthenticationService, private router:Router){}
   ngOnInit(): void {}
  
    get name(){
      return this.signUpForm.get('name');
    }
    get email(){
      return this.signUpForm.get('email');
    }
    get password(){
      return this.signUpForm.get('password');
    }
    get confirmPassword(){
      return this.signUpForm.get('confirmPassword');
    }
  
   submit(){
     if(!this.signUpForm.valid) return;
  
     const{ name,email,password}= this.signUpForm.value;
     this.authService.signUp(name,email,password).pipe( ).subscribe(() =>{
      this.router.navigate(['/home']);
     })
   }
}
