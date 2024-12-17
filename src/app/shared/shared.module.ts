import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {RouterModule} from "@angular/router";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {FutbolistaPageComponent} from "./pages/futbolista-page/futbolista-page.component";
import {FutbolistaModule} from '../futbolista/futbolista.module';


@NgModule({
  declarations: [
    SidebarComponent,
    HomePageComponent,
    FutbolistaPageComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FutbolistaModule
  ],
  exports: [
    SidebarComponent,
    HomePageComponent,
    FutbolistaPageComponent,
  ]
})
export class SharedModule {
}
