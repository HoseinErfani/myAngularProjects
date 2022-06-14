import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { IncComponent } from './inc/inc.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None,
})
export class AppComponent{



  @ViewChild(IncComponent,{static:true,read:IncComponent}) incCom?:IncComponent;
  @ViewChildren(IncComponent,{read:IncComponent}) incComs?:QueryList<IncComponent>;

  public showAlert(inputElem:HTMLInputElement){
    console.log(inputElem.value);
    inputElem.value='';
  }
  public increament2(){
    // this.incCom?.increament();
    this.incComs?.forEach(inCom=>{
      inCom.increament();
     })
  }
}
