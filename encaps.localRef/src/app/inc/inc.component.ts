import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inc',
  templateUrl: './inc.component.html',
  styleUrls: ['./inc.component.css']
})
export class IncComponent implements OnInit {

  public  count:number=0;
 public  alertClass="";


  @ViewChild('testText',{static:true,read:ElementRef}) testText!:ElementRef;

  constructor( private renderer:Renderer2) {
    

    this.alertClassHandler()
   } 


  public increament(){
    this.count++;
    this.alertClassHandler()
  }
  public decreament(){
    this.count--;
    this.alertClassHandler()
  }


  ngOnInit(): void {
    // this.testText.nativeElement.innerText=332;
    // console.log(this.testText);
    this.renderer.setStyle(this.testText.nativeElement,'color','purple')

  }
  
  public alertClassHandler(){
    this.alertClass="alert "+((this.count>0)?"alert-info":"alert-danger");
  }

}
