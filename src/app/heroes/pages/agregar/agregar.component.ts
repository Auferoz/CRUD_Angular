import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
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
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  }

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.heroesService.getHeroePorId(id)))
     .subscribe ( heroe => this.heroe = heroe);
  }

  guardar(){

    if( this.heroe.superhero.trim().length === 0){
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
          this.router.navigate(['/heroes', heroe.id]);
        })
    }

  }

}