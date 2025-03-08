import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  // Méthode pour se connecter
  login(email: string, password: string): Observable<User> {
    return this.http
      .post<User>('/garage/api/auth/login', { email, password })
      .pipe(
        tap((user) => {
          this.currentUserSubject.next(user); // Mettre à jour l'utilisateur courant
          localStorage.setItem('currentUser', JSON.stringify(user)); // Stocker l'utilisateur dans le localStorage
        })
      );
  }

  // Méthode pour se déconnecter
  logout(): void {
    localStorage.removeItem('currentUser'); // Supprimer l'utilisateur du localStorage
    this.currentUserSubject.next(null); // Mettre à jour l'utilisateur courant
    this.router.navigate(['/login']); // Rediriger vers la page de connexion
  }

  // Méthode pour vérifier si l'utilisateur est connecté
  isAuthenticated(): boolean {
    return !!this.currentUserSubject.value; // Retourne true si l'utilisateur est connecté
  }

  // Méthode pour récupérer l'utilisateur courant
  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }
}
