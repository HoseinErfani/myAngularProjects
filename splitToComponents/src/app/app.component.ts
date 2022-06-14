import { Component } from '@angular/core';
import { user } from './app-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: user[] = [
    { email: 'a@a', username: 'aaaa', address: 'bbbb' },
    { email: 'b@a', username: 'BBB', address: 'CCC' },
    { email: 'c@a', username: 'DDD', address: 'EEE' },
    { email: 'd@a', username: 'IIIII', address: 'FFFF' },
  ]
  public addUser(user: user ) {
    this.users.push(user);
 
    
  }


}
