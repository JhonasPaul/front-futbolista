import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FutbolistaRoutingModule} from "./futbolista-routing.module";
import { FutbolistaListComponent } from './components/futbolista-list/futbolista-list.component';
import { FutbolistaPaginadorComponent } from './components/futbolista-paginador/futbolista-paginador.component';
import { FutbolistaDetalleComponent } from './pages/futbolista-detalle/futbolista-detalle.component';


@NgModule({
  declarations: [
    FutbolistaListComponent,
    FutbolistaPaginadorComponent,
    FutbolistaDetalleComponent,
  ],
  exports: [
    FutbolistaListComponent,
    FutbolistaPaginadorComponent,
    FutbolistaDetalleComponent
  ],
  imports: [
    CommonModule,
    FutbolistaRoutingModule,
  ]
})
export class FutbolistaModule {
}
