import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotpicksComponent } from './hotpicks.component';

describe('HotpicksComponent', () => {
  let component: HotpicksComponent;
  let fixture: ComponentFixture<HotpicksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotpicksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotpicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
