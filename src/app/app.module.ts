import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { SigninComponent } from './login/signin/signin.component';
import { SignupComponent } from './login/signup/signup.component';
import { LadingComponent } from './ladingPage/lading/lading.component';

import { APP_ROUTES } from './app-routing.module';

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
    APP_ROUTES,
    SharedModule,
    BrowserAnimationsModule,
    RegisterModule,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
