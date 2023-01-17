import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interface';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

    getHeroes():Observable<Heroe[]>{
      return this.http.get<Heroe[]>(`${this.baseUrl}/games`);
    }

    getHeroePorId(id:string):Observable<Heroe>{
      return this.http.get<Heroe>(`${this.baseUrl}/games/${id}`);
    }

    getSugerencias(termino:string):Observable<Heroe[]>{
      return this.http.get<Heroe[]>(`${this.baseUrl}/games?q=${termino}&_limit=6`);
    }

    postAgregarHeroe(heroe:Heroe):Observable<Heroe>{
      return this.http.post<Heroe>(`${this.baseUrl}/games`, heroe);
    }

    patchActualizarHeroe(heroe:Heroe):Observable<Heroe>{
      return this.http.put<Heroe>(`${this.baseUrl}/games/${heroe.id}`, heroe);
    }

    DeleteHeroe(id:string):Observable<any>{
      return this.http.delete<any>(`${this.baseUrl}/games/${id}`);
    }

}
