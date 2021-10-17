import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './home/inicio/inicio.component';
import { CardsComponent } from './components/cards/cards.component';
import { TablaEquiposComponent } from './components/tabla-equipos/tabla-equipos.component';
import { DeportesCategoriaComponent } from './components/deportes-categoria/deportes-categoria.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'estadios', component: CardsComponent },
  { path: 'equipos', component: TablaEquiposComponent },
  { path: 'deportes', component: DeportesCategoriaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
