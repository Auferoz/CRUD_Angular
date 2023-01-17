import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen',
  pure: false
})
export class ImagenPipe implements PipeTransform {

  transform( heroe: Heroe): string {

    if( !heroe.id && !heroe.poster ){
      return 'assets/no-image.png';
    } else if ( heroe.poster ) {
      return heroe.poster;
    } else {
      return `assets/heroes/${ heroe.id }.jpg`;
    }
  }

}