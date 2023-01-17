import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img {
      width: 205px;
      border-radius: 10px;
    }
  `]
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];

  heroe: Heroe = {
    id: '',
    title: '',
    released: '',
    poster: '',
    image: '',
    genre: '',
    platform_name: '',
    platform_icon: '',
    rating: '',
    video: '',
    color: '',
    status: '',
    any: '',
    achievements_obt: '',
    achievements_ttl: '',
    hours_mttf: '',
    hltb_mainyextra: '',
    hltb_full: '',
    date_start: '',
    date_mainstory: '',
    date_completed: '',
    last_dayplay: '',
    trueAchievements: '',
    square: ''
  }

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
      switchMap( ({ id }) => this.heroesService.getHeroePorId(id)))
     .subscribe ( heroe => this.heroe = heroe);

  }

  guardar(){

    if( this.heroe.title.trim().length === 0){
      return;
    }

    if( this.heroe.id ){
      // Actualizar 
      this.heroesService.patchActualizarHeroe( this.heroe )
        .subscribe( heroe => console.log('Act..', heroe))
    } else {
      // Crear 
      this.heroesService.postAgregarHeroe( this.heroe )
        .subscribe( heroe => {
          this.router.navigate(['/heroes/editar', heroe.id]);
        })
    }

  }

  borrarHeroe(){

    this.heroesService.DeleteHeroe( this.heroe.id! )
      .subscribe( resp => {
        this.router.navigate(['/heroes']);
      });
  }

}