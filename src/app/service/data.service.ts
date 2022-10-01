import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //currentUser
currentUser:any;

//currentAcno:any
currentAcno:any

  //database
  //database:any={
    //1000:{acno:1000,username:'neer',password:1000,balance:5000,transaction:[]},
    //1001:{acno:1001,username:'Laisha',password:1001,balance:5000,transaction:[]},
    //1002:{acno:1002,username:'vyom',password:1002,balance:5000,transaction:[]}
  //}

  constructor(private http:HttpClient) { 
  }

  //saveDetails
  //saveDetails(){
   // localStorage.setItem('database',JSON.stringify(this.database))
    //if(this.currentUser){
    //  localStorage.setItem('currentUser',JSON.stringify(this.currentUser))
    //}
    //if(this.currentAcno){
    //localStorage.setItem('currentAcno',JSON.stringify(this.currentAcno))

    //}
  //}
  //getDetails
 //getDetails(){
   //this.database=JSON.parse(localStorage.getItem('database') || '')
   //if(localStorage.getItem('currentUser')){
   // this.currentUser=JSON.parse(localStorage.getItem('currentUser') || '')

   //}
   //if(localStorage.getItem('currentAcno')){
    //this.currentAcno=JSON.parse(localStorage.getItem('currentAcno') || '')

   //}

  //}


  //register
  register(username:any,acno:any,password:any){

const body ={
  username,
  acno,
  password
}
//register API
   return this.http.post('http://localhost:3000/register',body)
  }

  //login
  login(acno:any,pswd:any){
   
    
        const body={
          acno,
          pswd
        }
        //login API
        return this.http.post('http://localhost:3000/login',body)
      }
       
      //deposit
      deposit(acno:any,pswd:any,amt:any){
        const body={
          acno,
          pswd,
          amt
        }
        //deposit API
        return this.http.post('http://localhost:3000/deposit',body,this.getToken())
      }
      //to get token and attach to req header
      getToken(){
        //get token
        var token=JSON.parse(localStorage.getItem('token') ||'')

        //create request header
        let headers=new HttpHeaders()

        headers=headers.append('x-access-token',token)
        //function overloading
        options.headers=headers

        return options
      }
      
    
      //withdraw
    withdraw(acno:any,pswd:any,amt:any){
      const body={
        acno,
        pswd,
        amt
      }
      //withdraw API
      return this.http.post('http://localhost:3000/withdraw',body,this.getToken())
    }

     //transaction
    getTransaction(acno:any){
      const body={
        acno,
        
      }
      //transaction API
      return this.http.post('http://localhost:3000/transaction',body,this.getToken())
    }
    deleteAcc(acno:any){
      //delete Api
      return this.http.delete('http://localhost:3000/deleteAcc/'+acno)
    }
  }
  
