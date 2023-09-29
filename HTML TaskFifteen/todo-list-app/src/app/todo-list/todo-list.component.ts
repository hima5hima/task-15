import { Component } from '@angular/core';

interface Todo {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: Todo[] = [];
  newTodo: string = '';
  searchTerm: string = '';
  filteredTodos: Todo[] = [];

  addTodo() {
    if (this.newTodo.trim() !== '') {
      const todo: Todo = {
        text: this.newTodo,
        completed: false
      };
      this.todos.push(todo);
      this.newTodo = '';
      this.updateFilteredTodos();
    }
  }

  completeTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
      this.updateFilteredTodos();
    }
  }

  private updateFilteredTodos() {
    this.filteredTodos = this.todos.filter(item => item.text.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

  get filteredTodoCount(): number {
    return this.filteredTodos.length;
  }
}
