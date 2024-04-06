// connexion.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  hide: boolean = true;

  togglePasswordVisibility() {
    this.hide = !this.hide;
  }
  email: string = '';
  password: string = '';
  isTeacher: boolean = false;

  constructor(private router: Router) {}

  onSubmit() {
    // Appel à votre service d'authentification pour vérifier les informations d'identification
    // Vous devez appeler votre backend Node.js pour vérifier l'authentification et le rôle
    if (this.email && this.password) {
      // Exemple basique : redirection en fonction de la réponse
      if (this.isTeacher) {
        this.router.navigate(['/responsable']); // Redirection vers la page du responsable de classe
      } else {
        this.router.navigate(['/etudiant']); // Redirection vers la page de l'étudiant
      }
    }
  }

 
 
}
