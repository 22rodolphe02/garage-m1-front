import { Injectable } from '@angular/core';
import {ResourceService} from '../../../core/services/resource.service';
import {Invoice} from '../models/invoice.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Vehicle} from '../../vehicle/models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService extends ResourceService<Invoice>{

  constructor(http: HttpClient) {
    super(http);
    this.setApiUrl("invoices")
  }

  getAllByClient(clientId: number, params?: HttpParams): Observable<Invoice[]>{
    const preparedUrl = `${this.apiUrl}/clients/${clientId}`
    return this.http.get<Invoice[]>(preparedUrl, {params});
  }
}
