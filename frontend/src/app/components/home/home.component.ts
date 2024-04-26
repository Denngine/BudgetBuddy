import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../services/account/account.service';
import { Account } from '../../models/account';
import {Transaction} from "../../models/transaction";
import {TransactionService} from "../../services/transaction/transaction.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  transactions: Transaction[] = [];

  accountIndex: number = -1;
  accounts: Account[] = [];

  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute,
    private transactionService: TransactionService
  ) { }

  ngOnInit(): void {
    this.loadAccounts();
    this.route.params.subscribe(params => {
      this.accountIndex = +params['id'];
      this.loadTransactions();
    })
  }

  loadAccounts(){
    this.accountService.getAll().subscribe(
      (data => this.accounts = data))
  }
  loadTransactions(){
    this.transactionService.getAll().subscribe(
      (data => this.transactions = data.filter(transaction => this.accountIndex == -1 || transaction.account.id == this.accounts[this.accountIndex].id )))
  }
}

