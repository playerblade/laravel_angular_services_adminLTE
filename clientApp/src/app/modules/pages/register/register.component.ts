import { Component, OnInit } from '@angular/core';
import {RegisterModule} from '../../models/register/register.module';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
declare var $;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  Register: RegisterModule = {
    name: null,
    email: null,
    password: null,
    password_confirmation: null
  };
  // public error = {
  //   name: null,
  //   email: null,
  //   password: null,
  //   password_confirmation: null
  // };
  public error = [];

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
    document.body.className = 'hold-transition register-page';
    $(() => {
      $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' /* optional */
      });
    });
  }

  singUp() {
    return this.httpClient.post('http://127.0.0.1:8000/api/auth/register', this.Register)
      .subscribe(
        data => console.log(data),
        error => this.handleError(error)
      );
    // console.log('hello');
    // this.router.navigate(['Login']);
  }

  handleError(error) {
    this.error = error.error.errors;
  }
}
