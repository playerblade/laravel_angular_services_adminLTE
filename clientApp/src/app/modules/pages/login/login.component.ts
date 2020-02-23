import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginModule} from '../../models/login/login.module';
import { HttpClient } from '@angular/common/http';
declare var $;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public Login: LoginModule = {
    email: null,
    password: null
  };
  public error = null;

  constructor(private router: Router, private httpClient: HttpClient ) { }

  ngOnInit() {
    document.body.className = 'hold-transition login-page';
    $(() => {
      $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' /* optional */
      });
    });
  }

  singIn() {
    return this.httpClient.post('http://127.0.0.1:8000/api/auth/login', this.Login)
    .subscribe(
      data => console.log(data),
      error => this.handleError(error)
    );
    // console.log(this.Login);
    // this.router.navigate(['Dashboard']);
  }

  handleError(error) {
    this.error = error.error.error;
  }

  login() {
    this.router.navigate(['Dashboard']);
  }
}
