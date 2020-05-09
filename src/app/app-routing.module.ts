import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './login/signin/signin.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';


const routes: Routes = [
    {path:'login',component:SigninComponent},
    {path:'**',component:NopagefoundComponent},
];

export const APP_ROUTES=RouterModule.forRoot(routes);

