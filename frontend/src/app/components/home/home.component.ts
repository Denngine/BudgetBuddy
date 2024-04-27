import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../services/account/account.service';
import { Account } from '../../models/account';
import { Transaction } from "../../models/transaction";
import { TransactionService } from "../../services/transaction/transaction.service";
import { UpdateService } from '../../services/update/update.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  accountId: number = -1;
  accounts: Account[] = [];
  transactions: Transaction[] = [];

  constructor(
    private accountService: AccountService,
    private updateService: UpdateService,
    private transactionService: TransactionService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.loadAccounts();
    this.loadTransactions();
    this.route.params.subscribe(params => {
      this.accountId = +params['id'];
      this.updateService.setAccountId(+params['id']);
    })
  }

  loadAccounts(){
    this.accountService.getAll().subscribe(
      (data => this.accounts = data))
  }

  loadTransactions(){
    this.transactionService.getAll().subscribe(
      (data => this.transactions = data.filter(transaction => this.accountId == -1 || transaction.account.id == this.accountId )))
  }

  calculateBalance(): number {
    let balance = 0;
    if (this.accountId === -1){                   //kontostand für Gesamtübersicht
      for(let account of this.accounts){
        balance += account.balance;
      }
    } else {                             //kontostand für das ausgewählte Konto
      balance = this.getAccountById(this.accountId)!.balance;
    }
    return balance;
  }

  getAccountById(id: number): Account | null {
    for(let account of this.accounts){
      if (id == account.id){
        return account;
      }
    }
    return null;
  }
}

