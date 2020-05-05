import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SigninComponent } from './login/signin/signin.component';
import { SignupComponent } from './login/signup/signup.component';
import { SharedModule } from './shared/shared.module';
import { GraficaComponent } from './components/grafica/grafica.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmpresaComponent } from './register/empresa/empresa.component';
import { LadingComponent } from './ladingPage/lading/lading.component';



@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    GraficaComponent,
    DashboardComponent,
    EmpresaComponent,
    LadingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
