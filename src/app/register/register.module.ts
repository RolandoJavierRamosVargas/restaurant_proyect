import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { CategoriasComponent } from './categorias/categorias.component'; 
import { FinComponent } from './fin/fin.component';
import { StepperComponent } from './stepper/stepper.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DatosPersonalesComponent,
    CategoriasComponent,
    FinComponent,
    StepperComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [
    DatosPersonalesComponent,
    CategoriasComponent,
    FinComponent,
    StepperComponent
  ]
})
export class RegisterModule { }
