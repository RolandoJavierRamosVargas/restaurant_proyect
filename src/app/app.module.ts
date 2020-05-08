import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { SigninComponent } from './login/signin/signin.component';
import { SignupComponent } from './login/signup/signup.component';
import { LadingComponent } from './ladingPage/lading/lading.component';

import { AppRoutingModule } from './app-routing.module';

import {FormsModule , ReactiveFormsModule} from '@angular/forms';
//Modulo Shared
import { SharedModule } from './shared/shared.module';

//Modulo Register
import { RegisterModule } from './register/register.module';

//Modulo Pages
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    LadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    RegisterModule,
    PagesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
