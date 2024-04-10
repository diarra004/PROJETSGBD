import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  hide: boolean = true;
  email: string = '';
  mot_de_passe: string = '';
  errorMessage: string = '';

  constructor( private router: Router) {}

  togglePasswordVisibility() {
    this.hide = !this.hide;
  }

  
}
