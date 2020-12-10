import { Component } from '@angular/core';

import { Todo } from './../models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public todos: Todo[] = []; // [ ]
  //public todos:any[]; // undefined
  public title: String = "Minhas tarefas"

  constructor() {
    this.todos.push(new Todo('Passear com o cachorro', true));
    this.todos.push(new Todo('Ir para a praia'));
    this.todos.push(new Todo('Cortar o cabelo'));
  }

  public remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  public markAsDone(todo: Todo) {
    todo.done = true
  }

  public markAsUndone(todo: Todo) {
    todo.done = false
  }
}
