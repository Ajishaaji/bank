import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { never } from 'rxjs';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //property/variable
  header="welcome to our bank...."
  accPlaceholder="Account please"

//acno
acno=""

//pswd
pswd=""

//form group
loginForm=this.formBuilder.group({
  
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
})

  //database
  database:any={
    1000:{acno:1000,username:'neer',password:1000,balance:5000},
    1001:{acno:1001,username:'Laisha',password:1001,balance:5000},
    1002:{acno:1002,username:'vyom',password:1002,balance:5000},
  }

  constructor(private formBuilder:FormBuilder,private router:Router,private dataservice:DataService) { }

  ngOnInit(): void {
  }
  //user defined function
acnoChange(event:any){
  this.acno=event.target.value
  
}
pswdChange(event:any){
  this.pswd=event.target.value
  
}

 
  login(){
//fetch acnovar acno=this.registerForm.value.acno
    
   var acno=this.loginForm.value.acno
        //fetch pwd

    var  pswd=this.loginForm.value.pswd
  if(this.loginForm.valid){
   //asynchronous
   const result=this.dataservice.login(acno,pswd)
   .subscribe(
    //status:200
    (result:any)=>{
    localStorage.setItem('token',JSON.stringify(result.token))
    localStorage.setItem('currentUser',JSON.stringify(result.currentUser))
    localStorage.setItem('currentAcno',JSON.stringify(result.currentAcno))
    alert(result.message)
    this.router.navigateByUrl('dashboard')

   },
   //status:400
   result=>{
    alert(result.error.message)
   }
   )

  
}   
else{
  alert("invalid form")
}
}
}