import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TablaEquiposComponent } from './components/tabla-equipos/tabla-equipos.component';

import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { CardsComponent } from './components/cards/cards.component';
import { InicioComponent } from './home/inicio/inicio.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { BannerComponent } from './components/banner/banner.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogComponent } from './common/blog/blog.component';
import { CampeonesComponent } from './components/campeones/campeones.component';

@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    FooterComponent,
    InicioComponent,
    MainContentComponent,
    BannerComponent,
    CardsComponent,
    BlogComponent,
    CampeonesComponent,
    TablaEquiposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
