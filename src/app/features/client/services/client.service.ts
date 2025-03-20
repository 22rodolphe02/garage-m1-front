import { Injectable } from '@angular/core';
import {Client} from '../models/client.model';
import {ResourceService} from '../../../core/services/resource.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends ResourceService<Client>{

  constructor(http: HttpClient) {
    super(http);
    this.setApiUrl("clients")
  }


}
