import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceService<T> {

  protected apiUrl!: string;

  constructor(protected http: HttpClient) {}

  // Méthode pour configurer l'URL de l'API
  setApiUrl(apiUrl: string): void {
    this.apiUrl = `${environment.apiUrl.replace(/\/$/, '')}/${apiUrl.replace(/^\//, '')}`;

    console.log("api ulr = ", this.apiUrl);
  }

  // Headers optionnels pour les requêtes HTTP
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Récupérer tous les éléments
  getAll(params?: HttpParams): Observable<T[]> {
    return this.http.get<T[]>(this.apiUrl, {params});
  }

  // Récupérer un élément par son ID
  getById(id: number | string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${id}`, this.httpOptions);
  }

  // Créer un nouvel élément
  create(item: T): Observable<T> {
    return this.http.post<T>(this.apiUrl, item, this.httpOptions);
  }

  // Mettre à jour un élément existant
  update(id: number | string, item: T): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${id}`, item, this.httpOptions);
  }

  // Supprimer un élément par son ID
  delete(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, this.httpOptions);
  }
}
