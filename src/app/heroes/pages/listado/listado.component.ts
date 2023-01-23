import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';
import { Graph } from '../../interfaces/graphs.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
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
    this.heroesService.getHeroes()
    .subscribe( heroes => {
      this.heroes = heroes;
    })
    
    this.heroesService.getGraph()
    .subscribe( graphs => {
      this.graphs = graphs;
    })

    this.graphTotal();
  }

  graphTotal(){
    this.heroesService.getHeroes()
      .forEach( heroes => {
        this.totalItems = heroes;
        console.log(this.totalItems);
        const totalItems = this.totalItems.length;
        const abandonedItems = this.totalItems.filter((heroes: { status: string; }) => heroes.status === 'abandoned').length;
        const activeItems = this.totalItems.filter((heroes: { status: string; }) => heroes.status === 'active').length;
        const inactiveItems = this.totalItems.filter((heroes: { status: string; }) => heroes.status === 'inactive').length;
        const mainstoryItems = this.totalItems.filter((heroes: { status: string; }) => heroes.status === 'main story').length;
        const completedItems = this.totalItems.filter((heroes: { status: string; }) => heroes.status === 'completed').length;
        
        console.log(totalItems, abandonedItems, activeItems, inactiveItems, mainstoryItems, completedItems);

        const abandonedPercent = (abandonedItems / totalItems) * this.totalPercent;
        const activePercent = (activeItems / totalItems) * this.totalPercent;
        const inactivePercent = (inactiveItems / totalItems) * this.totalPercent;
        const mainstoryPercent = (mainstoryItems / totalItems) * this.totalPercent;
        const completedPercent = (completedItems / totalItems) * this.totalPercent;

        console.log(abandonedPercent, activePercent, inactivePercent, mainstoryPercent, completedPercent);
      })
  }

  graphPercent(){
    return
  }


}
