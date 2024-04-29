import { Target } from '../../models/target';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-target-form',
  templateUrl: './target-form.component.html',
  styleUrl: './target-form.component.scss'
})
export class TargetFormComponent {
  @Input() targetList?: Target[];
  @Output() generateTarget: EventEmitter<Target> = new EventEmitter<Target>();
  @Output() updateTarget: EventEmitter<Target> = new EventEmitter<Target>();
  @Output() deleteTarget: EventEmitter<number> = new EventEmitter<number>();
  addTargetForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addTargetForm = this.fb.group({
      id: [],
      name: [null, Validators.required],
      rate: [null, Validators.required],
      unit: [null, Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required]
    });
  }

  saveTarget() {
    console.log(5)
    const target = this.addTargetForm.value;
    if (target.id) {
      console.log(6)
      this.generateTarget.emit(target);
    } else {
      console.log(7)
      this.updateTarget.emit(target);
    }
    this.closeAddTargetForm();
    this.addTargetForm.reset();
  }

  removeTarget(id: number) {
    this.deleteTarget.emit(id);
  }

  openAddTargetForm() {
    const modelDiv = document.getElementById('myModal');
    if(modelDiv!= null){
     modelDiv.style.display= 'block';
    }
  }

  closeAddTargetForm() {
    const modelDiv =   document.getElementById('myModal');
    if(modelDiv!= null){
     modelDiv .style.display= 'none';
    }
  }

  editTargets(target: Target) {
    this.addTargetForm.patchValue(target);
  }
}
