import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesRoutingModule } from './pages/pages.routing';


const routes: Routes = [

  /************************************************
   * RELACION DE RUTAS
   * **********************************************
   * PagesRouting:
   *   -> /dashboard
   *   -> /grafica1
   *   -> /progress
   * 
   * AuthRouting:
   *   -> /login
   *   -> /register
   * *********************************************
   */

  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},//Para parth vacio
  {path: '**', component: NopagefoundComponent}//Para url's que no se correspondan con ninguna
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),//forRoot es para especificar las rutas principales (padres) y le decimos que son las que estan
    //almacenadas en la constante routes
    PagesRoutingModule,
    AuthRoutingModule
  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
