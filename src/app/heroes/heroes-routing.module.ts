import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListMoviesComponent } from './pages/Movie2023/list-movies/list-movies.component';
import { VerMovieComponent } from './pages/Movie2023/ver-movie/ver-movie.component';
import { AgregarMovieComponent } from './pages/Movie2023/agregar-movie/agregar-movie.component';

const rutas: Routes = [
  {
    path: '', 
    component: HomeComponent,
    children: [
    {path: 'listado', component: ListadoComponent},
    {path: 'listado2022', component: ListadoComponent},
    {path: 'agregar', component: AgregarComponent},
    {path: 'editar/:id', component: AgregarComponent},
    {path: 'buscar', component: BuscarComponent},
    {path: 'Movies2023', component: ListMoviesComponent},
    {path: 'Movies2023/:id', component: VerMovieComponent},
    {path: 'agregar/movie', component: AgregarMovieComponent},
    {path: 'editar/movie/:id', component: AgregarMovieComponent},
    {path: ':id', component: HeroeComponent},
    {path: '**', redirectTo: 'listado'},
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild( rutas )
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
