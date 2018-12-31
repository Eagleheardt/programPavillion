import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Decorbar1Component } from './decorbar1.component';

describe('Decorbar1Component', () => {
  let component: Decorbar1Component;
  let fixture: ComponentFixture<Decorbar1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Decorbar1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Decorbar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
