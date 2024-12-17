import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FutbolistaPageComponent} from '../shared/pages/futbolista-page/futbolista-page.component';
import {FutbolistaDetalleComponent} from './pages/futbolista-detalle/futbolista-detalle.component';

const routes: Routes = [

  {
    path:'futbolistas/page/:page',
    component: FutbolistaPageComponent
  },
  {
    path:'futbolistas-detalle/:id',
    component: FutbolistaDetalleComponent
  },
  {
    path: 'futbolistas',
    component:FutbolistaPageComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FutbolistaRoutingModule { }
