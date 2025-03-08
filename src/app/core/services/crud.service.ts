import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Service disponible globalement
})
export class CrudService<T> {
  constructor(private http: HttpClient) {}

  // Méthode pour récupérer tous les éléments
  getAll(endpoint: string, params?: HttpParams): Observable<T[]> {
    return this.http.get<T[]>(endpoint, { params });
  }

  // Méthode pour récupérer un élément par son ID
  getById(endpoint: string, id: number | string): Observable<T> {
    return this.http.get<T>(`${endpoint}/${id}`);
  }

  // Méthode pour créer un nouvel élément
  create(endpoint: string, item: T): Observable<T> {
    return this.http.post<T>(endpoint, item);
  }

  // Méthode pour mettre à jour un élément existant
  update(endpoint: string, id: number | string, item: T): Observable<T> {
    return this.http.put<T>(`${endpoint}/${id}`, item);
  }

  // Méthode pour supprimer un élément
  delete(endpoint: string, id: number | string): Observable<void> {
    return this.http.delete<void>(`${endpoint}/${id}`);
  }
}
