import { JitEvaluator, ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = "this is where the one your name shows";
  password: string = "";
  passwordConf: string = "";
  passMessage: string = "";
  isPassConfirmed: number = 0;
  passConfirmedClass: string = '';

  public onInputChangeName(e: Event) {
    var value = (<HTMLInputElement>e.target).value;
    if ("" !== value) {

      this.name = "hello " + value;
    }
    else {
      this.name = "this is where the one your name shows";
    }
  }


  public onInputChangePass(e: Event) {
    var value = (<HTMLInputElement>e.target).value;
    this.password = value;
    this.isPassesConfirmed();

  }


  public onInputChangePassConf(e: Event) {
    if ("" !== this.password) {


      var value = (<HTMLInputElement>e.target).value;
      this.passwordConf = value;

      this.isPassesConfirmed();


    }



  }

  private isPassesConfirmed() {

    if (this.password === '' || this.passwordConf === '') {
      this.isPassConfirmed = 0


    } else {
      if (this.password === this.passwordConf) {
        this.passMessage = "right";
        this.isPassConfirmed = 1
        this.passConfirmedClass = "success"
      }
      else {
        this.passMessage = "wrong!"
        this.isPassConfirmed = -1
        this.passConfirmedClass = "danger"
      }
    }
  }



}
