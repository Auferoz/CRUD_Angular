import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';
import { Movie } from '../../../interfaces/movies.interface';

@Component({
  selector: 'app-list-movies2022',
  templateUrl: './list-movies2022.component.html',
  styleUrls: ['./list-movies2022.component.css']
})
export class ListMovies2022Component implements OnInit{

  sheets: Movie[] = [];

  constructor(
    private heroesService: HeroesService,
  ) { }

  ngOnInit(): void {
    this.heroesService.getSheetMovies2022()
    .subscribe( movies => {
      this.sheets = movies;
      console.log(this.sheets);
    })
  }

}
