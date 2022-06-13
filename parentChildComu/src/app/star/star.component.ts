import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnInit {

  @Input() rating: number = 1.5;
  width: number = 90;

  @Output() starClicked=new EventEmitter<number>();

  public onClick(){
    this.starClicked.emit(this.rating)
  }




  constructor() { }

  ngOnInit(): void {
    this.width = (this.rating / 5) * 90

  }

}
