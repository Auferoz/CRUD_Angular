import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';
import { Heroe } from '../interfaces/heroes.interface';
import { Graph } from '../interfaces/graphs.interface';
import { Movie } from '../interfaces/movies.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

    // Games 2023 
    
    getSheetGames():Observable<Heroe[]>{
      return this.http.get<Heroe[]>(`https://sheet.best/api/sheets/2ac89502-af3e-4874-9292-eaf4a1d9c6b8/tabs/_GamesP_2023`);
    }

    getGamePorId(id:string):Observable<Heroe[]>{
      return this.http.get<Heroe[]>(`https://sheet.best/api/sheets/2ac89502-af3e-4874-9292-eaf4a1d9c6b8/tabs/_GamesP_2023/id/${id}`);
    }

    postAgregarGame(heroe:Heroe):Observable<Heroe>{
      return this.http.post<Heroe>(`https://sheet.best/api/sheets/2ac89502-af3e-4874-9292-eaf4a1d9c6b8/tabs/_GamesP_2023`, heroe);
    }

    patchActualizarGame(heroe:Heroe):Observable<Heroe>{
      return this.http.put<Heroe>(`https://sheet.best/api/sheets/2ac89502-af3e-4874-9292-eaf4a1d9c6b8/tabs/_GamesP_2023/id/${heroe.id}`, heroe);
    }

    DeleteGame(id:string):Observable<any>{
      return this.http.delete<any>(`https://sheet.best/api/sheets/2ac89502-af3e-4874-9292-eaf4a1d9c6b8/tabs/_GamesP_2023/id/${id}`);
    }


    getSugerencias(termino:string):Observable<Heroe[]>{
      return this.http.get<Heroe[]>(`https://sheet.best/api/sheets/2ac89502-af3e-4874-9292-eaf4a1d9c6b8/tabs/_GamesP_2023/search?title=${termino}*`);
    }

    // Graph 2023

    getGraph():Observable<Graph[]>{
      return this.http.get<Graph[]>(`https://sheet.best/api/sheets/2ac89502-af3e-4874-9292-eaf4a1d9c6b8/tabs/_Graph2023`);
    }

    // Movies Sheet

    getSheetMovies():Observable<Movie[]>{
      return this.http.get<Movie[]>(`https://sheet.best/api/sheets/2ac89502-af3e-4874-9292-eaf4a1d9c6b8/tabs/_MoviesL_2023`);
    }

    getMoviePorId(id:string):Observable<Movie[]>{
      return this.http.get<Movie[]>(`https://sheet.best/api/sheets/2ac89502-af3e-4874-9292-eaf4a1d9c6b8/tabs/_MoviesL_2023/id/${id}`);
    }

    postAgregarMovie(movie:Movie):Observable<Movie>{
      return this.http.post<Movie>(`https://sheet.best/api/sheets/2ac89502-af3e-4874-9292-eaf4a1d9c6b8/tabs/_MoviesL_2023`, movie);
    }

    patchActualizarMovie(movie:Movie):Observable<Movie>{
      return this.http.put<Movie>(`https://sheet.best/api/sheets/2ac89502-af3e-4874-9292-eaf4a1d9c6b8/tabs/_MoviesL_2023/id/${movie.id}`, movie);
    }

    DeleteMovie(id:string):Observable<any>{
      return this.http.delete<any>(`https://sheet.best/api/sheets/2ac89502-af3e-4874-9292-eaf4a1d9c6b8/tabs/_MoviesL_2023/id/${id}`);
    }

}
