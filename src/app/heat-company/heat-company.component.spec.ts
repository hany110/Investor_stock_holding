import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatCompanyComponent } from './heat-company.component';

describe('HeatCompanyComponent', () => {
  let component: HeatCompanyComponent;
  let fixture: ComponentFixture<HeatCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeatCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
