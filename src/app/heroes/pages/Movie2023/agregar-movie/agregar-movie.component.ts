import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

import { HeroesService } from '../../../services/heroes.service';
import { Heroe } from '../../../interfaces/heroes.interface';
import { Movie } from 'src/app/heroes/interfaces/movies.interface';

@Component({
  selector: 'app-agregar-movie',
  templateUrl: './agregar-movie.component.html',
  styleUrls: ['./agregar-movie.component.css']
})
export class AgregarMovieComponent implements OnInit{

  movie: Movie = {
    title:    '',
    released: '',
    runtime:  '',
    genre:    '',
    rating:   '',
    watch:    '',
    view:     '',
    poster:   '',
    image:    '',
  }

  icon_netflix = '';
  icon_hbo =     '';
  icon_cine =    '';

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    if( !this.router.url.includes('editar') ) {
      return;
    }

    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.heroesService.getMoviePorId(id))
    )
    .subscribe ( (movie: Movie[]) => this.movie = movie[0]);
  }

  guardar(){

    if( this.movie.title.trim().length === 0){
      return;
    }

    if( this.movie.id ){
      // Actualizar 
      this.heroesService.patchActualizarMovie( this.movie )
        .subscribe( movie => {
          this.router.navigate(['/heroes/Movies2023']);
          console.log('act...', movie);
        })
    } else {
      // Crear 
      this.heroesService.postAgregarMovie( this.movie )
        .subscribe( movie => {
          this.router.navigate(['/heroes/Movies2023', movie.id]);
          console.log('crear...', movie);
        })
    }

  }

  borrarMovie(){

    this.heroesService.DeleteMovie( this.movie.id! )
      .subscribe( movie => {
        this.router.navigate(['/heroes/Movies2023']);
        console.log('delete...', movie);
      });
  }
  
  regresar(){
    this.router.navigate(['/heroes/Movies2023']);
  }

}
