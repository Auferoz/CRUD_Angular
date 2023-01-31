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

  anyPercent(){
    const ttl = parseFloat(this.heroe.achievements_ttl);
    const obt = parseFloat(this.heroe.achievements_obt);
    return (obt * 100 )/ttl;
  }

}