import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {InterventionService} from '../../services/intervention.service';
import {Intervention} from '../../models/intervention.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'g-intervention-list',
  imports: [],
  templateUrl: './intervention-list.component.html',
  styleUrl: './intervention-list.component.scss'
})
export class InterventionListComponent implements OnInit, OnDestroy{

  @Input({alias: "url"}) apiUrl ?: string
  @Input({alias: 'data'}) interventions: Intervention[] = []

  private subscription!: Subscription


  constructor(private interventionService: InterventionService) {
  }

  ngOnDestroy(): void {
    this.closObservable();
  }

  ngOnInit(): void {
    this.setInterventions();
  }

  public setInterventions(){
    if (this.apiUrl != null){
      const filters = { status: 'active', age: 'gt:30' };
      const sort = 'nom:asc';
      const pagination = { page: 2, limit: 10 };
      this.subscription = this.interventionService.filteredInterventions(filters, sort, pagination, this.apiUrl).subscribe(
        (data: Intervention[]) => {
          this.interventions = data
        }
      )
    }

  }

  private closObservable(){
    this.subscription.unsubscribe();
  }

}
