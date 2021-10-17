import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deportes } from '../entities/deportes';

@Injectable({
  providedIn: 'root'
})
export class CategoriasDeportesService {
  deportes: Deportes[];
  constructor(private readonly http: HttpClient) { }

  mostrarDeportes(): any {
    return this.http.get<any>('https://unfair-spiral.000webhostapp.com/webDeportes/deportesCategorias.php').subscribe(items => {
      console.log(items);
    });
  }
}
