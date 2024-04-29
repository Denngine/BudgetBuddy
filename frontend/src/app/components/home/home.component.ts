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
  filteredTransactions: Transaction[] = [];

  constructor(
    private accountService: AccountService,
    private updateService: UpdateService,
    private transactionService: TransactionService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.loadAccounts();
    this.route.params.subscribe(params => {
      this.accountId = +params['id'];
      this.updateService.setAccountId(+params['id']);
      // lädt nach Auswahl eines neuen Kontos Transaktionen neu
      this.loadTransactions();
    })
  }

  loadAccounts(){
    this.accountService.getAll().subscribe(
      (data => this.accounts = data))
  }

  // Lädt alle Transaktionen und gibt alle aus, wenn die Auswahl die Gesamtübersicht ist,
  // wenn nicht, wird nach dem Konto gefiltert und nur dessen Transaktionen werden ausgegeben
  loadTransactions(){
    this.transactionService.getAll().subscribe(
      (data => {this.transactions = data.filter(transaction => this.accountId == -1 || transaction.account.id == this.accountId ),
      this.filterTransactions(data)}))
  }

  calculateTotalExpenditure(): number{
    let totalExpenditure = 0;
    for (let transaction of this.filteredTransactions) {
      if (transaction.amount < 0) {
        totalExpenditure += transaction.amount;
      }
    }
    return Math.abs(totalExpenditure)
  }
  calculateTotalIncome(): number{
    let totalIncome = 0;
    for (let transaction of this.filteredTransactions) {
      if (transaction.amount > 0) {
        totalIncome += transaction.amount;
      }
    }
    return totalIncome;
  }

  filterTransactions(data: Transaction[]): void {
    // filteredTransactions wird leeres Array zugewiesen, um Liste der Transactions zu leeren,
    // wenn eine neue Auswahl geschieht
    this.filteredTransactions = [];
    if(this.accountId == -1){
      this.filteredTransactions = data;
      this.filterDate(this.filteredTransactions);
    }
    else {
      for (let transaction of data){
        if (transaction.account.id == this.accountId){
          this.filteredTransactions.push(transaction);
          this.filterDate(this.filteredTransactions);
        }
      }
    }
  }

  filterDate(filteredTransactions: Transaction[]) {
    const currentMonth = new Date().getMonth();
    let result: Transaction[] = filteredTransactions.filter(entry => entry.date.getMonth() === currentMonth);
    this.filteredTransactions = result;
  }
  formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('de-DE', options);
  }
  calculateBalance(): number {
    let balance = 0;
    if (this.accountId === -1){                   //kontostand für Gesamtübersicht
      for(let account of this.accounts){
        balance += account.balance;
      }
    } else {                             //kontostand für das ausgewählte Konto
      balance = (this.getAccountById(this.accountId)?.balance) ?? 0;
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

