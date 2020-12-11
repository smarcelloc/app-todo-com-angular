import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/todo.model';
import { TodoDAO } from './../../dao/todo.dao';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  //public todos:any[]; // undefined
  public todos: Todo[] = []; // [] (Array vazio)
  private todoDAO = new TodoDAO();

  constructor() {
    this.todos = this.todoDAO.loadLocalStorage().reverse();
  }

  ngOnInit(): void {
  }

  public markAsDone(todo: Todo) {
    todo.done = true;
    this._save();
  }

  public markAsUndone(todo: Todo) {
    todo.done = false;
    this._save();
  }

  public remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
      this._save();
    }
  }

  private _save() {
    this.todoDAO.saveLocalStorage(this.todos);
  }

}
