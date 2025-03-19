import { Component } from '@angular/core';
import {Button} from "primeng/button";
import {InputGroup} from 'primeng/inputgroup';
import {InputGroupAddon} from 'primeng/inputgroupaddon';
import {InputText} from 'primeng/inputtext';
import {VehicleListComponent} from '../../components/vehicle-list/vehicle-list.component';
import {PaginationComponent} from '../../../../shared/components/pagination/pagination.component';

@Component({
  selector: 'app-vehicle-list-page',
  imports: [
    Button,
    InputGroup,
    InputGroupAddon,
    InputText,
    VehicleListComponent,
    PaginationComponent
  ],
  templateUrl: './vehicle-list-page.component.html',
  styleUrl: './vehicle-list-page.component.scss'
})
export class VehicleListPageComponent {

}
