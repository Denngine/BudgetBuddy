import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'haushaltsbuch';

  accountIndex: number = -1;

  editAccountIndex(index: number) {
    this.accountIndex = index;
  }
}
