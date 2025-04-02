import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { BannerNavComponent } from './components/banner-nav/banner-nav.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { GenerosComponent } from './components/generos/generos.component';
import { ArtistasComponent } from './components/artistas/artistas.component';
import { ActualidadComponent } from './components/actualidad/actualidad.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    BannerNavComponent,
    HistoriaComponent,
    GenerosComponent,
    ArtistasComponent,
    ActualidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
