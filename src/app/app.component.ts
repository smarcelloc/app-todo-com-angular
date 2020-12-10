import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Todo } from './../models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public todos: Todo[] = []; // [ ]
  //public todos:any[]; // undefined
  public title: String = "Minhas tarefas";
  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this._formValidate();
  }

  public add() {
    //this.formGroup.value; //Retorna em JSON {'description': '...', 'created': '...'}
    const description = this.formGroup.controls['description'].value;
    this.todos.push(new Todo(description));
    this.formGroup.reset();
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



  private _formValidate() {
    this.formGroup = this.formBuilder.group({
      description: [
        '', // Valor padrão
        Validators.compose([
          Validators.maxLength(60),
          Validators.required
        ])
      ]
    });
  }
}
