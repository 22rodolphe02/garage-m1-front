import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardPageComponent } from './admin-dashboard-page.component';

describe('AdminDashboardComponent', () => {
  let component: AdminDashboardPageComponent;
  let fixture: ComponentFixture<AdminDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDashboardPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
