import {Component, Input} from '@angular/core';
import {Avatar} from 'primeng/avatar';
import {RouterLink, RouterModule} from '@angular/router';
import {HeaderMenu} from '../../../core/models/menu.model';

@Component({
  selector: 'g-header',
  imports: [
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input({alias: 'menu'}) menus: HeaderMenu[] = []
}
