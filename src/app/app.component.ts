import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public todos: any[] = []; // [ ]
  //public todos:any[]; // undefined
  public title: String = "Minhas tarefas"

  constructor() {
    this.todos.push('Passear com o cachorro')
    this.todos.push('ir a praia')
    this.todos.push('visitar a tia no hospital')
  }

  public alterarTitle(): void {
    this.title = "titulo alterado"
  }
}
