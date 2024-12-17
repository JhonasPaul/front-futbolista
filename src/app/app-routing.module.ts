import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./shared/pages/home-page/home-page.component";


const routes: Routes = [

    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'futbolistas',
        loadChildren: () => import ('./futbolista/futbolista.module').then(m => m.FutbolistaModule)
    },
    {
        path: '**',
        redirectTo: 'home'
    }
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
