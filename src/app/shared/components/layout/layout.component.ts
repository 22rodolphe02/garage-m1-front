import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {adminHeaderMenuData} from '../../../core/config/menu.config';

@Component({
  selector: 'app-layout',
  imports: [
    RouterModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  protected readonly adminHeaderMenuData = adminHeaderMenuData;
}
