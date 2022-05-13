// Modulos
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageRoutingModule } from './pages/page.routing';
import { AuthRoutingModule } from './auth/auth.routing';

// Componentes
import { NotpagefoundComponent } from './404/notpagefound.component';

const routes: Routes = [
  // path: Dashboard -> PageRoutingModule
  // path: Auth -> AuthRoutingModule
  {path:'',redirectTo:'/Dashboard',pathMatch:'full'},
  {path:'**',component:NotpagefoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PageRoutingModule,
    AuthRoutingModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
