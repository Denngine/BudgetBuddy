import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'haushaltsbuch';

  kontoId: number = 0;
  editKontoId(id: number) {
    this.kontoId = id;
  }
}
