import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { HomeDetalhesComponent } from './page/home-detalhes/home-detalhes.component';

const routes: Routes = [
  {
    path:'', component :HomeComponent, pathMatch: 'full'
  },
  {
    path:'detalhe',component:HomeDetalhesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
