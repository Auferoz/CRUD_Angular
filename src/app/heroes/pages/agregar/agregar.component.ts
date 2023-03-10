import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { switchMap } from 'rxjs/operators';

import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

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

  status = [
    {id:'abandoned', desc:'ABANDONED'},
    {id:'active', desc:'ACTIVE'},
    {id:'inactive', desc:'INACTIVE'},
    {id:'main story', desc:'MAIN STORY'},
    {id:'completed', desc:'COMPLETED'},
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
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ){}

  ngOnInit(): void {
    if( !this.router.url.includes('editar') ) {
      return;
    }

    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.heroesService.getGamePorId(id))
      )
      .subscribe ( (heroe: Heroe[]) => this.heroe = heroe[0]);
  }

  guardar(){

    if( this.heroe.title.trim().length === 0){
      return;
    }

    if( this.heroe.id ){
      // Actualizar 
      this.heroesService.patchActualizarGame( this.heroe )
        .subscribe( heroe => this.mostrarSnalkbar('Registro Actualizado'));
    } else {
      // Crear 
      this.heroesService.postAgregarGame( this.heroe )
        .subscribe( heroe => {
          this.router.navigate(['/heroes/editar', heroe.id]);
          this.mostrarSnalkbar('Registro Creado');
        })
    }

  }

  borrarHeroe(){

    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      data: { ...this.heroe }
    });

    dialog.afterClosed().subscribe(
      (resp => {
        if(resp){
            this.heroesService.DeleteGame( this.heroe.id! )
              .subscribe( resp => {
                this.router.navigate(['/heroes']);
              });
        }
      })
    )


  }

  mostrarSnalkbar(mensaje: string){
    this.snackBar.open( mensaje, 'Ok!', {
      duration: 2500
    });
  }
  
  regresar(){
    this.router.navigate(['/heroes/listado']);
  }

}