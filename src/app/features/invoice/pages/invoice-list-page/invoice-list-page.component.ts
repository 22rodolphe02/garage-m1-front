import { Component } from '@angular/core';
import {InvoiceListComponent} from '../../components/invoice-list/invoice-list.component';
import {PaginationComponent} from '../../../../shared/components/pagination/pagination.component';

@Component({
  selector: 'g-invoice-list-page',
  imports: [
    InvoiceListComponent,
    PaginationComponent
  ],
  templateUrl: './invoice-list-page.component.html',
  styleUrl: './invoice-list-page.component.scss'
})
export class InvoiceListPageComponent {

}
