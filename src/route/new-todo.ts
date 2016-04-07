import  {Component, Input, Output, EventEmitter} from 'angular2/core'
import {TodoService} from '../services/todos'
import {Todo} from '../services/todos'


@Component({
  selector: 'new-todo-input',
  styles: [],
  template: `<div>

                <input type="text" [(ngModel)]="newTodo.text"/>
                <button (click)="saveTodo()">Save</button> 
                
             </div>`
})
export class NewTodoInput {
  newTodo:Todo = {};
  @Output() create:EventEmitter<Todo> = new EventEmitter();
  constructor(){

    this.newTodo.completed = false;
  }
  saveTodo() {
    console.log("save pressed for todo", this.newTodo);
    this.newTodo.completed = false;
    this.create.emit(this.newTodo);
    this.newTodo = {};

  }

}

@Component({
  selector: 'new-todo',
  providers: [], //dont need this here if it is already done in main.ts
  styles: [],
  directives: [NewTodoInput],
  template: `<div>New Todo</div>
            <new-todo-input (create)="addTodoToService($event)"></new-todo-input>
`
})
export class NewTodo {
  constructor(public todoService:TodoService) {

  }

  addTodoToService(newTodo) {
    console.log("hit addTodoToService")
    this.todoService.addTodo(newTodo);
  }


}
