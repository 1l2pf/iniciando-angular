import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from './Todo';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms' ;


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  todos: Todo[] = []
  newTodo: string;

  saveTodo() {
    if(this.newTodo){
      let todo = new Todo();
      todo.name = this.newTodo;
      todo.isCompleted = true
      this.todos.push(todo);
      this.newTodo = '';
    }else{
    alert("Please Enter Todo");
    };
  }
  done(id: number) {
    this.todos[id].isCompleted = !this.todos[id].isCompleted;
  }
  remove(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }
}
