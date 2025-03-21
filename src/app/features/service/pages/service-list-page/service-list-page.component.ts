import { Component } from '@angular/core';
import {ServiceListComponent} from '../../components/service-list/service-list.component';
import {Button} from 'primeng/button';
import {RouterLink} from '@angular/router';
import {PaginationComponent} from '../../../../shared/components/pagination/pagination.component';

@Component({
  selector: 'g-service-list-page',
  imports: [
    ServiceListComponent,
    Button,
    RouterLink,
    PaginationComponent
  ],
  templateUrl: './service-list-page.component.html',
  styleUrl: './service-list-page.component.scss'
})
export class ServiceListPageComponent {

}
