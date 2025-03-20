import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPersonalDetailComponent } from './client-personal-detail.component';

describe('ClientPersonalDetailComponent', () => {
  let component: ClientPersonalDetailComponent;
  let fixture: ComponentFixture<ClientPersonalDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientPersonalDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientPersonalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
