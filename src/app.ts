import  {Component} from 'angular2/core'
import  {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router'

//routable "smaprt compontents
import  {NewTodo, TodoDetail,TodoList, TodosList} from './route/index'
import {TodoService} from './services/todos'
import {Http}from  'angular2/http'


@Component({
  selector: 'todo-app',
  //providers: [FriendsService],

  template: `<h1 id="main title"> Todo app</h1>
<div>
  <a [routerLink]="['TodoList']">Todos</a>
  <a [routerLink]="['NewTodo']" >New Todo</a>
</div>
<router-outlet></router-outlet>
             
`
  , providers: [ROUTER_PROVIDERS,TodoService],
  directives: [ROUTER_DIRECTIVES],
  styles: []
})

@RouteConfig([
  {  name: 'TodoList', path: '/todos', component: TodoList, useAsDefault:true},
  { name: 'NewTodo', path: '/new', component: NewTodo  },
  { name: 'TodoDetail', path: '/todos/:id', component: TodoDetail  },
])
export class App {

}



