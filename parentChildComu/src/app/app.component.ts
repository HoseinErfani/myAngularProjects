import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parentChildComu';
  ratings:number[]=[1.5,3,5,2.5,4];

  public getRating(rating:number){
    console.log('rating is '+rating);
    
  }
}
