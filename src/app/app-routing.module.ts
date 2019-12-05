import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';



const routes: Routes = [
  { path: 'Login', component: LoginPageComponent },
  { path: 'Calendar', component: CalendarPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
