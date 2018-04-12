import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectpieComponent } from './sectpie.component';

describe('SectpieComponent', () => {
  let component: SectpieComponent;
  let fixture: ComponentFixture<SectpieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectpieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectpieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
