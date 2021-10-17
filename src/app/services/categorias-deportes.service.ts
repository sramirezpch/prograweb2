import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deporte } from '../entities/deporte';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CategoriasDeportesService {
  constructor(private readonly http: HttpClient) { }

  mostrarDeportes(): any {
    return this.http.post<Deporte[]>('https://unfair-spiral.000webhostapp.com/webDeportes/deportistas.php', null);
  }

  categoriasInsert(pais: string, nombre: string, evento: string, medallas: number, deporte: string) {
    const ruta = "https://unfair-spiral.000webhostapp.com/webDeportes/insertarDeportistas.php";

    const formData: FormData = new FormData();
    formData.append("pais", pais);
    formData.append("nombre", nombre);
    formData.append("deporte", deporte)
    formData.append("evento", evento);
    formData.append("medallas", medallas.toString());

    console.log(formData);

    return this.http.post(ruta, formData);
  }
}