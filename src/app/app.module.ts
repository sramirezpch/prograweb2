import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TablaEquiposComponent } from './components/tabla-equipos/tabla-equipos.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaEquiposComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
