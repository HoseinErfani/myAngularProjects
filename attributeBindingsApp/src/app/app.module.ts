import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { SwitchCase1Component } from './switch-case1/switch-case1.component';
import { SwitchCase2Component } from './switch-case2/switch-case2.component';
import { SwitchCase3Component } from './switch-case3/switch-case3.component';
import { SwitchCase4Component } from './switch-case4/switch-case4.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SwitchCase1Component,
    SwitchCase2Component,
    SwitchCase3Component,
    SwitchCase4Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
