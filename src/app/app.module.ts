import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HOMEComponent } from './home/home.component';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HOMEComponent,
    CalendarPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
