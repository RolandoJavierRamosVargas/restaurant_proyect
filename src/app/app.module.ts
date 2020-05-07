import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SigninComponent } from './login/signin/signin.component';
import { SignupComponent } from './login/signup/signup.component';
import { SharedModule } from './shared/shared.module';
import { GraficaComponent } from './components/grafica/grafica.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LadingComponent } from './ladingPage/lading/lading.component';
import { StepperComponent } from './register/stepper/stepper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { DatosPersonalesComponent } from './register/datos-personales/datos-personales.component';
import {MatSelectModule} from '@angular/material/select'; 
import { MaterialFileInputModule } from 'ngx-material-file-input';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    GraficaComponent,
    DashboardComponent,
    LadingComponent,
    StepperComponent,
    DatosPersonalesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MatStepperModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MaterialFileInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
