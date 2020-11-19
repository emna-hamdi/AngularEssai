import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';

import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {bootstrap} from "./bootstrap";
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [
    AppComponent,
    ChildAComponent,
    ChildBComponent,
    RegistrationComponent,
    AuthentificationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
