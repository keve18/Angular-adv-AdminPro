import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageComponent } from './page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';

const routes: Routes = [
    {
        path:'Dashboard',
        component:PageComponent,
        children:[
          {path:'',component:DashboardComponent},
          {path:'Progress',component:ProgressComponent},
          {path:'Grafica1',component:Grafica1Component}
        ]
        },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageRoutingModule {}
