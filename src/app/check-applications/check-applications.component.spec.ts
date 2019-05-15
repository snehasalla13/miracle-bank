import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckApplicationsComponent } from './check-applications.component';

describe('CheckApplicationsComponent', () => {
  let component: CheckApplicationsComponent;
  let fixture: ComponentFixture<CheckApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
