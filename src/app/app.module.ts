import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { BannerNavComponent } from './components/banner-nav/banner-nav.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { GenerosComponent } from './components/generos/generos.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    BannerNavComponent,
    HistoriaComponent,
    GenerosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
