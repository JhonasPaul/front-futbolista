import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DirectivaComponent } from './directiva/directiva.component';
import {RouterModule, Routes} from "@angular/router";
import { FutbolistaComponent } from './futbolista/futbolista.component';
import { PaginatorComponent } from './paginator/paginator.component';
import {provideHttpClient, withFetch} from "@angular/common/http";
import { DetalleComponent } from './futbolista/detalle/detalle.component';

const routes: Routes = [
  {path:'', redirectTo: 'futbolistas', pathMatch:'full'},
  {path:'directivas',component: DirectivaComponent},
  {path:'futbolistas',component: FutbolistaComponent},
  {path:'futbolistas/page/:page', component:FutbolistaComponent},
  {path:'futbolistas/:id', component:DetalleComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DirectivaComponent,
    FutbolistaComponent,
    PaginatorComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent]
})
export class AppModule { }
