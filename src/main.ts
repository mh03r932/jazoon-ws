import {bootstrap} from 'angular2/platform/browser'
import  {FriendsService, FriendsConfig} from './friends'

import {App}from './app'


//it is possible to do top level providers instead of doing it in components
//+ components can be agnostic of provider, probably the way to go forward
//-user case for doing this in components: something like ui-bootstrap where they provide evertything ready to drop in
bootstrap(App,[FriendsService, FriendsConfig]);
