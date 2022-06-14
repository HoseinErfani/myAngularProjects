import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { user } from '../app-interface';
 @Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  

  @Output() onAddUserClicked=new EventEmitter<user>();

  public addUser(email: string, username: string, address: string,event:Event) {
    event.preventDefault();
    let u:user={ email, username, address }
     
    this.onAddUserClicked.emit(u);
  
  }

}
