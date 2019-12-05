import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {CheckboxModule} from 'primeng/checkbox';
// import {FullCalendarModule} from 'primeng/fullcalendar';
import {FullCalendarModule} from 'primeng/fullcalendar';
import {DialogModule} from 'primeng/dialog';
// import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {CodeHighlighterModule} from 'primeng/codehighlighter';

import {ScheduleModule} from 'primeng/schedule';
import {MessageModule} from 'primeng/message';



@NgModule({
declarations: [
AppComponent,
LoginPageComponent,
CalendarPageComponent
],
imports: [
BrowserModule,
AppRoutingModule,
InputTextModule,
CommonModule,
FormsModule,
ReactiveFormsModule,
ButtonModule,
BrowserAnimationsModule,
CheckboxModule,
FullCalendarModule,
ScheduleModule,
FullCalendarModule,
DialogModule,
InputTextModule,
CalendarModule,
CheckboxModule,
ButtonModule,
TabViewModule,
CodeHighlighterModule,
MessageModule

],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
