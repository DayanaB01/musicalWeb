import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { GenerosComponent } from './components/generos/generos.component';
import { ArtistasComponent } from './components/artistas/artistas.component';

const routes: Routes = [
  {
    path:'', 
    redirectTo:'principal', 
    pathMatch:'full'
  },
  {
    path: 'principal', 
    component:PrincipalComponent
  },
  {
    path: 'historia', 
    component:HistoriaComponent
  },
  {
    path:'generos', 
    component: GenerosComponent
  },
  {
    path:'artistas',
    component: ArtistasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
