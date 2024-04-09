import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthResponse } from './connexion.component'; // Assurez-vous d'importer l'interface AuthResponse si nécessaire

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000'; // URL de base de votre backend

  constructor(private http: HttpClient) { }

  login(email: string, motDePasse: string): Observable<AuthResponse> {
    const credentials = { email, mot_de_passe };

    // Envoi de la requête POST à l'endpoint /auth/login sur le backend
    return this.http.post<AuthResponse>(`${this.baseUrl}/auth/login`, credentials)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('Erreur dans le service AuthService :', error);
    return throwError('Erreur serveur'); // ou retournez un message d'erreur personnalisé
  }
}
