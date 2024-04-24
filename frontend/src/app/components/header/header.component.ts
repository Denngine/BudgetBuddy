import {Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  balance: number = 100;
  dropdownOptions: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

  @Input() kontoId!: number;
  @Output() selectKontoId = new EventEmitter<number>();

  selectOption(option: string): void {
    let newId: number = this.dropdownOptions.indexOf(option);
    this.selectKontoId.emit(newId);

    //balance ändern
    this.balance = 100 + 9*newId;
  }
}
