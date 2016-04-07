import  {Component, Input, Output, EventEmitter} from 'angular2/core'
import {TodoService, Todo} from '../services/todos'
import {RouteParams} from "angular2/router";



@Component({
  selector: 'todo-detail',
  styles: [],
  providers: [],//dont need this here if it is already done in main.ts
  template: `<div> 
<h1>Todo Detail</h1>
<h2>{{todo.text}}</h2>

</div>`
})
export class TodoDetail {
  todo:Todo;
  constructor(public todoService: TodoService, routeParams:RouteParams) {
    this.todo = todoService.getTodoById(parseInt(routeParams.get("id")));
   
    

  }

}
