import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { HistoriaComponent } from './components/historia/historia.component';

const routes: Routes = [
  {path:'', redirectTo:'principal', pathMatch:'full'},
  {path: 'principal', component:PrincipalComponent},
  {path: 'historia', component:HistoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
