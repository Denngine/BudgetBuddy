import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Debt } from '../../models/debt';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-debt-form',
  templateUrl: './debt-form.component.html',
  styleUrl: './debt-form.component.scss'
})
export class DebtFormComponent {
  @Input() debtList?: Debt[];
  @Output() generateDebt: EventEmitter<Debt> = new EventEmitter<Debt>();
  @Output() updateDebt: EventEmitter<Debt> = new EventEmitter<Debt>();
  @Output() deleteDebt: EventEmitter<number> = new EventEmitter<number>();
  deptsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.deptsForm = this.fb.group({
      id: [],
      total_depts: [null, Validators.required],
      already_paid: [null, Validators.required],
      beneficiary: [null, Validators.required],
      deadline: [null, Validators.required]
    });
  }

  saveDept() {
    const debt = this.deptsForm.value;
    if (debt.id) {
      this.generateDebt.emit(debt)
    } else {
      this.updateDebt.emit(debt)
    }
    this.deptsForm.reset();
  }

  removeDebt(id?: number) {
    this.deleteDebt.emit(id);
  }

  templates: any;
  optionChoice: any;

  onChange() {
    this.optionChoice = this.templates.nativeElement.value;
  }

  editDepts(debt: Debt) {
    this.deptsForm.patchValue(debt);
  }
}
