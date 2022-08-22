import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //database
  database:any={
    1000:{acno:1000,username:'neer',password:1000,balance:5000},
    1001:{acno:1001,username:'Laisha',password:1001,balance:5000},
    1002:{acno:1002,username:'vyom',password:1002,balance:5000},
  }

  constructor() { 
    this.getDetails()
  }

  //saveDetails
  saveDetails(){
    localStorage.setItem('database',JSON.stringify(this.database))
  }
  //getDetails
 getDetails(){
   this.database=JSON.parse(localStorage.getItem('database') || '')
  }


  //register
  register(username:any,acno:any,password:any){
    let database=this.database
    if(acno in database){
      return false
    }
    else{
      database[acno]={
        acno,
        username,
        password,
        balance:0
      }
      this.saveDetails()
      return true
    }
  }

  //login
  login(acno:any,pswd:any){
   
    
        let userDetails=this.database
        if(acno in userDetails){
          if(pswd==userDetails[acno]['password']){
            return true
           
          }
        
        else{
          alert('incorrect password')
          return false
        }
     }
        else{
          alert('user does not exit')
          return false
        }
      }
    }
  
