import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  acno:any
  transactions:any

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    //get the current acno
    this.acno=JSON.parse(localStorage.getItem("currentAcno") || '')
    this.dataService.getTransaction(this.acno)
    .subscribe((result:any)=>{
      this.transactions = result.transaction

    },
    result=>{
      alert(result.error.message)
    }
    )
    

  }

}
