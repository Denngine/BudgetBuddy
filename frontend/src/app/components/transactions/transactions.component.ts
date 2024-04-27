import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../services/account/account.service';
import { Account } from '../../models/account';
import { TransactionService } from '../../services/transaction/transaction.service';
import { Transaction } from '../../models/transaction';
import { CategoryService } from '../../services/category/category.service';
import { Category } from '../../models/category';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent {
  accountIndex: number = -1;
  accounts: Account[] = [];
  transactions: Transaction[] = [];
  categories: Category[] = [];
  formGroup: FormGroup;
  selectedCategories: Category[] = [];
  showCategoryDropdown: boolean = false;
  filteredTransactions: Transaction[] = [];

  constructor(
    private accountService: AccountService,
    private transactionService: TransactionService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      startDate: [null],
      endDate: [null],
      incomeFilter: [false],
      expenseFilter: [false],
      recurringFilter: [false],
      minAmount: [null],
      maxAmount: [null]
    });
  }

  ngOnInit(): void {
    this.loadContent();

    this.route.params.subscribe(params => {
      this.accountIndex = +params['id'];
    })
    if(this.filteredTransactions.length === 0){
      this.filteredTransactions = this.transactions;
    }
  }

  loadContent(){
    this.accountService.getAll().subscribe(
      (data => this.accounts = data));
    this.transactionService.getAll().subscribe(
      (data => {
        this.transactions = data;
        this.filteredTransactions = this.transactions;
      }));
    this.categoryService.getAll().subscribe(
      (data => this.categories = data ));
  }

  addCategory(category: Category) {
    const index = this.selectedCategories.findIndex(selectedCategory => selectedCategory.id === category.id);
    if (index === -1) {
      this.selectedCategories.push(category);
    } else {
      this.selectedCategories.splice(index, 1);
    }
  }

  applyFilters(): void {
    const formData = this.formGroup.value;
    console.log('Formulardaten:', formData);

    this.filteredTransactions = this.transactions.filter(transaction => {
      let result: boolean = true;

      if (this.formGroup.value.startDate && new Date(transaction.date) < new Date(this.formGroup.value.startDate)) {
        result = false;
      }
      if (this.formGroup.value.endDate && new Date(transaction.date) > new Date(this.formGroup.value.endDate)) {
        result = false;
      }

      if (formData.minAmount !== null && transaction.amount < formData.minAmount) {
        result = false;
      }
      if(formData.maxAmount !== null && transaction.amount > formData.maxAmount) {
        result = false;
      }

      if (!(this.formGroup.value.incomeFilter && this.formGroup.value.expenseFilter)){
        if (this.formGroup.value.incomeFilter && transaction.amount < 0) {
          result = false;
        }
        if (this.formGroup.value.expenseFilter && transaction.amount >= 0) {
          result = false;
        }
      }

      if (this.formGroup.value.recurringFilter && !transaction.recurring) {
        result = false;
      }

      if (this.selectedCategories.length > 0 && !this.selectedCategories.map(category => category.name).includes(transaction.category.name)) {
        return false;
      }

      return result;
    });
  }

  categoryDropdown(): void {
    this.showCategoryDropdown = !this.showCategoryDropdown;
  }

  sorted = { isSorted: false, attribute: "" };
  sortBy(attribute: string): void {
    switch (attribute) {
      case 'date':
        if (this.sorted.isSorted && this.sorted.attribute === 'date'){
          this.filteredTransactions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        } else {
          this.filteredTransactions.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        }
        this.sorted.isSorted = !this.sorted.isSorted;
        this.sorted.attribute = 'date';
        break;
      case 'amount':
        if (this.sorted.isSorted && this.sorted.attribute === 'amount'){
          this.filteredTransactions.sort((a, b) => a.amount - b.amount);
        } else {
          this.filteredTransactions.sort((a, b) => b.amount - a.amount);
        }
        this.sorted.isSorted = !this.sorted.isSorted;
        this.sorted.attribute = 'amount';
        break;
      case 'description':
        if (this.sorted.isSorted && this.sorted.attribute === 'description'){
          this.filteredTransactions.sort((a, b) => b.description.localeCompare(a.description));
        } else {
          this.filteredTransactions.sort((a, b) => a.description.localeCompare(b.description));
        }
        this.sorted.isSorted = !this.sorted.isSorted;
        this.sorted.attribute = 'description';
        break;

      case 'recurring':
        if (this.sorted.isSorted && this.sorted.attribute === 'recurring'){
          this.filteredTransactions.sort((a, b) => a.recurring === b.recurring ? 0 : a.recurring ? -1 : 1);
        } else {
          this.filteredTransactions.sort((a, b) => a.recurring === b.recurring ? 0 : a.recurring ? 1 : -1);
        }
        this.sorted.isSorted = !this.sorted.isSorted;
        this.sorted.attribute = 'recurring';
        break;

      case 'category':
        if (this.sorted.isSorted && this.sorted.attribute === 'category'){
          this.filteredTransactions.sort((a, b) => b.category.name.localeCompare(a.category.name));
        } else {
          this.filteredTransactions.sort((a, b) => a.category.name.localeCompare(b.category.name));
        }
        this.sorted.isSorted = !this.sorted.isSorted;
        this.sorted.attribute = 'category';
        break;

      case 'account':
        if (this.accountIndex === -1) {
          if (this.sorted.isSorted && this.sorted.attribute === 'account'){
            this.filteredTransactions.sort((a, b) => b.account.name.localeCompare(a.account.name));
          } else {
            this.filteredTransactions.sort((a, b) => a.account.name.localeCompare(b.account.name));
          }
          this.sorted.isSorted = !this.sorted.isSorted;
          this.sorted.attribute = 'account';
        }
        break;
      default:
        break;
    }
  }
}
