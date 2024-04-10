// connexion.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { catchError, switchMap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  hide: boolean = true;
  credentials = {
    email: '',
    mot_de_passe: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.credentials).pipe(
      switchMap(() => this.authService.getUserInfo()),
      catchError(error => {
        console.error('Erreur lors de la connexion ou de la récupération des informations utilisateur:', error);
        return throwError(error); // Renvoyer l'erreur pour être gérée par le composant
      })
    ).subscribe(
      userInfo => {
        if (userInfo.role === 'responsable') {
          this.router.navigate(['/responsable']);
        } else if (userInfo.role === 'etudiant') {
          this.router.navigate(['/etudiant']);
        } else {
          console.error('Rôle non reconnu');
        }
      },
      error => {
        console.error('Échec de la connexion ou de la récupération des informations utilisateur:', error);
        // Gérer les erreurs d'authentification ou de récupération des informations utilisateur
      }
    );
  }
  
}
