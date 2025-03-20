import {Component, EventEmitter, OnDestroy, Output} from '@angular/core';
import {Client} from '../../models/client.model';
import {Observable} from 'rxjs';
import {ClientService} from '../../services/client.service';

@Component({
  selector: 'g-client-list',
  imports: [
  ],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.scss'
})
export class ClientListComponent implements OnDestroy{
  currencyCode: string = 'MGA '

  @Output() rowId: EventEmitter<number> = new EventEmitter()

  clients$!: Observable<Client[]>

  onClick(number: number) {
    this.rowId.emit(number);
  }

  constructor(private clientService: ClientService) {

  }

  ngOnDestroy(): void {

  }


}
