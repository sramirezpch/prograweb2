import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deporte } from '../entities/deporte';

@Injectable({
  providedIn: 'root'
})
export class CategoriasDeportesService {
  constructor(private readonly http: HttpClient) { }

  mostrarDeportes(): any {
    return this.http.get<any>('https://unfair-spiral.000webhostapp.com/webDeportes/deportesCategorias.php').subscribe(items => {
      console.log(items);
    });
  }
}
