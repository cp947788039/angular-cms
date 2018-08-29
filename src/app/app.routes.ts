import { Routes } from '@angular/router';


export const ROUTER_CONFIG: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: '', loadChildren: './pages/page-app.module#PageAppModule' },
];