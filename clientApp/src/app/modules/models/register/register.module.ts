import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from '../../pages/register/register.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule
  ],
  exports: [
    RegisterComponent,
    // RegisterModule
  ]
})
export class RegisterModule {
  name: string;
  email: string;
  password: string;
  // tslint:disable-next-line:variable-name
  password_confirmation: string;
}
