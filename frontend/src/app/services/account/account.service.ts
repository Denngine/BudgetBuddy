import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Account} from "../../models/account";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = "http://localhost:8080/account"
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Account[]> {
    return this.httpClient.get<Account[]>(`${this.baseUrl}`)
  }

  getAccountById(id: number): Observable<Account> {
    return this.httpClient.get<Account>(`${this.baseUrl}${id}`)
  }

  createAccount(account: Account): Observable<Account> {
    return this.httpClient.post<Account>(`${this.baseUrl}`, account)
  }

  updateAccount(account: Account): Observable<Account> {
    return this.httpClient.put<Account>(`${this.baseUrl}`, account)
  }

  deleteAccount(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}${id}`)
  }
}
