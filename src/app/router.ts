import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChartjsComponent } from './components/chartjs/chartjs.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }, 
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'chartjs',
        component: ChartjsComponent
    }
]