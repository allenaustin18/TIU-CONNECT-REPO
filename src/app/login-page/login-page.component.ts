import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
    providers: [MessageService]
})
export class LoginPageComponent implements OnInit {
    text: string;
    loading = false;
    submitted = false;
    returnUrl: string;
    LoginForm: FormGroup;
    checked = false;
    msgs: Message[] = [];
    private boolean: any;
    constructor(
        private FB: FormBuilder,
        private route: ActivatedRoute,
        private router: Router

)  {}

Test() {
        console.log(this.LoginForm.get('emailForm').value);

        // console.log(this.LoginForm.get('passlForm').value);
        }

    showSuccess() {
        console.log('**********indeis sucesss' + this.LoginForm.get('checkedStudent').value);
        console.log('**********indeis sucesss' + this.LoginForm.get('checkedAdmin').value);
        //console.log('**********indeis sucesss' + this.checkedAdmin );
        if (this.checked ){
            if ( this.LoginForm.get('emailForm').value === 'allenaustin@test.com' ||
                this.LoginForm.get('emailForm').value === 'allenaustin2@test.com' ) {
                this.msgs = [];
                this.msgs.push({severity: 'success', summary: 'Success', detail:'Eligible to view'});
                // tslint:disable-next-line:align
            } else {
                this.msgs = [];
                this.msgs.push({severity: 'Failed ', summary: 'Failure', detail:'Access Restricted'});
            }
        } else {
            this.msgs = [];
            this.msgs.push({severity: 'Failed ', summary: 'Failure', detail:'Access Restricted'});
        }


    }
  ngOnInit() {
      this.LoginForm = this.FB.group({
          emailForm: ['', Validators.required],
          password: ['', Validators.required],
          checkedStudent: String,
          checkedAdmin: String
      });

      // get return url from route parameters or default to '/'
      this.returnUrl = '/Calendar';
  }
    get f() { return this.LoginForm.controls; }

    onSubmit() {
        this.submitted = true;


        // stop here if form is invalid
        if (this.LoginForm.invalid) {
            return;
        }
        this.loading = true;
        this.router.navigate([this.returnUrl]);
    }

}
