import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueByServiceComponent } from './revenue-by-service.component';

describe('RevenueByServiceComponent', () => {
  let component: RevenueByServiceComponent;
  let fixture: ComponentFixture<RevenueByServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevenueByServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenueByServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
