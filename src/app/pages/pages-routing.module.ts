import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { PagesComponent } from './pages.component';
import { GraficaComponent } from '../components/grafica/grafica.component';

const routes: Routes = [
  {
    path:'',
    component:PagesComponent,
    children:[
        {path:'dashboard',component:DashboardComponent},
        {path:'grafica',component:GraficaComponent},
        {path:'',redirectTo:'/dashboard',pathMatch:'full'}
    ]
}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PagesRoutingModule { }
