import { Todo } from './../models/todo.model';

export class TodoDAO {
  loadLocalStorage(): Todo[] {
    const data = localStorage.getItem('todos');
    if (data) {
      return JSON.parse(data); // converter STRING -> JSON
    } else {
      return [];
    }
  }

  saveLocalStorage(todos: Todo[]) {
    const data = JSON.stringify(todos); // converter JSON -> STRING
    localStorage.setItem('todos', data);
  }

}

