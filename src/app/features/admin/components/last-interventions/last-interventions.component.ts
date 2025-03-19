import { Component } from '@angular/core';
import {Button} from "primeng/button";
import {
    InterventionListComponent
} from "../../../interventions/component/intervention-list/intervention-list.component";

@Component({
  selector: 'g-last-interventions',
    imports: [
        InterventionListComponent
    ],
  templateUrl: './last-interventions.component.html',
  styleUrl: './last-interventions.component.scss'
})
export class LastInterventionsComponent {

}
