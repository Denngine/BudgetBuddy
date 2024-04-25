import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Account } from '../../models/account';
import { AccountService } from '../../services/account/account.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  accounts: Account[] = [];
  balance: number = 0;

  @Input() accountIndex!: number;
  @Output() selectAccountIndex = new EventEmitter<number>();

  constructor(private accountService: AccountService, private router: Router){}

  selectAccount(selected: Account | null): void {
    let newIndex: number;                //anstelle von [accountIndex] für besser performance
    if (selected === null) {
      this.selectAccountIndex.emit(-1);
      newIndex = -1;                     //index für Gesamtübersicht
    } else {
      newIndex = this.accounts.indexOf(selected);
      this.selectAccountIndex.emit(newIndex);
    }
    this.calculateBalance(newIndex);     //bessere Performance mit [newIndex]

    //lädt die navigierte route neu
    let activeRoute: string = this.router.url.split('/')[1];
    this.router.navigate(["/", activeRoute, newIndex]);
  }

  ngOnInit(): void {
    this.loadAccounts();
    this.calculateBalance(this.accountIndex);
  }

  loadAccounts(){
    this.accountService.getAll().subscribe(
      (data => this.accounts = data))
  }

  calculateBalance(index: number){
    if (index === -1){                   //kontostand für Gesamtübersicht
      this.balance = 0;
      for(let account of this.accounts){
        this.balance += account.balance;
      }
    } else {                             //kontostand für das ausgewählte Konto
      this.balance = this.accounts[index].balance;
    }
  }
}
