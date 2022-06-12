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


  styles = {}
  classes = {}

  constructor() {

    console.log('this is constructor');

  }




  ngOnInit(): void {
    console.log('this is on init');
    this.styles = {
      'font-size': (this.isCurrect) ? '2rem' : '8rem',
      'color': 'blue'
    }

    this.classes={
      'big-font-size':this.isModified,
      'red-font':this.isCancelled
    }

    // throw new Error("method not implemented")
  }
}
