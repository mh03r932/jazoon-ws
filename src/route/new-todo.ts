import  {Component, Input, Output, EventEmitter} from 'angular2/core'
import {TodoService} from '../services/todos'
import {Todo} from '../services/todos'
import {FormBuilder, Validators} from "angular2/common";


@Component({
  selector: 'new-todo-input',
  styles: [],
  template: `<form [ngFormModel]="myForm">
<div *ngIf="myForm.valid">invalid!</div>
                <input type="text" #newtodoinput ngControl="text"/>
                <button (click)="saveTodo(newtodoinput)">Save</button> 
                
             </form>`
})
export class NewTodoInput {
  newTodo:Todo = {};
  @Output() create:EventEmitter<Todo> = new EventEmitter();
  myForm:ControlGroup;
  constructor(fb:FormBuilder) {
    this.myForm = fb.group({
      text: ['', Validators.minLength(2)]
    });
    this.myForm.valid;

    this.newTodo.completed = false;
  }

  saveTodo(el) {
    console.log("save pressed for todo", this.newTodo);
    this.newTodo.completed = false;
    this.create.emit({
      text: el.value,
      completed: false
    });
   // this.create.emit(this.newTodo);
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
