import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { compChartsComponent } from './compCharts.component';

describe('compChartsComponent', () => {
  let component: compChartsComponent;
  let fixture: ComponentFixture<compChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ compChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(compChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
