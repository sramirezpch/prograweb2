import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './commom/blog/blog.component';
import { CardsComponent } from './home/cards/cards.component';

const routes: Routes = [
  {path: '', component: BlogComponent},
  {path: 'estadios', component: CardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
