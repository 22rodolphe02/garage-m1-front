import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceListPageComponent } from './service-list-page.component';

describe('ServiceListPageComponent', () => {
  let component: ServiceListPageComponent;
  let fixture: ComponentFixture<ServiceListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
