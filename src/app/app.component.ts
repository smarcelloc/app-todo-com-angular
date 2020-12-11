import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title: String = "Lista de Tarefas";
  public modoInsert = false;

  constructor() { }

  public changeModo() {
    this.modoInsert = !this.modoInsert;
  }
}
