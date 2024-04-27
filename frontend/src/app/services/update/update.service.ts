import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  private accountId: BehaviorSubject<number> = new BehaviorSubject<number>(-1);

  constructor() { }

  getAccountIdObservable() {
    return this.accountId.asObservable();
  }

  getAccountId() {
    return this.accountId.value;
  }

  setAccountId(id: number) {
    this.accountId.next(id);
  }
}
