import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interface';
import { environment } from '../../../environments/environments';
import { Graph } from '../interfaces/graphs.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

    getHeroes():Observable<Heroe[]>{
      return this.http.get<Heroe[]>(`${this.baseUrl}/games2023?_sort=last_dayplay&_order=desc`);
    }

    getGraph():Observable<Graph[]>{
      return this.http.get<Graph[]>(`${this.baseUrl}/graph2023`);
    }

    getHeroePorId(id:string):Observable<Heroe>{
      return this.http.get<Heroe>(`${this.baseUrl}/games2023/${id}`);
    }

    getSugerencias(termino:string):Observable<Heroe[]>{
      return this.http.get<Heroe[]>(`${this.baseUrl}/games2023?q=${termino}&_limit=6`);
    }

    postAgregarHeroe(heroe:Heroe):Observable<Heroe>{
      return this.http.post<Heroe>(`${this.baseUrl}/games2023`, heroe);
    }

    patchActualizarHeroe(heroe:Heroe):Observable<Heroe>{
      return this.http.put<Heroe>(`${this.baseUrl}/games2023/${heroe.id}`, heroe);
    }

    DeleteHeroe(id:string):Observable<any>{
      return this.http.delete<any>(`${this.baseUrl}/games2023/${id}`);
    }

}
