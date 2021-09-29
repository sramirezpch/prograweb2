import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CardsComponent } from './home/cards/cards.component';
import { FooterComponent } from './commom/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogComponent } from './commom/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    FooterComponent,
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
