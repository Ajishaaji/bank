import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   //form group
   depositForm=this.formBuilder.group({
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  //form group
  withdrawForm=this.formBuilder.group({
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  //currentUser
  user:any;

  //to hold the account to delete
  acno:any

  constructor(private formBuilder:FormBuilder,private dataservice:DataService,private router:Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem('token')){
      alert('please log in')
      this.router.navigateByUrl('')
    }
    if(localStorage.getItem('currentUser')){
      this.user=JSON.parse(localStorage.getItem('currentUser')||'')

    }
   
  }
deposit(){
  var acno=this.depositForm.value.acno
    var  pswd=this.depositForm.value.pswd
    var amount=this.depositForm.value.amount
    if(this.depositForm.valid){
     this.dataservice.deposit(acno,pswd,amount)
     .subscribe((result:any)=>{
      alert(result.message)
     },
     result=>{
     alert(result.error.message)
     }

     )
     

    }
    else{
      alert('invalid form')
    }
}
withdraw(){
  var acno=this.withdrawForm.value.acno
    var  pswd=this.withdrawForm.value.pswd
    var amount=this.withdrawForm.value.amount
    if(this.withdrawForm.valid){
     this.dataservice.withdraw(acno,pswd,amount)
     .subscribe((result:any)=>{
      alert(result.message)
     },
     result=>{
     alert(result.error.message)
     }

     )
    }
    else{
      alert('invalid form')
    }
    

    }
    logout(){
      localStorage.removeItem('currentAcno')
      localStorage.removeItem('currentUser')
      localStorage.removeItem('token')
      this.router.navigateByUrl('')


    }
    deleteAcc(){
    this.acno=JSON.parse(localStorage.getItem('currentAcno') || '')
    }
    cancel(){
      this.acno=''
    }
    delete(event:any){
      this.dataservice.deleteAcc(event)
      .subscribe((result:any)=>{
       alert(result.message)
       this.logout()
      },
      result=>{
        alert(result.error.message)
      })
    }
}


