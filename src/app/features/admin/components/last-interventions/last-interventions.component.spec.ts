import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastInterventionsComponent } from './last-interventions.component';

describe('LastInterventionsComponent', () => {
  let component: LastInterventionsComponent;
  let fixture: ComponentFixture<LastInterventionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastInterventionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastInterventionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
