import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

interface AuthResponse {
  accessToken: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';
 
  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/login`, credentials).pipe(
      tap(response => {
        if (response.accessToken) {
          console.log('huuuu')
          localStorage.setItem('accessToken', response.accessToken);
        }
      }),
      catchError(error => {
        console.error('Erreur lors de la connexion:', error);
        return throwError(error);
      })
    );
  }

  getUserInfo(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user`).pipe(
      catchError(error => {
        console.error('Erreur lors de la récupération des informations utilisateur:', error);
        return throwError(error);
      })
    );
  }
  isAuthenticated(): boolean {
    // Vérifier si l'utilisateur est authentifié en fonction de la présence du token dans localStorage
    return !!localStorage.getItem('accessToken');
  }
}
