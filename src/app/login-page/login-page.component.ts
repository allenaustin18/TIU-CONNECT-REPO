import { RadioButtonModule } from 'primeng/radiobutton';
import { Router } from '@angular/router';
import { Component, OnInit, NgModule } from '@angular/core';
import { RestService } from '../rest.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { timeout } from 'q';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})



export class LoginPageComponent implements OnInit {

  constructor(private restService: RestService, private fb: FormBuilder, private router: Router) {
  }
  static isLoggedIn: boolean;
  usr: string;
  pass: string;

  public static returnLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  ngOnInit() {
  }

  login() {
    const admin = {
      username: 'admin123@tiu.edu',
      password: 'something',
      adStud: '1'
    };
    const andrew = {
      username: 'zahauge1@tiu.edu',
      password: 'Bill',
      adStud: '2'
    };
    const isaac = {
      username: 'zistieff@tiu.edu',
      password: 'password',
      adStud: '2'
    };
    const allen = {
      username: 'zaaustin@tiu.edu',
      password: 'password',
      adStud: '2'
    };
    const carlos = {
      username: 'zcmarin@tiu.edu',
      password: 'password',
      adStud: '2'
    };

    const loginInfo = {
      username: this.usr,
      password: this.pass
    };
    console.log('user is ' + this.usr + ' Password is ' + this.pass);
    if (loginInfo.username === andrew.username && loginInfo.password === andrew.password) {
      console.log('success');
      LoginPageComponent.isLoggedIn = true;
      this.router.navigate(['/calendar']);
    } else {
      console.log('fail');
    }
  }
}
