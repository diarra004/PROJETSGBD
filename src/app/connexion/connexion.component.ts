import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

export interface AuthResponse {
  token: string;
  user : User ; // Ajoutez une propriété pour le rôle de l'utilisateur
}

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

  constructor(private authService: AuthService, private router: Router) {}

  togglePasswordVisibility() {
    this.hide = !this.hide;
  }

  onSubmit() {
    if (this.email && this.mot_de_passe) {
      this.authService.login(this.email, this.mot_de_passe).subscribe(
        (response: AuthResponse) => {
          if (response.role === 'respo') {
            this.router.navigate(['/responsable']);
          } else if (response.role === 'etudiant') {
            this.router.navigate(['/etudiant']);
          } else {
            console.error('Rôle non pris en charge :', response.role);
            this.errorMessage = 'Rôle non pris en charge';
          }
        },
        (error) => {
          console.error('Erreur de connexion :', error);
          if (error.status === 401) {
            this.errorMessage = 'Identifiants invalides';
          } else {
            this.errorMessage = 'Erreur de connexion';
          }
        }
      );
    } else {
      this.errorMessage = 'Veuillez saisir l\'email et le mot de passe';
    }
  }
}
