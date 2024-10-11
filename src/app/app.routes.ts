import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    // { path: 'intro', component: IntroComponent },
    { path: 'intro/:id', component: IntroComponent },
    //this is for lazy loading components in Angular Projects
    { path: 'intro',loadComponent:()=>import('./intro/intro.component').then((c)=>c.IntroComponent)},
];
