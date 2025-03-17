import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Button} from 'primeng/button';
import {Select} from 'primeng/select';
import {DropdownModule} from 'primeng/dropdown';
import {Kpi} from '../../../core/models/kpi.model';

@Component({
  selector: 'g-kpi-card',
  imports: [
    CommonModule,
    FormsModule,
    Button,
    DropdownModule,

  ],
  templateUrl: './kpi-card.component.html',
  styleUrl: './kpi-card.component.scss'
})
export class KpiCardComponent {

  @Input() title!: string;
  @Input() icon!: string;
  @Input() iconColor: string = ''; // Définition d'une valeur par défaut
  @Input() data: Kpi[] = [];
  @Input() darkMode: boolean = false;
  @Input() actionLink?: string;
  @Input() contentColor?: string;
  @Input() dropdownOptions?: string[];
  selectedOption: string = 'Aujourd\'hui';

  ngOnInit() {
    if (this.dropdownOptions && this.dropdownOptions.length > 0) {
      this.selectedOption = this.dropdownOptions[0];
    }
  }
}
