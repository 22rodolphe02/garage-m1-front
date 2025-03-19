import { Component } from '@angular/core';
import {Tab, TabList, Tabs} from 'primeng/tabs';
import {RouterLink, RouterModule, RouterOutlet} from '@angular/router';
import {TabMenu} from '../../../../core/models/menu.model';
import {CurrencyPipe, DatePipe} from '@angular/common';
import {UploadImageComponent} from '../../../../shared/components/upload-image/upload-image.component';

@Component({
  selector: 'g-client-details-page',
  imports: [
    TabList,
    Tab,
    Tabs,
    RouterModule,
    CurrencyPipe,
    DatePipe,
    UploadImageComponent
  ],
  templateUrl: './client-details-page.component.html',
  styleUrl: './client-details-page.component.scss'
})
export class ClientDetailsPageComponent {

  id !: number

  dateTest: Date = new Date();

  tabs: TabMenu[] = [];

  ngOnInit(): void {
    this.id = 1;
    this.initTabMenu();
  }

  initTabMenu(){
    this.tabs = [
      {
        label : "Véhicules",
        link : `/user-space/clients/${this.id}`,
        icon: 'pi pi-car'
      },
      {
        label : "Interventions",
        link : `/user-space/clients/${this.id}/interventions-history`,
        icon: 'pi pi-cog'
      },
      {
        label : "Factures",
        link :  `/user-space/clients/${this.id}/transactions`,
        icon: 'pi pi-receipt'
      }
    ]
  }
}
