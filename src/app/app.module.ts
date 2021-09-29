import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { CardsComponent } from './home/cards/cards.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MainContentComponent } from './home/main-content/main-content.component';
import { BannerComponent } from './home/banner/banner.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogComponent } from './common/blog/blog.component';


@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    FooterComponent,
    InicioComponent,
    MainContentComponent,
    BannerComponent,
    CardsComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
