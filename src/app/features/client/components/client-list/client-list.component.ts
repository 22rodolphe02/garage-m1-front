import {Component, EventEmitter, Output} from '@angular/core';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'g-client-list',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.scss'
})
export class ClientListComponent {
  currencyCode: string = 'MGA '

  @Output() rowId: EventEmitter<number> = new EventEmitter()

  onClick(number: number) {
    this.rowId.emit(number);
  }
}
