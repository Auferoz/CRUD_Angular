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
      width: 276px;
      border-radius: 10px;
    }
    mat-label{
      font-size:12px;
    }
  `]
})
export class AgregarComponent implements OnInit {

  colors = [
    {id: 'info', desc: 'Info - Celeste'},
    {id: 'success', desc: 'Success - Azul'},
    {id: 'danger', desc: 'Danger - Rojo'},
    {id: 'warning',desc: 'Warning - Amarillo'}
  ];

  plataformas = [
    {id:'Riot Launcher',desc:'Riot Launcher'},
    {id:'Steam',desc:'Steam'},
    {id:'Xbox App',desc:'Xbox App'},
    {id:'Xbox Series X',desc:'Xbox Series X'},
  ];

  iconos = [
    {id:'fa-brands fa-xbox', desc:'Xbox'},
    {id:'fa-brands fa-steam', desc:'Steam'},
    {id:'fa-solid fa-computer', desc:'PC'},
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
  
  regresar(){
    this.router.navigate(['/heroes/listado']);
  }

}