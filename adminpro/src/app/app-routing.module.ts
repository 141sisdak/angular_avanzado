import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  //Rutas protegidas
  {
    path: '', 
    component: PagesComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'progress', component: ProgressComponent},
      {path: 'grafica1', component: Grafica1Component}
    ]
  },
  

  //Rutas publics
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  
  //{path: '', redirectTo: '/dashboard', pathMatch: 'full'},//Para parth vacio
  {path: '**', component: NopagefoundComponent}//Para url's que no se correspondan con ninguna
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],//forRoot es para especificar las rutas principales (padres) y le decimos que son las que estan
  //almacenadas en la constante routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
