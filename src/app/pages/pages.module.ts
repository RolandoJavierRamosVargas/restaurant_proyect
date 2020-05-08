import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { GraficaComponent } from '../components/grafica/grafica.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    GraficaComponent
  ],
  imports: [
    SharedModule,
    PagesRoutingModule,
  ],
  exports : [
    PagesComponent,
    DashboardComponent,
    GraficaComponent
  ]
})
export class PagesModule { }
