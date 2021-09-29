import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipos } from '../entities/equipos';

@Injectable({
  providedIn: 'root'
})
export class InformacionEquiposService {

  constructor(private http:HttpClient) { }

  mostrarEquipos(){
    const ruta ="https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328";
    return this.http.get<Equipos[]>(ruta);
  }
}
