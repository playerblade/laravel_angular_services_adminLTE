import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './modules/models/login/login.module';
import { DashboardModule } from './modules/models/dashboard/dashboard.module';
import { from } from 'rxjs';
// import { RegisterComponent } from './modules/pages/register/register.component';
import {RegisterModule } from './modules/models/register/register.module';

@NgModule({
  declarations: [
    AppComponent,
    // RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LoginModule,
    DashboardModule,
    RegisterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
