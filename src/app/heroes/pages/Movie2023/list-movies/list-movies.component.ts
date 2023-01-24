import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';
import { Heroe } from '../../../interfaces/heroes.interface';
import { Movie } from '../../../interfaces/movies.interface';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {
  
  sheets: Movie[] = [];

  constructor(
    private heroesService: HeroesService,
  ) { }

  ngOnInit(): void {
    this.heroesService.getSheetMovies()
    .subscribe( movies => {
      this.sheets = movies;
    })
  }


}
