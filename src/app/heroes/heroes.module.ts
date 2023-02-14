import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';

import { HomeComponent } from './pages/home/home.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { ListadoComponent } from './pages/listado/listado.component';

import { ImagenPipe } from './pipes/imagen.pipe';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';

import { ListMoviesComponent } from './pages/Movie2023/list-movies/list-movies.component';
import { VerMovieComponent } from './pages/Movie2023/ver-movie/ver-movie.component';
import { AgregarMovieComponent } from './pages/Movie2023/agregar-movie/agregar-movie.component';


import { ListMovies2022Component } from './pages/Movie2022/list-movies2022/list-movies2022.component';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent,
    HeroeTarjetaComponent,
    ImagenPipe,
    ListMoviesComponent,
    VerMovieComponent,
    AgregarMovieComponent,
    ConfirmarComponent,
    ListMovies2022Component
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }