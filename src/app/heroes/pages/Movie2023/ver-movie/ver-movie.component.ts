import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

import { Movie } from '../../../interfaces/movies.interface';
import { HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-ver-movie',
  templateUrl: './ver-movie.component.html',
  styleUrls: ['./ver-movie.component.css']
})
export class VerMovieComponent implements OnInit{

  movie!: Movie;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.heroesService.getMoviePorId(id))
    )
    .subscribe ( (movie: Movie[]) => this.movie = movie[0]);
  }

  regresar(){
    this.router.navigate(['/heroes/Movies2023']);
  }

}
