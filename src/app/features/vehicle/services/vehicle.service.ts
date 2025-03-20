import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResourceService} from '../../../core/services/resource.service';
import {Vehicle} from '../models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService extends ResourceService<Vehicle>{

  constructor(http: HttpClient) {
    super(http);
    this.setApiUrl("vehicles")
  }

  getAllByClient(clientId: number){
    const preparedUrl = `${this.apiUrl}/clients/${clientId}`
    return this.http.get<Vehicle[]>(preparedUrl);
  }


}
