import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionsStatChartComponent } from './interventions-stat-chart.component';

describe('InterventionsStatChartComponent', () => {
  let component: InterventionsStatChartComponent;
  let fixture: ComponentFixture<InterventionsStatChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterventionsStatChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterventionsStatChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
