import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';
import { Graph } from '../../interfaces/graphs.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`
  `]
})
export class ListadoComponent implements OnInit {

  heroes: Heroe[] = [];
  graphs: Graph[] = [];
  totalItems: any = '';
  totalPercent: number = 100;

  constructor(
    private heroesService: HeroesService,
  ) { }

  ngOnInit(): void {
    this.heroesService.getSheetGames()
    .subscribe( heroes => {
      this.heroes = heroes;
    })
    
    this.heroesService.getGraph()
    .subscribe( graphs => {
      this.graphs = graphs;
    })
  }

}