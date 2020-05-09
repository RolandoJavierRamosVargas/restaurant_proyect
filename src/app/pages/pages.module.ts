import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PAGES_ROUTE } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { GraficaComponent } from '../components/grafica/grafica.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    GraficaComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
    PAGES_ROUTE,
  ],
  exports : [
    PagesComponent,
    DashboardComponent,
    GraficaComponent
  ]
})
export class PagesModule { }
