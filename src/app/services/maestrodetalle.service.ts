import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Deporte2 } from '../entities/deporte2';
import { Campeon2 } from '../entities/campeon2';

@Injectable({
  providedIn: 'root'
})
export class MaestrodetalleService {

  constructor(private readonly http: HttpClient) { }

  getSports(): Observable<Deporte2[]> {
    return this.http.get<Deporte2[]>('https://deportistas-isil.herokuapp.com/api/sports')
  }

  // getChampions(sportId: string): Observable<Campeon2[]> {
  //   // return this.http.post<Campeon2[]>(`https://deporti-isil.herokuapp.com/champions`, { sportId: id });
  //   let headers = new HttpHeaders();
  //   headers.append('Content-Type', 'application/json; charset=utf-8');
  //   return this.http.post<Campeon2[]>(`/api/champions`, { sportId }, { headers: headers });
  // }

  getChampions(sportId: string): Observable<Campeon2[]> {
    return this.http.post<Campeon2[]>(`https://deportistas-isil.herokuapp.com/api/champions`, { sportId: sportId });
    // this.http.post<any>(`/api/champions`, { sportId }, { headers: headers }).subscribe(item => console.log(item));
    // return this.http.post<any>('/api/champions', { sportId: sportId })
  }
}
