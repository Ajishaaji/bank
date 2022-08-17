import { Component, OnInit } from '@angular/core';
import { never } from 'rxjs';

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

  constructor() { }

  ngOnInit(): void {
  }
  //user defined function
acnoChange(event:any){
  this.acno=event.target.value
  
}
pswdChange(event:any){
  this.pswd=event.target.value
  
}

 
  //login(){
//fetch acno
   // var acno=this.acno
    //console.log(acno);
    //fetch pwd
    //var pswd=this.pswd
   // console.log(pswd);

    //let userDetails=this.database
    //if(acno in userDetails){
      //if(pswd==userDetails[acno]['password']){
       // alert('Log in successfull')
      //}
    
    //else{
     // alert('incorrect password')
   // }
 // }
    //else{
      //alert('user does not exit')
    //}
 // }
//}

login(a:any,p:any){
  console.log(a);
  
  //fetch acno
      var acno=a.value
      
      //fetch pwd
      var pswd=p.value
      
  
      let userDetails=this.database
      if(acno in userDetails){
        if(pswd==userDetails[acno]['password']){
          alert('Log in successfull')
        }
      
      else{
       alert('incorrect password')
     }
   }
      else{
        alert('user does not exit')
      }
   }
  }

