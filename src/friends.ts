import {Injectable} from 'angular2/core';


export class FriendsConfig{
  url:string = 'friends.com';
}

@Injectable() //best practice: add this to all your services so they can use DI
export class FriendsService {
  list:string[];
  url:string;

  constructor(config: FriendsConfig) {
    this.url = config.url;
    console.log('friends service is using url' + this.url)
    this.list = ['rob', 'sam', 'sally']
  }

  

}
