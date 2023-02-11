import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../interfaces/auth.interface';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _auth: Auth | undefined;

  get auth(): Auth{
    return { ...this._auth! }
  }

  constructor(
    private http: HttpClient,
  ) { }

  login():Observable<Auth[]>{
    return this.http.get<Auth[]>(`https://sheet.best/api/sheets/2ac89502-af3e-4874-9292-eaf4a1d9c6b8/tabs/_Usuarios/id/1`)
                .pipe(
                  tap( (auth: Auth[]) => this._auth = auth[0])
                );
  }
}
