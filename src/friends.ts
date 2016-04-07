import {Injectable} from 'angular2/core';

@Injectable() //best practice: add this to all your services so they can use DI
export class FriendsService {
  list:string[];

  constructor() {
    console.log("init friend service constructor")
    this.list = ['rob', 'sam', 'sally']
  }

}
