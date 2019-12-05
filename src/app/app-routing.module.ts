import { CalendarPageComponent } from './calendar-page/calendar-page.component';
import { NgModule } from '@angular/core';
import { CanActivate, Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import {
  AuthGuardService as AuthGuard
} from './auth/auth-guard.service';


const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'calendar', component: CalendarPageComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
