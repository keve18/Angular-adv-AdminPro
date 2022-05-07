import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NotpagefoundComponent } from './pages/notpagefound/notpagefound.component';
import { PageComponent } from './pages/page.component';

const routes: Routes = [
  {
  path:'',
  component:PageComponent,
  children:[
    {path:'Dashboard',component:DashboardComponent},
    {path:'Progress',component:ProgressComponent},
    {path:'Grafica1',component:Grafica1Component},
    {path:'',redirectTo:'/Dashboard',pathMatch:'full'}
  ]
  },

  {path:'Login',component:LoginComponent},
  {path:'Register',component:RegisterComponent},

  {path:'**',component:NotpagefoundComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
