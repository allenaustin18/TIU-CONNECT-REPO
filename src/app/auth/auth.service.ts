import { Injectable } from '@angular/core';
import { LoginPageComponent } from '../login-page/login-page.component';



@Injectable()
export class AuthService {
  constructor() {}
  // ...
  public isAuthenticated(): boolean {
    return LoginPageComponent.returnLoggedIn();
  }

  public createToken(username: string, signedIn: boolean) {
  }
}
