### Manual Setup

- npm install -g typescript typings
- npm install angular2
- install listed peerDeps
- typings install es6-shim
- npm install systemjs
- create ser/main.tx
- create /src/app.ts
- create index.html
- tsc to build


Er empfiehlt webpack, es braucht aber immer noch tsconfig 

angular2 polyfills wird momentan benoetigt

lite-server
tsc --watch


performance: Es ist best practice möglichst immer immutable zu verwenden um performance hochzuhalten
immutable lirbrary ngrx von rob
Bombshell: ng-model gar nicht mehr verwenden sondern reactive bindings verwenden

concat gibt immer ein neues array zureuck vs push

###http services:
strongly recommends using fetch
there is also angular2/http there will be a talk by ben tomorrow
on an observable you can do toPromise(), 
Observables can be canceld


seed projects

angular2-webpack-starter
angular2-seed mgechev

jspm does not work very well with typescript

##Questions
- module packaging
- ts compile for tests?


