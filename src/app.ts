import  {Component} from 'angular2/core'
import  {NameComponent} from './name-component'
import  {FriendsService} from './friends'

@Component({
  selector: 'jazoon-app',
  directives: [NameComponent],
  //providers: [FriendsService],

  template: `<h1 id="main title"> Hello {{myName}}</h1>
<input type="text" [(ngModel)]="myName">
<h5>Friendlist:</h5>
<ul>
    <li *ngFor="#friend of friendsService.list">{{friend}}</li>
</ul>


   <name-component [(name)]="myName" >
                    
  </name-component>
`
})
export class App {

  isDisabled:boolean;
  myName:string = "My name in the app: markus";
  friends:string[];


  constructor( public friendsService: FriendsService) {
   // this.friends = friendsService.list;


    this.isDisabled = false;
    // setTimeout(() =>(this.name = "Markus !!!"), 1000)
  }

  nameChanged(name:string) {
    this.myName = name;

  }
}



