import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dataBindingApp';
  name:string ='hello';
  isDisabled:boolean=false;


  public onInputChange(e:Event){
this.name=(<HTMLInputElement>e.target).value;


  }
}
