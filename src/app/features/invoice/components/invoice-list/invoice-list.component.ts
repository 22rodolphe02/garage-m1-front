import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {Invoice} from '../../models/invoice.model';
import {InvoiceService} from '../../services/invoice.service';
import {RouterLink} from '@angular/router';
import {CurrencyPipe, DatePipe} from '@angular/common';

@Component({
  selector: 'g-invoice-list',
  imports: [
    RouterLink,
    DatePipe,
    CurrencyPipe
  ],
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.scss'
})
export class InvoiceListComponent {
  @Input() clientId?: number;

  numbers : number[] = []

  data$ !: Observable<Invoice[]>;

  dateTest: Date = new Date();

  billing: number = 25000;


  constructor(private invoiceService: InvoiceService) {
    this.numbers = Array.from(Array(6).keys()).map(i => i + 1);
  }

  setData(){
    if (this.clientId){
      this.data$ = this.invoiceService.getAllByClient(this.clientId)
    }else {
      this.data$ = this.invoiceService.getAll()
    }
  }
}
