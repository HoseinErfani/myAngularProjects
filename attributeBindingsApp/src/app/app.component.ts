import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isCurrect: boolean = false;
  isModified: boolean = true;
  isCancelled: boolean = true;
  isUserShown: boolean = false;

  styles = {}
  classes = {}



  usersObj: any = [
    { id: 1, name: 'ali' },
    { id: 2, name: 'amir' },
    { id: 3, name: 'reza' },
  ]

  constructor() {

    console.log('this is constructor');

  }


  public changeUsersObj() {
    // console.log('added');
   
    
    
    this.usersObj = [
      { id: 1, name: 'ali' },
      { id: 2, name: 'zahra' },
      { id: 3, name: 'erfane' },
      { id: 4, name: 'moin' },
      { id: 4, name: 'moin' },
    ]


    // console.log(this.usersObj);
  }

  public trackByFunc(index:number,element:any){
    return element.id;
  }
  
  ngOnInit(): void {
    console.log('this is on init');
    this.styles = {
      'font-size': (this.isCurrect) ? '2rem' : '8rem',
      'color': 'blue'
    }

    this.classes = {
      'big-font-size': this.isModified,
      'red-font': this.isCancelled
    }

    // throw new Error("method not implemented")
  }
}
