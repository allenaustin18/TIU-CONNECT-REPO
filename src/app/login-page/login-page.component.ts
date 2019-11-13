import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
text: string;
  constructor(private FB: FormBuilder) {

     this.LoginForm = this.FB.group({emailForm: ['', ]});
    }
Test(){ console.log(this.LoginForm.get('emailForm').value)}
    LoginForm: FormGroup;
  ngOnInit() {
  }

}
