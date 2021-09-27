import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { CardComponent } from './entities/card/card.component';
import { EntitiesComponent } from './entities/entities.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './commom/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardComponent,
    EntitiesComponent,
    ServicesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
