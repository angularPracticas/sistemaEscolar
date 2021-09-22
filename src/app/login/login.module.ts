import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginHomeComponent } from './login-home/login-home.component';
import { SirHomeComponent } from './login-home/sir-home/sir-home.component';
import { WlcomeComponent } from './login-home/sir-home/wlcome/wlcome.component';
import { FormComponent } from './login-home/sir-home/form/form.component';


@NgModule({
  declarations: [
    LoginHomeComponent,
    SirHomeComponent,
    WlcomeComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  exports: [
    LoginHomeComponent
  ]
})
export class LoginModule { }
