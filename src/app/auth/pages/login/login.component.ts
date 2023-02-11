import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Auth } from '../../interfaces/auth.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  auth!: Auth;

  constructor(
    private router: Router,
    private authService: AuthService
  ){}

  login(){

    this.authService.login()
    // .subscribe ( (resp: Auth[]) => this.auth = resp[0]);
      // .subscribe((resp: Auth[]) => {
      //   console.log(resp[0])
      
      //   if( resp[0].id ){
      //     this.router.navigate(['./heroes/listado'])
      //   }
      // })
      .subscribe(resp => {
        console.log(resp)
        if( resp[0].id ){
          this.router.navigate(['./heroes/listado'])
        }
      })

  }

}
