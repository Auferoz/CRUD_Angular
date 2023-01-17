import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 10px;
    }
    .mask-custom {
      backdrop-filter: contrast(140%) brightness(100%) saturate(100%) sepia(50%) hue-rotate(0deg) grayscale(0%) invert(0%) blur(0px);
      mix-blend-mode: lighten;
      background: rgba(161, 44, 199, 0.31);
      opacity: 1;
    }
  `]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;
  youtube = "https://www.youtube.com/watch?v=";
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.heroesService.getHeroePorId(id))
    )
     .subscribe ( heroe => this.heroe = heroe);
  }

  regresar(){
    this.router.navigate(['/heroes/listado']);
  }
}