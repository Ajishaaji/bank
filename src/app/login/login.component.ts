import { Component, OnInit } from '@angular/core';
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

  //database
  database:any={
    1000:{acno:1000,username:'neer',password:1000,balance:5000},
    1001:{acno:1001,username:'Laisha',password:1001,balance:5000},
    1002:{acno:1002,username:'vyom',password:1002,balance:5000},
  }

  constructor(private router:Router,private dataservice:DataService) { }

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
//fetch acno
    var acno=this.acno
    //fetch pwd
    var pswd=this.pswd 
    const result= this.dataservice.login(acno,pswd)
    if(result){
      alert("Log in successfull")
      this.router.navigateByUrl('dashboard')
    }
}   
}
