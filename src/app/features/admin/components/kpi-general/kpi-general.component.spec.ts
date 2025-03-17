import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiGeneralComponent } from './kpi-general.component';

describe('StatComponent', () => {
  let component: KpiGeneralComponent;
  let fixture: ComponentFixture<KpiGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KpiGeneralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KpiGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
