import  {Component, Input, Output, EventEmitter, Pipe} from 'angular2/core'
import {TodoService} from "../services/todos";
import {Todo} from '../services/todos'
import {ROUTER_DIRECTIVES} from 'angular2/router'



@Component({
  selector: 'todo-list',

  directives: [ROUTER_DIRECTIVES],
  pipes: [],

  template: ` <div>list</div> <ul> 
                <li *ngFor="#todo of todos" [class.completed]="todo.completed">
                <input type="checkbox" />
                <a [routerLink]="['TodoDetail',{id: todo.id}]" >{{todo.text}}</a>
                </li>
                </ul>`
})
export class TodoList {
  @Input() todos:Todo[];
  constructor(){
    let dummyTodo:Todo = {};
    dummyTodo.text = "dummy";
    dummyTodo.id = 1000;
    this.todos = [dummyTodo];
  }
}

@Component({
  selector: 'todos-list',
  styles: [
    `
.completed{
text-decoration: line-through;
}
`
  ],
  providers: [], //dont need this here if it is already done in main.ts
  template: `<div> Todos List</div>
<todo-list [todos]="todoService.todos"></todo-list>`
})
export class TodosList {
  todos: Todo[];
  constructor(public todoService:TodoService) {
    this.todos = todoService.todos;

  }


}
