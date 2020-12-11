import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from './../../models/todo.model';
import { TodoDAO } from './../../dao/todo.dao';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public formGroup: FormGroup;
  public todos: Todo[] = []; // [] (Array vazio)
  private todoDAO = new TodoDAO();

  constructor(
    private formBuilder: FormBuilder
  ) {
    this._formValidate();
    this.todos = this.todoDAO.loadLocalStorage();
  }

  ngOnInit(): void {
  }

  // CRUD
  public add() {
    //this.formGroup.value; /ck event to a button in an Angular ... - Quora/Retorna em JSON {'description': '...', 'created': '...'}
    const description = this.formGroup.controls['description'].value;
    this.todos.push(new Todo(description));
    this.todoDAO.saveLocalStorage(this.todos);
    this.formGroup.reset();
    this.clickCancelar();
  }

  public clickCancelar() {
    document.getElementById('btn-cancelar').click();
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
