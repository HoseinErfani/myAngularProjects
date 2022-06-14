import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None,
})
export class AppComponent {
  title = 'encaps.localRef';

  public showAlert(inputElem:HTMLInputElement){
    console.log(inputElem.value);
    inputElem.value='';
  }
}
