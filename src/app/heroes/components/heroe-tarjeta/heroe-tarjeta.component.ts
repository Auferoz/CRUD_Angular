import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [`
  mat-card {
      margin: 20px 0px !important;
    }
  `]
})
export class HeroeTarjetaComponent {

  @Input() heroe!: Heroe

}